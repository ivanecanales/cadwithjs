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
const dimLines = [
    [0, 100, 0, 110],
    [20, 100, 20, 110],
    [40, 80, 40, 110],
    [80, 40, 80, 110],
    [0, 0, 0, -10],
    [100, 0, 100, -10],
    [100, 0, 110, 0],
    [100, 20, 110, 20],
    [80, 40, 110, 40],
    [40, 80, 78.5, 80],
    [81.5, 80, 110, 80],
    [20, 100, 38.5, 100],
    [41.5, 100, 78.5, 100],
    [81.5, 100, 110, 100],
    [0, 108.5, 80, 108.5],
    [108.5, 0, 108.5, 100],
    [0, -8.5, 100, -8.5]
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
    {'x': 1, 'y': 1, 'c': [0, 107], 'd': 'h'},
    {'x': 1, 'y': 1, 'c': [20, 107], 'd': 'h'},
    {'x': 1, 'y': 1, 'c': [40, 107], 'd': 'h'},
    {'x': 1, 'y': 1, 'c': [0, -10], 'd': 'h'},
    {'x': -1, 'y': 1, 'c': [20, 107], 'd': 'h'},
    {'x': -1, 'y': 1, 'c': [40, 107], 'd': 'h'},
    {'x': -1, 'y': 1, 'c': [80, 107], 'd': 'h'},
    {'x': -1, 'y': 1, 'c': [100, -10], 'd': 'h'},
    {'x': 1, 'y': 1, 'c': [107, 0], 'd': 'v'},
    {'x': 1, 'y': 1, 'c': [107, 20], 'd': 'v'},
    {'x': 1, 'y': 1, 'c': [107, 40], 'd': 'v'},
    {'x': 1, 'y': 1, 'c': [107, 80], 'd': 'v'},
    {'x': 1, 'y': -1, 'c': [107, 20], 'd': 'v'},
    {'x': 1, 'y': -1, 'c': [107, 40], 'd': 'v'},
    {'x': 1, 'y': -1, 'c': [107, 80], 'd': 'v'},
    {'x': 1, 'y': -1, 'c': [107, 100], 'd': 'v'}
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
    {'l': 2, 'o': 'h', 'c': [10, 110]},
    {'l': 2, 'o': 'h', 'c': [30, 110]},
    {'l': 4, 'o': 'h', 'c': [60, 110]},
    {'l': 10, 'o': 'h', 'c': [50, -13.5]},
    {'l': 2, 'o': 'v', 'c': [110, 10]},
    {'l': 2, 'o': 'v', 'c': [110, 30]},
    {'l': 4, 'o': 'v', 'c': [110, 60]},
    {'l': 2, 'o': 'v', 'c': [110, 90]}
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
        'points': [0, 0, 100, 0, 100, 20, 80, 20, 80, 40, 40, 40, 40, 80, 20, 80, 20, 100, 0, 100, 0, 0],
        'class': 'part'
    },
    dwg
);