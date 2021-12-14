import { login } from "../src/store/reducers/auth.reducer";

describe("login function", () => {
  test("it should return response (response)", async () => {
    const input = { username: "Behram", password: "khankhan" };
    const output = { message, token, userId };
    const response = await login(input);
    console.log({ response });
    expect(response).toEqual(output);
  });
});
