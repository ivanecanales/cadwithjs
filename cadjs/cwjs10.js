const scale = 4;
const dwgw = 43.22 * scale + 40;
const dwgh = 11.22 * 2 * scale + 40;
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = createDwg(-20, -0.5 * dwgh, dwgw, dwgh);
const absolutepoints = [
    0, 0, 5.10, -7.42, 19.10, -7.42, 27.29, -11.22, 36.29, -11.22, 43.22, -7.22,
    38.72, 0, 43.22, 7.22, 36.29, 11.22, 27.29, 11.22, 19.10, 7.42, 5.10, 7.42, 0, 0
];
const points = []; absolutepoints.forEach(i => points.push(scale * i));
const part = pointsToCoords(points);

drawDimAlong(part[0], part[1], 'b', 10, 9, dwg);
drawDim(part[1], part[2], 'b', 10, 14, dwg);
drawDim(part[3], part[4], 'b', 10, 9, dwg);
drawDimAlong(part[4], part[5], 'b', 10, 8, dwg);


graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);
drawDimAlong(part[5], part[6], 'b', 10, 9, dwg);
drawDimAlong(part[2], part[3], 'u', 10, 9, dwg);
drawDimAngle(part[0], part[6], part[11], 15, '55.5°', dwg);
drawDimAngle(part[11], part[0], part[10],10,'124.5°', dwg);
drawDimAngle(part[10], part[11], part[9], 7.5, '205°', dwg);
drawDimAngle(part[9], part[10], part[8], 10, '155°', dwg);
drawDimAngle(part[8], part[9], part[7], 10, '150°', dwg);
drawDimAngle(part[7], part[8], part[6], 10, '90°', dwg);
drawDimAngle(part[6], part[7], part[0], 10, '120°', dwg);
drawSymetryLine([-15, 0, 38.72 * scale + 15, 0], dwg);