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
const points = [20, 0, 50, 0, 50, 30, 100, 30, 100, 60, 50, 60, 50, 90, 20, 90, 20, 80, 0, 80, 0, 20, 20, 20, 20, 0];
const part = pointsToCoords(points);
drawDim(part[10], part[11], 'h', 'b', 30, dwg);
drawDim(part[0], part[1], 'h', 'b', 10, dwg);
drawDim(part[2], part[3], 'h', 'b', 40, dwg);
drawDim(part[1], part[2], 'v', 'r', 60, dwg);
drawDim(part[3], part[4], 'v', 'r', 10, dwg);
drawDim(part[5], part[6], 'v', 'r', 60, dwg);
drawDim(part[7], part[8], 'v', 'l', 30, dwg);
drawDim(part[9], part[10], 'v', 'l', 10, dwg);
const dimensions = [
    {'l': 2, 'o': 'h', 'c': [10, -13.5]},
    {'l': 3, 'o': 'h', 'c': [35, -13.5]},
    {'l': 5, 'o': 'h', 'c': [75, -13.5]},
    {'l': 3, 'o': 'v', 'c': [110, 15]},
    {'l': 3, 'o': 'v', 'c': [110, 45]},
    {'l': 3, 'o': 'v', 'c': [110, 75]},
    {'l': 1, 'o': 'v', 'c': [-13.5, 85]},
    {'l': 6, 'o': 'v', 'c': [-13.5, 50]}
];
const d = 2.5;
for(const dim of dimensions){
    const rect = 2.5 * dim['l'].toString().length;
    const x = dim['o'] == 'h' ? dim['c'][0] - 0.5 * rect : dim['c'][0];
    const y = dim['o'] == 'h' ? dim['c'][1] : dim['c'][1] - 0.5 * rect + d;
    const m = dim['o'] == 'h' ? [1, 0, 0, -1] : [0, -1, -1, 0];
    graphicElement(
        'text',
        {
            'font-family': 'Ubuntu Mono',
            'font-size': 5,
            'transform': `matrix(${[...m, x, y]})`,
            'textLength': rect,
            'lengthAdjust': 'spacingAndGlyphs',
            'fill': 'teal'
        },
        dwg,
        dim['l']
    );
};
graphicElement(
    'polyline',
    {
        'points': points,
        'class': 'part'
    },
    dwg
);