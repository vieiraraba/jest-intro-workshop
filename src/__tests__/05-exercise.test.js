import {
  addItemToList,
  addUser,
  getWeekDays,
  makeAdminUser,
  getUserInfo,
} from "../utils/matchers";

/**
 * Write the assertions using the most appropriate matcher
 */
describe("05-exercises", () => {
  test("addItemToList adds a new item to the initial array immutably", () => {
    expect.assertions(1);

    const prevList = [1, 2, 3, 4];
    const newItem = 5;

    /**
     * Test that the addItemToList function adds the `newItem` variable to the
     * `prevList` array and returns an array that contains the previous elements
     * and the new item.
     *
     * The function receives as arguments the previous array and the new item
     */

    // Write the assertion
    expect(addItemToList(prevList, newItem)).toContain(newItem);
  });

  test("addUser adds a new user to the list of users", () => {
    expect.assertions(1);

    const users = [{ name: "dani" }, { name: "ana" }, { name: "andrew" }];
    const expectedUser = { name: "maria" };

    /**
     * Test that the addUser function returns an array of objects
     * The function is called with the `users` array as the first argument
     * and the string "maria" as the second.
     *
     * You need to test that the functions returns an array that contains
     * an object equal to the one in the `expectedUser` variable
     *
     * @tip
     * you need to use an array matcher that can check objects
     */

    // Write the assertion
    expect(addUser(users, "maria")).toContainEqual(expectedUser);
  });

  test("getWeekDays returns an array of week days", () => {
    expect.assertions(1);

    const expectedDays = ["Monday", "Tuesday"];

    /**
     * Write an assertion that executing the getWeekDays function
     * returns an array of week days.
     *
     * You should check that the returned value matches the sub array
     * in the `expectedDays` variable
     */

    // Write the assertion
    expect(getWeekDays()).toEqual(expect.arrayContaining(expectedDays));
  });

  test("makeAdminUser returns an object with the role property", () => {
    expect.assertions(1);

    const user = { name: "dani" };
    const expectedProperty = { role: "ADMIN" };

    /**
     * Write an assertion that executing the makeAdminUser function
     * returns an object with a property of role.
     *
     * The function receives an object as an argument, therefore you should call it
     * with the `user` variable as an argument.
     *
     * You should check that the returned object sub-matches an object with
     * the properties of the `expectedProperty` variable
     */

    // Write the assertion
    expect(makeAdminUser(user)).toEqual(
      expect.objectContaining(expectedProperty)
    );
  });

  test("getUserInfo returns an object without the address properties", () => {
    expect.assertions(1);

    const userAddress = {
      postalCode: "08001",
      city: "Barcelona",
      streetName: "Sert 1",
    };

    const user = { name: "dani", ...userAddress };

    /**
     * Write an assertion that executing the getUserInfo function returns
     * an object without the properties in the `userAddress` variable
     *
     * The function receives an object as an argument, therefore you should call it
     * with the `user` variable as an argument.
     *
     * You should check that the returned object doesn't sub-match an object with
     * the properties of the `userAddress` variable
     */

    // Write the assertion
    expect(getUserInfo(user)).not.toEqual(expect.objectContaining(userAddress));
  });
});