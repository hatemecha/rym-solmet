import type { ImageMetadata } from "astro";

import ahumador01 from "../assets/projects/ahumador-artesanal/01.jpeg";
import baranda01 from "../assets/projects/baranda-terraza/01.jpeg";
import baranda02 from "../assets/projects/baranda-terraza/02.jpeg";
import cajonera01 from "../assets/projects/cajonera-madera-metal/01.jpeg";
import cubierta01 from "../assets/projects/cubierta-chapa/01.jpeg";
import deck01 from "../assets/projects/deck-panel-madera/01.jpeg";
import divisor01 from "../assets/projects/divisor-madera-metal/01.jpeg";
import fachada01 from "../assets/projects/fachada-porton-metalico/01.jpeg";
import frenteParrilla01 from "../assets/projects/frente-parrilla-metalico/01.jpeg";
import frenteRejas01 from "../assets/projects/frente-rejas-vivienda/01.jpeg";
import galpon01 from "../assets/projects/galpon-estructura-metalica/01.jpeg";
import galpon02 from "../assets/projects/galpon-estructura-metalica/02.jpeg";
import invernadero01 from "../assets/projects/invernadero-metalico/01.jpeg";
import invernadero02 from "../assets/projects/invernadero-metalico/02.jpeg";
import mesa01 from "../assets/projects/mesa-galvanizada/01.jpeg";
import pergola01 from "../assets/projects/pergola-frente-comercial/01.jpeg";
import portonMadera01 from "../assets/projects/porton-madera-metal/01.jpeg";
import portonMetal01 from "../assets/projects/porton-metalico-corredizo/01.jpeg";
import puerta01 from "../assets/projects/puerta-corrediza-hierro-vidrio/01.jpeg";

export type ProjectSection = "featured" | "craft" | "archive";
export type ProjectLayout = "landscape" | "portrait" | "square" | "panorama";

export interface ProjectImage {
  src: ImageMetadata;
  alt: string;
  focalPoint?: string;
}

export interface Project {
  slug: string;
  title: string;
  materials: string;
  section: ProjectSection;
  order: number;
  layout: ProjectLayout;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: "puerta-corrediza-hierro-vidrio",
    title: "Puerta corrediza",
    materials: "Hierro y vidrio",
    section: "featured",
    order: 1,
    layout: "portrait",
    images: [
      {
        src: puerta01,
        alt: "Puerta corrediza de hierro negro y paños de vidrio instalada en un interior",
        focalPoint: "50% 48%",
      },
    ],
  },
  {
    slug: "divisor-madera-metal",
    title: "Divisor interior",
    materials: "Madera y estructura metálica",
    section: "featured",
    order: 2,
    layout: "portrait",
    images: [
      {
        src: divisor01,
        alt: "Divisor de listones de madera junto a una escalera con estructura metálica",
        focalPoint: "50% 48%",
      },
    ],
  },
  {
    slug: "galpon-estructura-metalica",
    title: "Estructura de galpón",
    materials: "Estructura metálica y cubierta",
    section: "featured",
    order: 3,
    layout: "panorama",
    images: [
      {
        src: galpon02,
        alt: "Interior de un galpón durante el montaje de la estructura metálica del techo",
        focalPoint: "50% 35%",
      },
      {
        src: galpon01,
        alt: "Vista desde abajo de cerchas metálicas y chapas traslúcidas en un galpón",
      },
    ],
  },
  {
    slug: "frente-parrilla-metalico",
    title: "Frente de parrilla",
    materials: "Chapa, acero y herrajes",
    section: "featured",
    order: 4,
    layout: "portrait",
    images: [
      {
        src: frenteParrilla01,
        alt: "Frente de parrilla negro con puertas metálicas y mesada de acero",
        focalPoint: "52% 50%",
      },
    ],
  },
  {
    slug: "pergola-frente-comercial",
    title: "Pérgola exterior",
    materials: "Metal y madera",
    section: "featured",
    order: 5,
    layout: "landscape",
    images: [
      {
        src: pergola01,
        alt: "Pérgola de estructura metálica con listones de madera sobre un frente con portón de malla",
        focalPoint: "50% 42%",
      },
    ],
  },
  {
    slug: "porton-madera-metal",
    title: "Portón exterior",
    materials: "Madera y metal",
    section: "featured",
    order: 6,
    layout: "landscape",
    images: [
      {
        src: portonMadera01,
        alt: "Portón corredizo de estructura negra con listones verticales de madera",
        focalPoint: "50% 52%",
      },
    ],
  },
  {
    slug: "invernadero-metalico",
    title: "Invernadero",
    materials: "Estructura metálica y placas traslúcidas",
    section: "featured",
    order: 7,
    layout: "portrait",
    images: [
      {
        src: invernadero01,
        alt: "Invernadero de perfilería metálica verde con placas traslúcidas y puerta corrediza abierta",
        focalPoint: "50% 46%",
      },
      {
        src: invernadero02,
        alt: "Invernadero metálico instalado en un espacio exterior",
      },
    ],
  },
  {
    slug: "baranda-terraza",
    title: "Baranda exterior",
    materials: "Perfilería metálica",
    section: "featured",
    order: 8,
    layout: "landscape",
    images: [
      {
        src: baranda02,
        alt: "Terraza con césped artificial y baranda metálica negra sobre la calle",
        focalPoint: "50% 28%",
      },
      {
        src: baranda01,
        alt: "Escalera metálica fija y baranda negra en una terraza con césped artificial",
        focalPoint: "42% 40%",
      },
    ],
  },
  {
    slug: "ahumador-artesanal",
    title: "Ahumador artesanal",
    materials: "Metal y madera",
    section: "craft",
    order: 1,
    layout: "portrait",
    images: [
      {
        src: ahumador01,
        alt: "Ahumador cilíndrico de metal negro con chimenea, ruedas y estante inferior de madera",
        focalPoint: "50% 48%",
      },
    ],
  },
  {
    slug: "mesa-galvanizada",
    title: "Mesa de trabajo",
    materials: "Chapa galvanizada",
    section: "craft",
    order: 2,
    layout: "landscape",
    images: [
      {
        src: mesa01,
        alt: "Mesa de trabajo fabricada en chapa galvanizada con estante inferior",
      },
    ],
  },
  {
    slug: "cajonera-madera-metal",
    title: "Cajonera a medida",
    materials: "Madera y estructura metálica",
    section: "craft",
    order: 3,
    layout: "portrait",
    images: [
      {
        src: cajonera01,
        alt: "Cajonera alta de madera con marco superior y estructura metálica",
      },
    ],
  },
  {
    slug: "porton-metalico-corredizo",
    title: "Portón corredizo",
    materials: "Chapa y malla metálica",
    section: "archive",
    order: 1,
    layout: "landscape",
    images: [
      {
        src: portonMetal01,
        alt: "Portón corredizo gris de chapa y paneles de malla metálica",
      },
    ],
  },
  {
    slug: "fachada-porton-metalico",
    title: "Frente metálico",
    materials: "Chapa plegada y perfilería",
    section: "archive",
    order: 2,
    layout: "portrait",
    images: [
      {
        src: fachada01,
        alt: "Frente de vivienda revestido con elementos verticales de metal negro",
      },
    ],
  },
  {
    slug: "frente-rejas-vivienda",
    title: "Rejas de frente",
    materials: "Perfilería metálica",
    section: "featured",
    order: 9,
    layout: "landscape",
    images: [
      {
        src: frenteRejas01,
        alt: "Rejas negras de barrotes verticales en el frente de una vivienda",
        focalPoint: "50% 55%",
      },
    ],
  },
  {
    slug: "deck-panel-madera",
    title: "Panel exterior",
    materials: "Madera, metal y césped artificial",
    section: "featured",
    order: 10,
    layout: "portrait",
    images: [
      {
        src: deck01,
        alt: "Panel vertical de listones de madera con tramo central de césped artificial sobre bases metálicas",
        focalPoint: "50% 48%",
      },
    ],
  },
  {
    slug: "cubierta-chapa",
    title: "Cubierta de chapa",
    materials: "Estructura y chapa acanalada",
    section: "archive",
    order: 3,
    layout: "landscape",
    images: [
      {
        src: cubierta01,
        alt: "Cubierta amplia de chapa acanalada vista desde arriba",
      },
    ],
  },
];

export const featuredProjects = projects
  .filter((project) => project.section === "featured")
  .sort((a, b) => a.order - b.order);

export const craftProjects = projects
  .filter((project) => project.section === "craft")
  .sort((a, b) => a.order - b.order);

export const heroImage: ProjectImage = {
  src: galpon02,
  alt: "Interior de un galpón durante el montaje de la estructura metálica del techo",
  focalPoint: "50% 35%",
};
