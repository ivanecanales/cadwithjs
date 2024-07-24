const dwgw = 300;
const dwgh = 320;
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = createDwg(-20, -30, dwgw, dwgh);
const points = [0, 0, 50, 0, 50, 20, 30, 20, 30, 60, 50, 60, 50, 80, 90, 80, 90, 120, 170, 120, 170, 80, 210, 80, 210, 60, 230, 60, 230, 20, 210, 20, 210, 0, 260, 0, 260, 280, 210, 280, 210, 260, 230, 260, 230, 220, 210, 220, 210, 200, 170, 200, 170, 160, 90, 160, 90, 200, 50, 200, 50, 220, 30, 220, 30, 260, 50, 260, 50, 280, 0, 280, 0, 0];
const part = pointsToCoords(points);
drawDim(part[0], part[1], 'h', 'b', 10, 5, dwg);
drawDim(part[4], part[5], 'h', 'b', 10, 2, dwg);
drawDim(part[1], part[7], 'h', 'b', 10, 4, dwg);
drawDim(part[8], part[9], 'h', 'b', 130, 8, dwg);
drawDim(part[10], part[16], 'h', 'b', 10, 4, dwg);
drawDim(part[0], part[17], 'h', 'b', 20, 26, dwg);
drawDim(part[0], part[35], 'v', 'l', 10, 28, dwg);
graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);
drawDim(part[14], part[15], 'h', 'b', 30, 2, dwg);
drawDim(part[17], part[14], 'v', 'r', 10, 2, dwg);
drawDim(part[13], part[14], 'v', 'r', 40, 4, dwg);
drawDim(part[11], part[13], 'v', 'r', 40, 2, dwg);
drawDim(part[9], part[11], 'v', 'r', 60, 4, dwg);
drawDim(part[9], part[26], 'v', 'r', 100, 4, dwg);
