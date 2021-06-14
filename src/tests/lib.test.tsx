import {
  applyDiscount,
  getCurrencies,
  getProduct,
  greet,
  numberTest,
  registerUser,
} from "../demoTest/lib";

//testing number
describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = numberTest(1);
    expect(result).toBe(1);
  });
  it("should return a positive number if input is negative", () => {
    const result = numberTest(-1);
    expect(result).toBe(1);
  });
  it("should return 0 number if input is 0", () => {
    const result = numberTest(0);
    expect(result).toBe(0);
  });
});
//testing string
describe("greet", () => {
  it("should return the greeting message", () => {
    const result = greet("Fahim");
    expect(result).toMatch(/Fahim/);
  });
});
//testing array
describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = getCurrencies();
    //to general
    expect(result).toBeDefined();
    expect(result).not.toBeNull();
    //to specific
    expect(result[0]).toBe("usd");
    expect(result[1]).toBe("aud");
    expect(result[2]).toBe("eur");
    expect(result.length).toBe(3);
    //proper way
    expect(result).toContain("usd");
    //ideal way
    expect(result).toEqual(expect.arrayContaining(["usd", "aud", "eur"]));
  });
});
//testing object
describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = getProduct(1);
    // expect(result).toEqual({ id: 1, price: 10 });
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", 1);
  });
});
//testing exception
describe("registerUser", () => {
  it("should throw if username is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        registerUser(a);
      }).toThrow();
    });
  });
  it("should return a user object if valid username is passed", () => {
    const result = registerUser("fahim");
    expect(result).toMatchObject({ userName: "fahim" });
    expect(result.id).toBeGreaterThan(0);
  });
});
//async
describe("applyDiscount", () => {
  it("should apply 10% discount if customer has more than 10 points", () => {
    const order = { customerId: 1, totalPrice: 10 };
    applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});
