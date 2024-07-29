const dwgw = 230;
const dwgh = 190;
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = createDwg(-20, -30, dwgw, dwgh);
const points = [20, 0, 180, 0, 180, 20, 200, 20, 200, 60, 180, 60, 180, 80, 140, 80, 140, 120, 120, 120, 120, 140, 80, 140, 80, 120, 60, 120, 60, 80, 20, 80, 20, 60, 0, 60, 0, 20, 20, 20, 20, 0];
const part = pointsToCoords(points);
drawDim(part[0], part[1], 'b', 10, 16, dwg);
drawDim(part[2], part[3], 'b', 30, 2, dwg);
drawDim(part[6], part[7], 'u', 70, 4, dwg);
drawDim(part[8], part[9], 'u', 30, 2, dwg);
drawDim(part[10], part[11], 'u', 10, 4, dwg);
drawDim(part[12], part[13], 'u', 30, 2, dwg);
drawDim(part[14], part[15], 'u', 70, 4, dwg);
drawDim(part[11], part[12], 'l', 90, 2, dwg);
drawDim(part[13], part[14], 'l', 70, 4, dwg);
drawDim(part[15], part[16], 'l', 30, 2, dwg);
drawDim(part[17], part[18], 'l', 10, 4, dwg);
drawDim(part[19], part[20], 'l', 30, 2, dwg);
drawDim(part[18], part[3], 'b', 40, 20, dwg);
graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);