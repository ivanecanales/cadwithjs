const dwgw = 20 * 4 + 40;
const dwgh = 16.63 * 4 + 40;
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = createDwg(-20, -20, dwgw, dwgh);
const absolutepoints = [0, 0, 20, 0, 20, 10, 10, 16.63, 0, 10, 0, 0];
const points = []; absolutepoints.forEach(i => points.push(4 * i));
const part = pointsToCoords(points);
drawDim(part[0], part[1], 'b', 10, 20, dwg);
drawDim(part[1], part[2], 'r', 10, 10, dwg);
drawDim(part[4], part[0], 'l', 10, 10, dwg);
drawDimAlong(part[2], part[3], 'u', 10, 12, dwg);
drawDimAlong(part[3], part[4], 'u', 10, 12, dwg);
graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);
drawDimAngle(part[3], part[4], part[2], 10, '110°', dwg);
drawDimAngle(part[2], part[3], part[1], 10, '125°', dwg);