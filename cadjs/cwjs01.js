const dwgw = 130;
const dwgh = 110;
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = createDwg(-10, -20, dwgw, dwgh);
const points = [0, 0, 100, 0, 100, 20, 80, 20, 80, 50, 60, 50, 60, 70, 40, 70, 40, 50, 20, 50, 20, 20, 0, 20, 0, 0];
const part = pointsToCoords(points);
drawDim(part[0], part[1], 'b', 10, 10, dwg);
drawDim(part[1], part[2], 'r', 10, 2, dwg);
drawDim(part[3], part[4], 'r', 30, 3, dwg);
drawDim(part[5], part[6], 'r', 50, 2, dwg);
drawDim(part[4], part[5], 'u', 30, 2, dwg);
drawDim(part[6], part[7], 'u', 10, 2, dwg);
drawDim(part[8], part[9], 'u', 30, 2, dwg);
drawDim(part[10], part[11], 'u', 60, 2, dwg);
graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);