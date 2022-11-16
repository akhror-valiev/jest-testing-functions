const capitalizeStr = require("./capitalizeStr")

test("ahror should be Ahror", () => {
    expect(capitalizeStr("ahror")).toBe("Ahror");
});