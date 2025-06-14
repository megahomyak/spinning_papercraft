let makeUnion = variantProducer => (x, y) => variantProducer(variant => variant(x, y));
let makePoint = (xd, yd) => (x, y) => ({ x: x + xd, y: y + yd });
let makeLine = (xd, yd) => ;
let makeBox = (w, h) => union(line(w, 0), line(0, h), offset(0, w, line(0, h)), offset(0, h, line(w, 0)));
let boxSideSize = 4;
let knobHoleSideSize = boxSideSize/2*0.8;
let 
