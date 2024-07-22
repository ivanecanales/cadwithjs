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