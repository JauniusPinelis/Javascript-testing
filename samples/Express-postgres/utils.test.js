const addRandomDescription = require("./utils");

describe("running addRandomDescription", () => {
    const description = addRandomDescription("");

    test("should not return empty string", () => {
        expect(description).not.toEqual('');
    });
})