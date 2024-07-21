const ns = 'http://www.w3.org/2000/svg';
function graphicElement(tag, attributes, parent){
    const element = document.createElementNS(ns, tag);
    for(const attr in attributes){
        element.setAttribute(attr, attributes[attr]);
    };
    parent.appendChild(element);
    return element;
};

const dwg = graphicElement(
    'svg',
    {
        'viewBox': '0 0 90 90',
        'width': '90mm',
        'height': '90mm',
        'style': 'border: solid green 1px;'
    },
    document.body
);