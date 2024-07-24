const dwgw = 130;
const dwgh = 140;
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = graphicElement(
    'svg',
    {
        'viewBox': [-10, -20, dwgw, dwgh],
        'width': `${dwgw}mm`,
        'height': `${dwgh}mm`,
        'transform': 'scale(1, -1)',
    },
    document.body
);
const points = [0, 0, 100, 0, 100, 20, 80, 20, 80, 40, 40, 40, 40, 80, 20, 80, 20, 100, 0, 100, 0, 0];
const part = pointsToCoords(points);
drawDim(part[0], part[1], 'h', 'b', 10, 10, dwg);
drawDim(part[1], part[2], 'v', 'r', 10, 2, dwg);
drawDim(part[3], part[4], 'v', 'r', 30, 2, dwg);
drawDim(part[5], part[6], 'v', 'r', 70, 4, dwg);
drawDim(part[7], part[8], 'v', 'r', 90, 2, dwg);
drawDim(part[4], part[5], 'h', 'u', 70, 4, dwg);
drawDim(part[6], part[7], 'h', 'u', 30, 2, dwg);
drawDim(part[8], part[9], 'h', 'u', 10, 2, dwg);
graphicElement(
    'polyline',
    {
        'points': [0, 0, 100, 0, 100, 20, 80, 20, 80, 40, 40, 40, 40, 80, 20, 80, 20, 100, 0, 100, 0, 0],
        'class': 'part'
    },
    dwg
);