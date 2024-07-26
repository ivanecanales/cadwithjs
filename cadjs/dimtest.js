const dwgw = 120;
const dwgh = 120;
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = createDwg(-10, -10, dwgw, dwgh);
const points = [0, 0, 100, 0, 100, 100, 0, 100, 0, 0]
const part = pointsToCoords(points);
graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);

const pi = new Point(50, 30);
const pj = new Point(50, 70);

drawDim(pi, pj, 'r', 10, 40, dwg);