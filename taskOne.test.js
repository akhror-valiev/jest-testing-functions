const strLength = require("./taskOne");


function throwError(str) {
    if (str.length < 1 || str.length > 10) {
        throw new Error("wrong input");
    }
}

test("string length 1 or less than 10", () => {
    expect(strLength("ahror")).toBe(5);
});

test("thrown an error", () => {
    expect(() => throwError("alsassssssssssss")).toThrow(Error);
});
