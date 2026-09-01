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
import frenteParrilla02 from "../assets/projects/frente-parrilla-metalico/02.jpeg";
import galpon01 from "../assets/projects/galpon-estructura-metalica/01.jpeg";
import galpon02 from "../assets/projects/galpon-estructura-metalica/02.jpeg";
import invernadero01 from "../assets/projects/invernadero-metalico/01.jpeg";
import invernadero02 from "../assets/projects/invernadero-metalico/02.jpeg";
import mesa01 from "../assets/projects/mesa-galvanizada/01.jpeg";
import pergola01 from "../assets/projects/pergola-frente-comercial/01.jpeg";
import pergola02 from "../assets/projects/pergola-frente-comercial/02.jpeg";
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
        src: frenteParrilla02,
        alt: "Frente de parrilla negro con puertas metálicas y mesada de acero",
        focalPoint: "52% 50%",
      },
      {
        src: frenteParrilla01,
        alt: "Detalle de puerta metálica negra en un frente de parrilla",
      },
    ],
  },
  {
    slug: "pergola-frente-comercial",
    title: "Pérgola exterior",
    materials: "Metal, vidrio y madera",
    section: "featured",
    order: 5,
    layout: "landscape",
    images: [
      {
        src: pergola01,
        alt: "Pérgola metálica con listones de madera instalada sobre un frente comercial",
        focalPoint: "50% 54%",
      },
      {
        src: pergola02,
        alt: "Vista completa de un frente comercial con cerramiento de vidrio y pérgola",
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
        alt: "Invernadero compacto con perfilería metálica y cerramiento traslúcido",
        focalPoint: "50% 48%",
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
    materials: "Perfilería metálica y vidrio",
    section: "featured",
    order: 8,
    layout: "landscape",
    images: [
      {
        src: baranda02,
        alt: "Baranda negra con paños de vidrio instalada en una terraza",
        focalPoint: "50% 48%",
      },
      {
        src: baranda01,
        alt: "Detalle vertical de escalera metálica y baranda sobre una terraza",
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
        alt: "Ahumador cilíndrico de metal negro con estante inferior de madera",
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
    slug: "deck-panel-madera",
    title: "Deck y panel exterior",
    materials: "Madera y estructura metálica",
    section: "archive",
    order: 3,
    layout: "portrait",
    images: [
      {
        src: deck01,
        alt: "Deck de madera con panel vertical y sector verde en un patio",
      },
    ],
  },
  {
    slug: "cubierta-chapa",
    title: "Cubierta de chapa",
    materials: "Estructura y chapa acanalada",
    section: "archive",
    order: 4,
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
