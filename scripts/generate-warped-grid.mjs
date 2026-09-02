import { mkdirSync, writeFileSync } from "node:fs";

// Periodic shears preserve continuous cells and matching tile edges.
// Overscan covers every edge even at the strongest displacement.
const size = 768;
const tau = Math.PI * 2 / size;
function warp(u, v) {
  const x = u + 110 * Math.sin(v * tau) + 35 * Math.sin(v * tau * 2);
  const y = v + 95 * Math.sin(x * tau + 0.8);
  return [x + 55 * Math.sin(y * tau * 2 + 0.4), y];
}
const paths = [];
for (const vertical of [false, true]) {
  for (let line = -288; line <= size + 288; line += 24) {
    const points = [];
    for (let t = -288; t <= size + 288; t += 6) {
      const [x, y] = warp(vertical ? line : t, vertical ? t : line);
      points.push(`${points.length ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`);
    }
    paths.push(`<path d="${points.join("")}"/>`);
  }
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}"><g fill="none" stroke="white" stroke-width="0.8">${paths.join("")}</g></svg>`;
const directory = new URL("../src/assets/patterns/", import.meta.url);
mkdirSync(directory, { recursive: true });
writeFileSync(new URL("warped-mesh.svg", directory), svg);
