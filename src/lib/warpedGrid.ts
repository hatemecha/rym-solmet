export type WarpedGridVariant = "opening" | "capabilities" | "contact";

export type WarpedGridTone = "on-ink" | "on-steel" | "on-canvas";

interface Point {
  x: number;
  y: number;
}

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
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

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const lerpPoint = (a: Point, b: Point, t: number): Point => ({
  x: lerp(a.x, b.x, t),
  y: lerp(a.y, b.y, t),
});

const repelFromRect = (point: Point, rect: Rect, margin: number, strength: number): Point => {
  const left = rect.x - margin;
  const right = rect.x + rect.w + margin;
  const top = rect.y - margin;
  const bottom = rect.y + rect.h + margin;
  const nearestX = clamp(point.x, left, right);
  const nearestY = clamp(point.y, top, bottom);
  const dx = point.x - nearestX;
  const dy = point.y - nearestY;
  const dist = Math.hypot(dx, dy);

  if (dist > margin * 1.2) {
    return point;
  }

  const influence = 1 - smoothstep(0, margin * 1.2, dist);
  const length = dist || 1;

  return {
    x: point.x + (dx / length) * strength * influence,
    y: point.y + (dy / length) * strength * influence,
  };
};

const pullToward = (point: Point, target: Point, radius: number, strength: number): Point => {
  const dist = Math.hypot(point.x - target.x, point.y - target.y);
  if (dist > radius) {
    return point;
  }

  const influence = 1 - smoothstep(0, radius, dist);
  return lerpPoint(point, target, influence * strength);
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
      const mass: Rect = {
        x: width * 0.05,
        y: height * 0.1,
        w: width * 0.9,
        h: height * 0.78,
      };
      const repelled = repelFromRect(point, mass, width * 0.14, width * 0.13);
      const cornerPull = pullToward(repelled, { x: width, y: 0 }, width * 0.55, 0.08);
      return {
        x: cornerPull.x + Math.sin((point.y / height) * Math.PI * 2) * width * 0.008,
        y: cornerPull.y,
      };
    }
    case "capabilities": {
      const anchor = { x: 0, y: height };
      const pulled = pullToward(point, anchor, width * 0.95, 0.38);
      const secondary = pullToward(pulled, { x: width * 0.72, y: height * 0.35 }, width * 0.5, 0.12);
      const diagonal = smoothstep(width * 0.15, width * 0.95, point.x + point.y * 0.28);
      return {
        x: secondary.x - diagonal * width * 0.055,
        y: secondary.y - diagonal * height * 0.048,
      };
    }
    case "contact": {
      const opened = openFromEdge(point, width, height, width * 0.12);
      const sink = pullToward(opened, { x: width * 0.5, y: height }, width * 0.65, 0.1);
      return {
        x: sink.x + smoothstep(0, width * 0.4, point.x) * width * 0.018,
        y: sink.y,
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
      return "rgba(201, 204, 202, 0.16)";
    case "on-steel":
      return "rgba(17, 18, 16, 0.11)";
    case "on-canvas":
      return "rgba(116, 120, 120, 0.12)";
    default: {
      const _exhaustive: never = tone;
      return _exhaustive;
    }
  }
};
