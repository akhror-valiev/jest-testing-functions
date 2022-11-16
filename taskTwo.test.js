const reverseStr = require("./taskTwo");

const data = "ahror";

const reverseString = reverseStr(data)

test("input string will be reversed", () => {
    expect(reverseString).toBe("rorha");
});
