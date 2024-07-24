const dwgw = 140;
const dwgh = 120;
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = createDwg(-20, -20, dwgw, dwgh);
const points = [20, 0, 50, 0, 50, 30, 100, 30, 100, 60, 50, 60, 50, 90, 20, 90, 20, 80, 0, 80, 0, 20, 20, 20, 20, 0];
const part = pointsToCoords(points);
drawDim(part[10], part[11], 'h', 'b', 30, 2, dwg);
drawDim(part[0], part[1], 'h', 'b', 10, 3, dwg);
drawDim(part[2], part[3], 'h', 'b', 40, 5, dwg);
drawDim(part[7], part[8], 'v', 'l', 30, 1, dwg);
drawDim(part[9], part[10], 'v', 'l', 10, 6, dwg);
drawDim(part[1], part[2], 'v', 'r', 60, 3, dwg);
drawDim(part[3], part[4], 'v', 'r', 10, 3, dwg);
drawDim(part[5], part[6], 'v', 'r', 60, 3, dwg);
graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);