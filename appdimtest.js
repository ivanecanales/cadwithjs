const ns = 'http://www.w3.org/2000/svg';
function graphicElement(tag, attributes, parent, innerhtml){
    const element = document.createElementNS(ns, tag);
    for(const attr in attributes){
        element.setAttribute(attr, attributes[attr]);
    };
    if(parent != undefined){
        parent.appendChild(element);
    };
    if(innerhtml != undefined){
        element.innerHTML = innerhtml;
    };
    return element;
};
function setPaperSize(dwgw, dwgh, margin){
    const bodyw = dwgw + 2 * margin;
    const bodyh = dwgh + 2 * margin;
    const headcss = `
    body{
        width: ${bodyw}mm;
        height: ${bodyh}mm;
    }
    @page{
        size: ${bodyw}mm ${bodyh}mm;
        margin: 0;
    }`;
    const style = document.createElement('style');
    style.innerHTML = headcss;
    document.head.appendChild(style);
};
function createDwg(minx, miny, dwgw, dwgh){
    return graphicElement(
        'svg',
        {
            'viewBox': [minx, miny, dwgw, dwgh],
            'width': `${dwgw}mm`,
            'height': `${dwgh}mm`,
            'transform': 'scale(1, -1)',
        },
        document.body
    );
};
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    };
};
function pointsToCoords(points){
    const coords = [];
    for(let i = 0; i < points.length; i += 2){
        coords.push(new Point(points[i], points[i + 1]));
    };
    return coords;
};
function textElement(fontSize, dimension, rectLength, parent){
    graphicElement(
        'text',
        {
            'x': -0.5 * rectLength,
            'y': 0.3 * fontSize,
            'font-family': 'Ubuntu Mono',
            'font-size': fontSize,
            'textLength': rectLength,
            'lengthAdjust': 'spacingAndGlyphs',
            'transform': 'scale(1, -1)',
            'class': 'dimtext'
        },
        parent,
        dimension
    );
};
function drawDim(pi, pj, s, d, l, parent){
    
};