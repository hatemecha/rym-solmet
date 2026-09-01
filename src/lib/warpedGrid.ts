export type WarpedGridVariant = "opening" | "portfolio" | "contact";

export type WarpedGridTone = "on-ink" | "on-steel" | "on-canvas";

interface Point {
  x: number;
  y: number;
}

interface GridOptions {
  cols: number;
  rows: number;
  width: number;
  height: number;
}

export interface WarpedGridPaths {
  lines: string[];
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const smoothstep = (edge0: number, edge1: number, value: number) => {
  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

const openFromEdge = (point: Point, width: number, height: number, strength: number): Point => {
  const edgeX = width * 0.88;
  const band = width * 0.38;
  const influence = smoothstep(edgeX - band, edgeX + width * 0.02, point.x);
  const verticalBias = smoothstep(height * 0.12, height * 0.88, point.y);
  const spread = (point.y - height * 0.5) * 0.28 * influence * verticalBias;

  return {
    x: point.x + influence * strength * 0.65,
    y: point.y + spread,
  };
};

const deformPoint = (point: Point, variant: WarpedGridVariant, width: number, height: number): Point => {
  switch (variant) {
    case "opening": {
      const center = { x: width * 0.42, y: height * 0.56 };
      const dx = (point.x - center.x) / (width * 0.62);
      const dy = (point.y - center.y) / (height * 0.72);
      const distance = Math.hypot(dx, dy);
      const influence = 1 - smoothstep(0.08, 0.92, distance);
      const edgeWave = Math.sin((point.y / height) * Math.PI * 2) * width * 0.012;

      return {
        x: point.x - dy * width * 0.18 * influence + edgeWave,
        y: point.y + dx * height * 0.15 * influence,
      };
    }
    case "portfolio": {
      const horizontalWave = Math.sin((point.y / height) * Math.PI * 4.2);
      const verticalWave = Math.sin(
        (point.x / width) * Math.PI * 2.4 + (point.y / height) * Math.PI,
      );
      const centerWeight = Math.sin((point.x / width) * Math.PI);

      return {
        x: point.x + horizontalWave * width * 0.055 * (0.35 + centerWeight * 0.65),
        y: point.y + verticalWave * height * 0.016,
      };
    }
    case "contact": {
      const opened = openFromEdge(point, width, height, width * 0.18);
      const center = { x: width * 0.68, y: height * 0.48 };
      const dx = (opened.x - center.x) / (width * 0.7);
      const dy = (opened.y - center.y) / (height * 0.72);
      const influence = 1 - smoothstep(0.08, 0.92, Math.hypot(dx, dy));

      return {
        x: opened.x - dy * width * 0.13 * influence,
        y: opened.y + dx * height * 0.16 * influence,
      };
    }
    default: {
      const _exhaustive: never = variant;
      return _exhaustive;
    }
  }
};

const linePath = (points: Point[]) =>
  points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");

export const buildWarpedGrid = (
  variant: WarpedGridVariant,
  options: Partial<GridOptions> = {},
): WarpedGridPaths => {
  const width = options.width ?? 1440;
  const height = options.height ?? 900;
  const cols = options.cols ?? 22;
  const rows = options.rows ?? 15;
  const xStep = width / cols;
  const yStep = height / rows;

  const points: Point[][] = Array.from({ length: rows + 1 }, (_, row) =>
    Array.from({ length: cols + 1 }, (_, col) =>
      deformPoint({ x: col * xStep, y: row * yStep }, variant, width, height),
    ),
  );

  const lines: string[] = [];

  for (const row of points) {
    lines.push(linePath(row));
  }

  for (let col = 0; col <= cols; col += 1) {
    lines.push(linePath(points.map((row) => row[col])));
  }

  return { lines };
};

export const gridStrokeForTone = (tone: WarpedGridTone): string => {
  switch (tone) {
    case "on-ink":
      return "rgba(201, 204, 202, 0.1)";
    case "on-steel":
      return "rgba(17, 18, 16, 0.11)";
    case "on-canvas":
      return "rgba(116, 120, 120, 0.09)";
    default: {
      const _exhaustive: never = tone;
      return _exhaustive;
    }
  }
};
