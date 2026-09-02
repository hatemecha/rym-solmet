import { getImage } from "astro:assets";
import type { Project } from "../data/projects";

const galleries = new Map<string, ReturnType<typeof createGallery>>();
async function createGallery(project: Project) {
  return Promise.all(project.images.map(async (image) => {
    const max = Math.min(1920, image.src.width);
    const widths = [...new Set([480, 960, 1440, max].filter((width) => width <= max))];
    const sources = await Promise.all(widths.map((width) =>
      getImage({ src: image.src, width, format: "jpeg", quality: 85 }),
    ));
    return {
      src: sources.at(-1)!.src,
      srcset: sources.map((source, index) => `${source.src} ${widths[index]}w`).join(", "),
      width: max,
      height: Math.round(image.src.height * max / image.src.width),
      alt: image.alt,
      caption: `${project.title} · ${project.materials}`,
    };
  }));
}
export function getGallery(project: Project) {
  if (!galleries.has(project.slug)) galleries.set(project.slug, createGallery(project));
  return galleries.get(project.slug)!;
}
