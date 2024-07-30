const scale = 1;
const dwgw = 40 * scale + 50;
const dwgh = 11 * scale + 50
const margin = 10;
setPaperSize(dwgw, dwgh, margin);
const dwg = createDwg(-30, -30, dwgw, dwgh);
const absolutepoints = [
];
const points = []; absolutepoints.forEach(i => points.push(scale * i));
const part = pointsToCoords(points);
graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);