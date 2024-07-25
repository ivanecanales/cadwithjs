const dwgw = 38 * 2 + 60;
const dwgh = 30 * 2 + 40;
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = createDwg(-30, -20, dwgw, dwgh);
const absolutepoints = [0, 0, 8, 0, 8, 18, 30, 0, 38, 0, 38, 30, 30, 30, 30, 12, 8, 30, 0, 30, 0, 0];
const points = []; absolutepoints.forEach(i => points.push(2 * i));
const part = pointsToCoords(points);
drawDim(part[0], part[1], 'h', 'b', 10, 8, dwg);
drawDim(part[1], part[3], 'h', 'b', 10, 22, dwg);
drawDim(part[3], part[4], 'h', 'b', 10, 8, dwg);
drawDim(part[4], part[5], 'v', 'r', 20, 30, dwg);
drawDim(part[5], part[6], 'h', 'u', 10, 8, dwg);
drawDim(part[6], part[8], 'h', 'u', 10, 22, dwg);
drawDim(part[8], part[9], 'h', 'u', 10, 8, dwg);
drawDim(part[9], part[0], 'v', 'l', 20, 30, dwg);
graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);
drawDim(part[0], part[2], 'v', 'l', 10, 18, dwg);
drawDim(part[5], part[7], 'v', 'r', 10, 18, dwg);