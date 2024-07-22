const dwgw = 140;
const dwgh = 130;
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = graphicElement(
    'svg',
    {
        'viewBox': [-20, -20, dwgw, dwgh],
        'width': `${dwgw}mm`,
        'height': `${dwgh}mm`,
        'transform': 'scale(1, -1)',
    },
    document.body
);
const partPoints = [
    new Point(20, 0),
    new Point(50, 0),
    new Point(50, 30),
    new Point(100, 30),
    new Point(100, 60),
    new Point(50, 60),
    new Point(50, 90),
    new Point(20, 90),
    new Point(20, 80),
    new Point(0, 80),
    new Point(0, 20),
    new Point(20, 20),
    new Point(20, 0)
];
graphicElement(
    'polyline',
    {
        'points': pointsToCoords(partPoints),
        'class': 'part'
    },
    dwg
);