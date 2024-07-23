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
    for(const point of points){
        coords.push(point.x);
        coords.push(point.y);
    }
    return coords;
};
function drawDim(pi, pj, o, s, d, parent){
    const mt = matrix => {return `matrix(${matrix})`};
    const tg = 'polyline';
    const pl = pi.x <= pj.x ? pi : pj;
    const pr = pi.x <= pj.x ? pj : pi;
    const pb = pi.y <= pj.y ? pi : pj;
    const pu = pi.y <= pj.y ? pj : pi;
    const gr = graphicElement('g', {}, parent);
    const ar = {
        'h': [0, 1.5, 3, 3, 3, 0, 0, 1.5],
        'v': [0, 3, 3, 3, 1.5, 0, 0, 3]
    };
    if(o == 'h'){
        if(s == 'b'){
            graphicElement(tg, {'points': [pl.x, pl.y, pl.x, pb.y - d], 'class': 'dimline'}, gr);
            graphicElement(tg, {'points': [pr.x, pr.y, pr.x, pb.y - d], 'class': 'dimline'}, gr);
            graphicElement(tg, {'points': [pl.x, pb.y - d + 1.5, pr.x, pb.y - d + 1.5], 'class': 'dimline'}, gr);
            graphicElement(tg, {'points': ar[o], 'class': 'dimarrow', 'transform': mt([1, 0, 0, 1, pl.x, pl.y - d])}, gr);
            graphicElement(tg, {'points': ar[o], 'class': 'dimarrow', 'transform': mt([-1, 0, 0, 1, pr.x, pl.y - d])}, gr);
        }else if(s == 'u'){
            graphicElement(tg, {'points': [pl.x, pl.y, pl.x, pu.y + d], 'class': 'dimline'}, gr);
            graphicElement(tg, {'points': [pr.x, pr.y, pr.x, pu.y + d], 'class': 'dimline'}, gr);
            graphicElement(tg, {'points': [pl.x, pu.y + d - 1.5, pr.x, pu.y + d - 1.5], 'class': 'dimline'}, gr);
            graphicElement(tg, {'points': ar[o], 'class': 'dimarrow', 'transform': mt([1, 0, 0, 1, pl.x, pu.y + d - 3])}, gr);
            graphicElement(tg, {'points': ar[o], 'class': 'dimarrow', 'transform': mt([-1, 0, 0, 1, pr.x, pu.y + d - 3])}, gr);
        }else{
            throw 'Invalid side';
        };
    }else if(o == 'v'){
        if(s == 'l'){
            graphicElement(tg, {'points': [pl.x - d, pu.y, pu.x, pu.y], 'class': 'dimline'}, gr);
            graphicElement(tg, {'points': [pl.x - d, pb.y, pb.x, pb.y], 'class': 'dimline'}, gr);
            graphicElement(tg, {'points': [pl.x - d + 1.5, pu.y, pl.x - d + 1.5, pb.y], 'class': 'dimline'}, gr);
            graphicElement(tg, {'points': ar[o], 'class': 'dimarrow', 'transform': mt([1, 0, 0, 1, pl.x - d, pb.y])}, gr);
            graphicElement(tg, {'points': ar[o], 'class': 'dimarrow', 'transform': mt([1, 0, 0, -1, pr.x - d, pu.y])}, gr);
        }else if(s == 'r'){
            graphicElement(tg, {'points': [pr.x + d, pu.y, pu.x, pu.y], 'class': 'dimline'}, gr);
            graphicElement(tg, {'points': [pr.x + d, pb.y, pb.x, pb.y], 'class': 'dimline'}, gr);
            graphicElement(tg, {'points': [pr.x + d - 1.5, pu.y, pl.x + d - 1.5, pb.y], 'class': 'dimline'}, gr);
            graphicElement(tg, {'points': ar[o], 'class': 'dimarrow', 'transform': mt([1, 0, 0, 1, pl.x + d - 3, pb.y])}, gr);
            graphicElement(tg, {'points': ar[o], 'class': 'dimarrow', 'transform': mt([1, 0, 0, -1, pr.x + d - 3, pu.y])}, gr);
        }else{
            throw 'Invalid side';
        };  
    }else{
        throw 'Invalid orientation';
    };
};