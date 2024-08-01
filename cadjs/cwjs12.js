const scale = 3;
const dwgw = 34 * scale + 60;
const dwgh = 34 * scale + 40
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = createDwg(-30, -30, dwgw, dwgh);
const absolutepoints = [
    8, 0,
    30, 0,
    34, 7,
    34, 11,
    24, 11,
    24, 6,
    9, 6,
    4, 10,
    4, 24,
    9, 28,
    24,28,
    24,23,
    34,23,
    34,27,
    30,34,
    8,34,
    0,27,
    0,7,
    8,0
];
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
const [c1, d1] = [(new P(29, 17)).scale(scale), 12 * scale];
const [c2, d2] = [(new P(29, 17)).scale(scale), 8 * scale];
graphicElement(
    'circle',
    {
        'cx': c1.x,
        'cy': c1.y,
        'r': 0.5 * d1,
        'class': 'part'
    },
    dwg
);
drawPerf(c2, d2, dwg);
drawDiamIn(c2, d2, 0, 'ϕ8', dwg);
drawDiamOut(c1, d1, 20, 1, 'ϕ12',10, dwg);

drawDim(part[17], part[0], 'b', 20, 8, dwg);
drawDim(part[1], part[0], 'b', 20, 22, dwg);
drawDim(part[1], part[2], 'b', 20, 4, dwg);
drawDim(part[1], part[2], 'r', 10, 7, dwg);
drawDim(part[3], part[2], 'r', 10, 4, dwg);
drawDim(part[6], part[5], 'b', 10 + 6 * scale, 15, dwg);
drawDim(part[6], part[7], 'u', 20, 5, dwg);
drawDim(part[6], part[7], 'r', 15, 4, dwg);
drawDim(part[4], part[5], 'l', 10, 5, dwg);
drawDim(part[7], part[8], 'l', 10 + 4 * scale, 14, dwg);
drawDim(part[16], part[17], 'l', 20, 20, dwg);
drawDim(part[0], part[17], 'l', 20, 7, dwg);
drawDim(part[16], part[15], 'l', 20, 7, dwg);
