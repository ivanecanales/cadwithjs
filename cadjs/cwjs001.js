const dwgw = 130;
const dwgh = 110;
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
const points = [0, 0, 100, 0, 100, 20, 80, 20, 80, 50, 60, 50, 60, 70, 40, 70, 40, 50, 20, 50, 20, 20, 0, 20, 0, 0];
const part = pointsToCoords(points);
drawDim(part[0], part[1], 'h', 'b', 10, 10, dwg);
drawDim(part[1], part[2], 'v', 'r', 10, 2, dwg);
drawDim(part[3], part[4], 'v', 'r', 30, 3, dwg);
drawDim(part[5], part[6], 'v', 'r', 50, 2, dwg);
drawDim(part[4], part[5], 'h', 'u', 30, 2, dwg);
drawDim(part[6], part[7], 'h', 'u', 10, 2, dwg);
drawDim(part[8], part[9], 'h', 'u', 30, 2, dwg);
drawDim(part[10], part[11], 'h', 'u', 60, 2, dwg);
graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);