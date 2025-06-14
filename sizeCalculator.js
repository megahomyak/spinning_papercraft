let line = (xd, yd, style) => ctx => ctx.sendLine({ x: 0, y: 0 }, { x: xd + ctx.x, y: yd + ctx.y }, style);
let offset = (xd, yd, target) => ctx => target({ ...ctx, x: ctx.x + xd, y: ctx.y + yd });

let combine = (...targets) => (x, y) => {
    for (let target of targets) {
        target(x, y);
    }
};

let fold = (xd, yd) => line(xd, yd, "thin");
let cut = (xd, yd) => line(xd, yd, "thick");

let point = () => (x, y) => ({ x, y });
let offset = (xd, yd, target) => (x, y, generator) => target(x + xd, y + yd);

let struct = fieldProducer => (x, y) => fieldProducer(variant => variant(x, y));
let line = (xd, yd) => struct(field => ({
    beginning: field(point()),
    end: field(offset(xd, yd, point())),
}));
let box = (xd, yd) => struct(field => ({
    top: field(line(xd, 0)),
    left: field(line(0, yd)),
    bottom: field(offset(0, yd, line(xd, 0))),
    right: field(offset(xd, 0, line(0, yd))),
}));
let papercraft = boxSideSize => struct(field => ({

}));

console.log(papercraft(4)(0, 0));
