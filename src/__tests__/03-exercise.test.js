import { multiplyNums, sanitizeUserData } from "../utils/matchers";

/**
 * Write the assertions using the .toEqual() matcher
 */
describe("03-exercises", () => {
  test("multiplyNums multiplies each number in the array by 2", () => {
    const numbers = [1, 2, 3, 4, 5];
    const expected = [2, 4, 6, 8, 10];

    expect.assertions(1);

    /**
     * Make an assertion that the result of executing the multiplyNums function
     * with the `numbers` array as an argument, is equal to the `expected` array
     */

    // Write the assertion
    expect(multiplyNums(numbers)).toEqual(expected);
  });

  test("multiplyNums doesn't mutate the original array", () => {
    const numbers = [1, 2, 3, 4, 5];

    expect.assertions(1);

    /**
     * Write an assertion that the array returned by the multiplyNums function
     * is not the same array as the numbers array that it receives as an argument
     *
     * You should use a jest matcher that checks the reference of arrays and not .toEqual
     */

    // Write the assertion
    expect(multiplyNums(numbers)).not.toBe(numbers);
  });

  test("sanitizeUserData returns an object without sensitive information", () => {
    const safeUserData = {
      firstName: "Alex",
      lastName: "Marks",
      age: 20,
      jobTitle: "Developer",
    };

    const userWithSensitiveInformation = {
      ...safeUserData,
      password: "a98dsj9a8sdj89asd89jasd",
      role: "ADMIN",
    };

    expect.assertions(1);

    /**
     * Finish the test so that it checks if the result of calling
     * the `sanitizeUserData` function with the `userWithSensitiveInformation`
     * variable as an argument is the same as the `safeUserData` object.
     *
     * To test this, you need to use the .toEqual() matcher
     * to see of calling the function with `userWithSensitiveInformation`
     * returns an object that has the same `key: value` pairs as the `safeUserData`
     */
    expect(sanitizeUserData(userWithSensitiveInformation)).toEqual(
      safeUserData
    );
  });
});