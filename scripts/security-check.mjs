import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const deps = { ...pkg.dependencies, ...pkg.devDependencies };
const unpinned = Object.entries(deps).filter(([, version]) => version === "latest");

if (unpinned.length > 0) {
  console.error("security-check: pin versions instead of \"latest\":", unpinned.map(([name]) => name).join(", "));
  process.exit(1);
}

const jsonEscape = '.replace(/</g, "\\\\u003c")';
for (const file of ["src/layouts/BaseLayout.astro", "src/components/PhotoGallery.astro"]) {
  const source = readFileSync(join(root, file), "utf8");
  if (!source.includes(jsonEscape)) {
    console.error(`security-check: missing JSON script escape in ${file}`);
    process.exit(1);
  }
}

console.log("security-check: ok");
