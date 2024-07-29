const scale = 8;
const r = Math.sqrt(2);
const dwgw = (7 + 4 * r) * scale + 40;
const dwgh = (5 + 4 * r) * scale + 40;
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = createDwg(-20, -20, dwgw, dwgh);
const absolutepoints = [2 * r, 0, 7 + 2 * r, 0, 7 + 4 * r, 2 * r, 7 + 4 * r, 5 + 2 * r, 7 + 2 * r, 5 + 4 * r, 2 * r, 5 + 4 * r, 0, 5 + 2 * r, 0, 2 * r, 2 * r, 0];
const points = []; absolutepoints.forEach(i => points.push(scale * i));
const part = pointsToCoords(points);
drawDim(part[0], part[1], 'b', 10, 7, dwg);
drawDimAlong(part[1], part[2], 'b', 10, 4, dwg);
drawDim(part[2], part[3], 'r', 10, 5, dwg);
drawDimAlong(part[3], part[4], 'u', 10, 4, dwg);
drawDim(part[4], part[5], 'u', 10, 7, dwg);
drawDimAlong(part[5], part[6], 'u', 10, 4, dwg);
drawDim(part[6], part[7], 'l', 10, 5, dwg);
drawDimAlong(part[7], part[0], 'b', 10, 4, dwg);
graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);
drawDimAngle(part[1], part[2], part[0], 10, '135°', dwg);
drawDimAngle(part[3], part[4], part[2], 10, '135°', dwg);
drawDimAngle(part[5], part[6], part[4], 10, '135°', dwg);
drawDimAngle(part[7], part[0], part[6], 10, '135°', dwg);