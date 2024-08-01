const scale = 2;
const dwgw = 53 * scale + 30;
const dwgh = 43 * scale + 30
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = createDwg(-10, -20, dwgw, dwgh);
const absolutepoints = [0, 0, 53, 0, 53, 43, 0, 43, 0, 0];
const points = []; absolutepoints.forEach(i => points.push(scale * i));
const part = pointsToCoords(points);
graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);
const [c1, d1] = [(new P(8, 23)).scale(scale), 8 * scale];
const [c2, d2] = [(new P(17, 4)).scale(scale), 3 * scale];
const [c3, d3] = [(new P(28, 32)).scale(scale), 13 * scale];
const [c4, d4] = [(new P(28, 12)).scale(scale), 13 * scale];
const [c5, d5] = [(new P(38, 4)).scale(scale), 3 * scale];
const [c6, d6] = [(new P(45, 23)).scale(scale), 8 * scale];
drawPerf(c1, d1, dwg);
drawPerf(c2, d2, dwg);
drawPerf(c3, d3, dwg);
drawPerf(c4, d4, dwg);
drawPerf(c5, d5, dwg);
drawPerf(c6, d6, dwg);
drawDim(part[0], c1, 'b', 10, 8, dwg);
drawDim(c1, c2, 'b', 10 + 4 * scale, 9, dwg);
drawDim(c2, c4, 'b', 10 + 4 * scale, 11, dwg);
drawDim(c4, c5, 'b', 10 + 4 * scale, 10, dwg);
drawDim(c5, c6, 'b', 10 + 4 * scale, 7, dwg);
drawDim(part[1], c6, 'b', 10, 8, dwg);

drawDim(part[1], c5, 'r', 10, 4, dwg);
drawDim(c4, c5, 'r', 10 + 15 * scale, 8, dwg);
drawDim(c4, c6, 'r', 10 + 8 * scale, 11, dwg);
drawDim(c3, c6, 'r', 10 + 8 * scale, 10, dwg);
drawDim(part[2], c3, 'r', 10, 11, dwg);

//drawDiamOut(c, d, a, s, l, t, parent)

drawDiamOut(c1, d1, 20, 1, 'ϕ8', 5, dwg);
drawDiamOut(c2, d2, 0, -1, 'ϕ3', 5, dwg);
drawDiamOut(c3, d3, -20, 1, 'ϕ13', 5, dwg);
drawDiamOut(c4, d4, 20, 1, 'ϕ13', 5, dwg);
drawDiamOut(c5, d5, 30, 1, 'ϕ3', 5, dwg);
drawDiamOut(c6, d6, 10, -1, 'ϕ8', 5, dwg);