const Engineer = require("../lib/Engineer");


test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHub";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.GitHub).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHub");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHub";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
});