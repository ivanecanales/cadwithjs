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
class P{
    constructor(x, y){
        this.x = x;
        this.y = y;
    };
};
function pointsToCoords(points){
    const coords = [];
    for(let i = 0; i < points.length; i += 2){
        coords.push(new P(points[i], points[i + 1]));
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
    const p = (x, y) => {return new P(x, y)};
    const ar = graphicElement(
        'marker',
        {
            'id': 'arrowhead',
            'viewBox': '-4 -2 4 4',
            'markerWidth': 4,
            'markerHeight': 4,
            'orient': 'auto-start-reverse'
        },
        parent
    );
    graphicElement('path', {'d': 'M -4 -2 L 0 0 L -4 2 z', 'class': 'dimarrow'}, ar);
    if(pi.x == pj.x && pi.y == pj.y){throw 'No dimension between two equal points'};
    if(!['b', 'u', 'l', 'r'].includes(s)){throw 'Invalid side'};
    let pb, pu, pl, pr, o;
    if(pi.x < pj.x){pl = pi; pr = pj}else if(pi.x > pj.x){pl = pj; pr = pi}else{if(pi.y < pj.y){pl = pi; pr = pj}else{pl = pj; pr = pi}};
    if(pi.y < pj.y){pb = pi; pu = pj}else if(pi.y > pj.y){pb = pj; pu = pi}else{if(pi.x < pj.x){pb = pi; pu = pj}else{pb = pj; pu = pi}};
    if(pl.y <= pr.y){o = 'a'}else{o = 'd'};
    const c = {'b': pb, 'u': pu, 'l': pl, 'r': pr};
    const f = {'b': pu, 'u': pb, 'l': pr, 'r': pl};
    const v = {
        'a': {'b': p(pr.x, pl.y), 'u': p(pl.x, pr.y), 'l': p(pl.x, pr.y), 'r': p(pr.x, pl.y)},
        'd': {'b': p(pl.x, pr.y), 'u': p(pr.x, pl.y), 'l': p(pl.x, pr.y), 'r': p(pr.x, pl.y)}
    };
    console.log(o); console.log(c[s], f[s], pr)
    const z = v[o]; const g = d - 1.5;
    const x = {'b': 0, 'u': 0, 'l': -1, 'r': 1};
    const y = {'b': -1, 'u': 1, 'l': 0, 'r': 0};
    const fs = 5; const rc = 0.5 * fs * l.toString().length;
    const t = {
        'b': [0.5 * (pl.x + pr.x), pb.y + y[s] * (d + 0.5 * fs)],
        'u': [0.5 * (pl.x + pr.x), pu.y + y[s] * (d + 0.5 * fs)],
        'l': [pl.x + x[s] * (d + 0.5 * rc), 0.5 * (pb.y + pu.y)],
        'r': [pr.x + x[s] * (d + 0.5 * rc), 0.5 * (pb.y + pu.y)]
    };
    graphicElement('polyline', {
        'points': [c[s].x, c[s].y, c[s].x + x[s] * d, c[s].y + y[s] * d],
        'class': 'dimline'
    }, parent);
    graphicElement('polyline', {
        'points': [f[s].x, f[s].y, z[s].x + x[s] * d, z[s].y + y[s] * d],
        'class': 'dimline'
    }, parent);
    graphicElement('polyline', {
        'points': [c[s].x + x[s] * g, c[s].y + y[s] * g, z[s].x + x[s] * g, z[s].y + y[s] * g],
        'marker-start': 'url(#arrowhead)',
        'marker-end': 'url(#arrowhead)',
        'class': 'dimline'
    }, parent);
    const tg = graphicElement('g', {'transform': `translate(${t[s]})`}, parent);
    textElement(fs, l, rc, tg);
};