const calc = require("./calculator");


test("add 1 + 2 to equal 3", () => {
    expect(calc(1, 2, "+")).toBe(3);
});

test("sub 3 - 2 to equal 1", () => {
    expect(calc(3, 2, "-")).toBe(1);
});

test("multiply 1 * 2 to equal 2", () => {
    expect(calc(1, 2, "*")).toBe(2);
});

test("div 6/2 to equal 3", () => {
    expect(calc(6, 2, "/")).toBe(3);
});

