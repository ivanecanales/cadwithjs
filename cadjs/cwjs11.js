const scale = 5;
const dwgw = 40 * scale + 40;
const dwgh = 11 * scale + 50
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = createDwg(-20, -30, dwgw, dwgh);
const absolutepoints = [0, 0, 40, 0, 40, 11, 35, 11, 30, 6, 30, 5, 10, 5, 10, 6, 5, 11, 0, 11, 0, 0];
const points = []; absolutepoints.forEach(i => points.push(scale * i));
const part = pointsToCoords(points);
const [c1, d1] = [(new P(5, 6)).scale(scale), 4 * scale];
const [c2, d2] = [(new P(35, 6)).scale(scale), 4 * scale];
graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);
drawPerf(c1, d1, dwg);
drawPerf(c2, d2, dwg);

drawDiamOut(c1, d1, -30, 1, 'ϕ4', 7.5, dwg);
drawDiamOut(c2, d2, 30, -1, 'ϕ4', 7.5, dwg);

drawDimOuter(part[6], part[7], 'b', 15, 1, 7.5, 1, dwg);
drawDimAlong(part[3], part[4], 'u', 10, 7, dwg);
drawDimAlong(part[7], part[8], 'u', 10, 7, dwg);
drawDim(part[2], part[3], 'u', 10, 5, dwg);
drawDim(part[8], part[9], 'u', 10, 5, dwg);
drawDimAngle(part[3], part[4], part[2], 10, '135°', dwg);
drawDim(part[6], part[5], 'b', 5 * scale + 10, 20, dwg);
drawDim(part[0], part[1], 'b', 20, 40, dwg);
drawDim(part[1], part[2], 'r', 10, 11, dwg);
drawDim(part[0], new P(5 * scale, 6 * scale), 'b', 10, 5, dwg);
drawDim(part[0], new P(5 * scale, 6 * scale), 'l', 10, 6, dwg);