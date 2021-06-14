//testing number
export const numberTest = (num: number) => {
  return num >= 0 ? num : -num;
};
//testing string
export const greet = (name: string) => `Welcome ${name} hero`;
//array
export const getCurrencies = () => ["usd", "aud", "eur"];
//object
export const getProduct = (pdId: number) => {
  return {
    id: pdId,
    price: 10,
    category: "furniture",
  };
};
//exception
export const registerUser = (userName: any) => {
  if (!userName) throw new Error("user name is required");
  return { id: new Date().getTime(), userName };
};
//mock db call need to integrate unit test
const getCustomerSync = (id: number) => {
  console.log("reading a customer from mongo");
  return { id, points: 11 };
};
// function
export const applyDiscount = (order: any) => {
  const customer = getCustomerSync(order.customerId);
  if (customer.points > 10) {
    return (order.totalPrice *= 0.9);
  }
};
