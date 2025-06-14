// High-level structure: "everything is a rectangle"
// Low-level structure: "everything consists of lines"

let line = (xd, yd) => (x, y) => ({
    lines: [{ p1: { x, y }, p2: { x: x + xd, y: y + yd } }],
    size: {
        width: xd,
        height: yd,
    },
});

let boxHoleSide = (x, )

let makeBox = boxSideSize => {
    let tubeDiameter = boxSideSize / 2;
    let tubeCutDiameter = tubeDiameter * 0.2;
};
console.log(makeBox(4));
