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
function drawDim(pi, pj, o, s, d, l, parent){
    const mt = matrix => {return `matrix(${matrix})`};
    const tg = 'polyline';
    const pl = pi.x <= pj.x ? pi : pj;
    const pr = pi.x <= pj.x ? pj : pi;
    const pb = pi.y <= pj.y ? pi : pj;
    const pu = pi.y <= pj.y ? pj : pi;
    const ar = [3, 0, 3, -3, 0, -1.5, 3, 0];
    const gt = graphicElement('g', {}, parent);
    const fs = 5;
    const rc = 0.5 * fs * l.toString().length;
    const da = {'h': {'b': -1, 'u': 1}, 'v': {'l': -1, 'r': 1}}
    const pt = {'u': pu, 'b': pb, 'l': pl, 'r': pr};
    graphicElement(
        'text',
        {
            'x': -0.5 * rc,
            'y': 0.3 * fs,
            'font-family': 'Ubuntu Mono',
            'font-size': fs,
            'textLength': rc,
            'lengthAdjust': 'spacingAndGlyphs',
            'transform': 'scale(1, -1)',
            'class': 'dimtext'
        },
        gt,
        l
    );
    if(o == 'h'){
        if(!(s == 'b' || s == 'u')){throw 'Invalid side'};
        graphicElement(tg, {'points': [pl.x, pl.y, pl.x, pt[s].y + da[o][s] * d], 'class': 'dimline'}, parent);
        graphicElement(tg, {'points': [pr.x, pr.y, pr.x, pt[s].y + da[o][s] * d], 'class': 'dimline'}, parent);
        graphicElement(tg, {'points': [pl.x, pt[s].y + da[o][s] * (d - 1.5), pr.x, pt[s].y + da[o][s] * (d - 1.5)], 'class': 'dimline'}, parent);
        graphicElement(tg, {'points': ar, 'class': 'dimarrow', 'transform': mt([1, 0, 0, da[o][s], pl.x, pt[s].y + da[o][s] * d])}, parent);
        graphicElement(tg, {'points': ar, 'class': 'dimarrow', 'transform': mt([-1, 0, 0, da[o][s], pr.x, pt[s].y + da[o][s] * d])}, parent);
        gt.setAttribute('transform', mt([1, 0, 0, 1, 0.5 * (pl.x + pr.x), pt[s].y + da[o][s] * (d + 0.5 * fs)]));
    }else if(o == 'v'){
        if(!(s == 'l' || s == 'r')){throw 'Invalid side'};
        graphicElement(tg, {'points': [pt[s].x + da[o][s] * d, pu.y, pu.x, pu.y], 'class': 'dimline'}, parent);
        graphicElement(tg, {'points': [pt[s].x + da[o][s] * d, pb.y, pb.x, pb.y], 'class': 'dimline'}, parent);
        graphicElement(tg, {'points': [pt[s].x + da[o][s] * (d - 1.5), pu.y, pl.x + da[o][s] * (d - 1.5), pb.y], 'class': 'dimline'}, parent);
        graphicElement(tg, {'points': ar, 'class': 'dimarrow', 'transform': mt([0, 1, da[o][s], 0, pl.x + da[o][s] * d, pb.y])}, parent);
        graphicElement(tg, {'points': ar, 'class': 'dimarrow', 'transform': mt([0, -1, da[o][s], 0, pr.x + da[o][s] * d, pu.y])}, parent);
        gt.setAttribute('transform', mt([1, 0, 0, 1, pr.x + da[o][s] * (d + 0.5 * rc), 0.5 * (pb.y + pu.y)]));
    };
};