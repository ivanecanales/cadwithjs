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
function drawDim(pi, pj, o, s, d, l, parent){
    const mt = matrix => {return `matrix(${matrix})`};
    const tg = 'polyline';
    let pl, pr; if(pi.x <= pj.x){pl = pi; pr = pj}else{pl = pj; pr = pi};
    let pb, pu; if(pi.y <= pj.y){pb = pi; pu = pj}else{pb = pj; pu = pi};
    let v; if(pl.y <= pr.y){v = 'h'}else{v = 'v'};
    const pc = {'b': pb, 'u': pu, 'l': pl, 'r': pr};
    const pf = {'b': pu, 'u': pb, 'l': pr, 'r': pl};
    const ps = {'b': pl, 'u': pl, 'l': pb, 'r': pb};
    const pe = {'b': pr, 'u': pr, 'l': pu, 'r': pu};
    const pv = {
        'h': {'b': 0, 'u': 0, 'l': 0, 'r': 0},
        'v': {'b': 0, 'u': 0, 'l': 0, 'r': 0}
    };

    graphicElement('circle', {'r': 6, 'cx': pc[s].x, 'cy': pc[s].y, 'fill': 'yellow'}, parent);
    graphicElement('circle', {'r': 6, 'cx': pf[s].x, 'cy': pf[s].y, 'fill': 'crimson'}, parent);

    graphicElement('circle', {'r': 4, 'cx': ps[s].x, 'cy': ps[s].y, 'fill': 'orange'}, parent);
    graphicElement('circle', {'r': 4, 'cx': pe[s].x, 'cy': pe[s].y, 'fill': 'pink'}, parent);

    
    
    const ar = [3, 0, 3, -3, 0, -1.5, 3, 0];    
    const fs = 5;
    const rc = 0.5 * fs * l.toString().length;


};