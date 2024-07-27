const dwgw = 13 * 6 + 40;
const dwgh = 7.65 * 6 + 40;
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = createDwg(-20, -20, dwgw, dwgh);
const absolutepoints = [0, 0, 13, 0, 13, 5, 10, 7.65, 3, 7.65, 0, 5, 0, 0];
const points = []; absolutepoints.forEach(i => points.push(6 * i));
const part = pointsToCoords(points);
drawDim(part[0], part[1], 'b', 10, 13, dwg);
drawDim(part[1], part[2], 'r', 10, 5, dwg);
drawDim(part[3], part[4], 'u', 10, 7, dwg);
drawDim(part[5], part[0], 'l', 10, 5, dwg);
drawDimAlong(part[2], part[3], 'u', 10, 4, dwg);
drawDimAlong(part[4], part[5], 'u', 10, 4, dwg);
graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);
drawDimAngle(part[2], part[3], part[1], 10, '137°', dwg);
drawDimAngle(part[5], part[0], part[4], 10, '137°', dwg);