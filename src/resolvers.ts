import { Resolvers } from "./generated";
import { products } from "./products";
import { makeResult } from "./makeResult";

// getOrderPackaging provides string response
// didn't have time to allow getOrderPackaging to accept multiple counts and codes
export const resolvers: Resolvers = {
  Query: {
    allProducts: () => products,
    getProductByCode: (_, { code }, __) =>
      products.find((product) => product.code === code.toUpperCase()) || null,
    getOrderPackaging: (_, { code, count }, __) => {
      const product = products.find(
        (product) => product.code === code.toUpperCase()
      );
      if (product) {
        const result = makeResult(product, count);
        const sentence: any = [];
        result.forEach((res) => {
          sentence.push(
            `${res.sum} pack(s) of ${res.count} items ($ ${(
              res.price * 0.01
            ).toFixed(2)} ea.)`
          );
        });
        return sentence;
      }
      return "Failed";
    },
  },
};
