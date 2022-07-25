import axios from "axios";
import { getUserData } from "../utils/modules";

// 1. mock the axios module
jest.mock("axios");

/**
 * Write the assertions using the most appropriate matcher
 */
describe("07-exercises", () => {
  test("getUserData returns the user data", async () => {
    const BASE_URL = "https://www.api.com/users/1";

    const users = {
      data: [
        { firstName: "Alex", lastName: "Marks" },
        { firstName: "Ana", lastName: "Marín" },
        { firstName: "Daniel", lastName: "Marks" },
      ],
    };

    // You should make 2 assertions in this test, see bellow
    expect.assertions(2);

    // 2. set a mock resolved value to the axios.get method
    //    and pass it the `users` variable
    axios.get.mockResolvedValue(users);

    // 3. use await with the getUsers function and pass it as an argument
    //    the `BASE_URL` variable and then store the returned data
    //    in a variable `result`
    const result = await getUserData(BASE_URL);

    // 4. make an assertion that the `result` is equal to the `users.data` variable
    expect(result).toEqual(users.data);

    // 5. make an assertion that the axios.get method has been
    //    called with the `BASE_URL` variable
    expect(axios.get).toHaveBeenCalledWith(BASE_URL);
  });
});