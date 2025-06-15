let g = {};
g.categories = {};
let category = (categoryName, handler) => {
    g.categories[categoryName] = {};
    handler(new Proxy(g, {
        set: (_target, name, value) => {
            g[name] = value;
            g.categories[categoryName][name] = value;
            return true;
        },
    }));
};

category("params", g => {
    g.boxSideSize = 40;
    g.tubeFlatHeight = 40;
    g.tubeOffsetWidth = 10;
    g.tubeFlapCutoffLength = 5;
});

category("tube", g => {
    g.tubeFlapSlitLength = (g.tubeFlatHeight / 2) - (g.tubeFlapCutoffLength * 2);
    g.tubeDiameter = g.boxSideSize / 2;
    g.tubeHoleDiameter = g.tubeDiameter * 0.2;
    g.tubeRadius = g.tubeDiameter / 2;
    g.tubeHalfCircleLength = g.tubeRadius * Math.PI;
    g.tubeFlatWidth = (g.tubeOffsetWidth + g.tubeHalfCircleLength) * 2 + g.tubeDiameter;
    g.tubeFlatPerpendicularCutWidth = (g.tubeFlatWidth / 2) - g.tubeHoleDiameter;
});

category("box side with hole", g => {
    g.tubeSquareOffset = (g.boxSideSize - g.tubeHoleDiameter) / 2;
    g.tubeSquareSideSize = g.tubeHoleDiameter;
    g.tubeSquareEnd = g.tubeOffsetWidth + g.tubeSquareSideSize;
    g.shiftedSlantBiases = [
        Math.tan(Math.PI / 6),
        Math.tan(Math.PI / 12),
    ];
    g.equalSlantBias = Math.tan(Math.PI / 8);
});

console.log(g.categories);
