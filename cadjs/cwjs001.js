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
const dimLines = [
    [0, 20, 0, 80],
    [20, 50, 20, 80],
    [40, 70, 40, 80],
    [60, 70, 60, 80],
    [80, 50, 80, 80],
    [0, 0, 0, -10],
    [100, 0, 100, -10],
    [100, 0, 110, 0],
    [0, -8.5, 100, -8.5],
    [100, 20, 110, 20],
    [80, 50, 110, 50],
    [60, 70, 78, 70],
    [82, 70, 110, 70],
    [0, 78.5, 80, 78.5],
    [108.5, 0, 108.5, 70]
];
for(const dim of dimLines){
    graphicElement(
        'polyline',
        {
            'points': dim,
            'class': 'dimline'
        },
        dwg
    );
};

const arrow = {
    'h': [0, 1.5, 3, 3, 3, 0, 0, 1.5],
    'v': [0, 3, 3, 3, 1.5, 0, 0, 3]
};
const arrowLoc = [
    {'x': 1, 'y': 1, 'c': [0, 77], 'd': 'h'},
    {'x': 1, 'y': 1, 'c': [20, 77], 'd': 'h'},
    {'x': 1, 'y': 1, 'c': [40, 77], 'd': 'h'},
    {'x': 1, 'y': 1, 'c': [60, 77], 'd': 'h'},
    {'x': -1, 'y': 1, 'c': [100, -10], 'd': 'h'},
    {'x': -1, 'y': 1, 'c': [20, 77], 'd': 'h'},
    {'x': -1, 'y': 1, 'c': [40, 77], 'd': 'h'},
    {'x': -1, 'y': 1, 'c': [60, 77], 'd': 'h'},
    {'x': -1, 'y': 1, 'c': [80, 77], 'd': 'h'},
    {'x': 1, 'y': 1, 'c': [0, -10], 'd': 'h'},
    {'x': 1, 'y': 1, 'c': [107, 0], 'd': 'v'},
    {'x': 1, 'y': 1, 'c': [107, 20], 'd': 'v'},
    {'x': 1, 'y': 1, 'c': [107, 50], 'd': 'v'},
    {'x': 1, 'y': -1, 'c': [107, 20], 'd': 'v'},
    {'x': 1, 'y': -1, 'c': [107, 50], 'd': 'v'},
    {'x': 1, 'y': -1, 'c': [107, 70], 'd': 'v'},
];
for(const al of arrowLoc){
    graphicElement(
        'polyline',
        {
            'points': arrow[al['d']],
            'class': 'dimarrow',
            'transform': `matrix(${[al['x'], 0, 0, al['y'], ...al['c']]})`
        },
        dwg
    );
};
const d = 2.5;
const dimensions = [
    {'l': 2, 'o': 'h', 'c': [10, 80]},
    {'l': 2, 'o': 'h', 'c': [30, 80]},
    {'l': 2, 'o': 'h', 'c': [50, 80]},
    {'l': 2, 'o': 'h', 'c': [70, 80]},
    {'l': 2, 'o': 'v', 'c': [110, 10]},
    {'l': 5, 'o': 'v', 'c': [110, 35]},
    {'l': 2, 'o': 'v', 'c': [110, 60]},
    {'l': 10, 'o': 'h', 'c': [50, -13.5]}
];
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
        'points': [0, 0, 100, 0, 100, 20, 80, 20, 80, 50, 60, 50, 60, 70, 40, 70, 40, 50, 20, 50, 20, 20, 0, 20, 0, 0],
        'class': 'part'
    },
    dwg
);