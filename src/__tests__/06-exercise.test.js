import { asyncAdd, fetchUserFail, fetchUserOK } from "../utils/async";

/**
 * Write the assertions using the most appropriate matcher
 */
describe("06-exercises", () => {
  /**
   * Finish the test so that it checks if the result of calling the
   * `asyncAdd` function with:
   * - the number 5 as the first argument,
   * - the number 5 as the second,
   * - the `callback` function as the third,
   *
   * executes the assertion inside the `callback` function.
   *
   * The `asyncAdd` will execute asynchronously (not with promises)
   * which means that you need to fix the test so that it waits for
   * the function to finish so that the assertion is made.
   *
   * @tip
   * done callback
   */
  test("asyncAdd returns the sum of the numbers", (done) => {
    expect.assertions(1);

    asyncAdd(5, 5, callback);

    // Finish the test
    function callback(result) {
      expect(result).toBe(10);
      done();
    }
  });

  /**
   * Finish the test so that it checks if the result of calling
   * the `fetchUserOK` function with the `userID` variable
   * as the first argument, returns a resolved Promise
   * with an object that has the same data as the `expectedUser` variable
   *
   * The `fetchUserOK` function will return a promise which means that you
   * need to wait for the promise and the result to check if the resolved
   * data is equal to the `expectedUser` variable.
   */
  test("fetchUserOK resolves the user data", () => {
    const userID = 5;
    const expectedUser = { id: userID, name: "Alex" };

    expect.assertions(1);

    // Finish the test
    return fetchUserOK(userID).then((data) => {
      expect(data).toEqual(expectedUser);
    });
  });

  /**
   * Finish the test so that it checks if the result of calling
   * the `fetchUserFail` function with the `userID` variable
   * as the first argument, returns a rejected Promise with
   * a string as a message that has the same value as
   * the `expectedMessage` variable
   *
   * The `fetchUserFail` function will return a promise
   * which means that you need to wait for the promise and
   * the result to check if the rejected message is the same
   * as the `expectedMessage` variable.
   */
  test("fetchUserFail rejects with an error message", () => {
    const userID = 5;
    const expectedMessage = `User ${userID} not found`;

    expect.assertions(1);

    // Finish the test
    return expect(fetchUserFail(userID)).rejects.toBe(expectedMessage);
  });
});