import { makeOrder } from "./makeOrder";

// need to fix types and variable names
// once product matching code found, find result of makeOrder
// re-add product key/values to result of makeOrder
// reducer to count number of duplicates and return new array
export const makeResult = (
  product: { name?: string; code?: string; packagingOptions: any },
  count: number
) => {
  let packArray: any = [];
  product.packagingOptions.map((packagingOption: { count: any }) => {
    packArray.push(packagingOption.count);
  });
  const order = makeOrder(packArray);
  const results = order(count);
  let newArr: any = [];
  product.packagingOptions.map((pack: { count: any }) => {
    results.forEach((el: any) => {
      if (pack.count === el) {
        newArr.push(pack);
      }
      return newArr;
    });
    return newArr;
  });
  const result = [
    ...newArr
      .reduce((r: any, e: any) => {
        let k = `${e.count}|${e.price}`;
        if (!r.has(k)) r.set(k, { ...e, sum: 1 });
        else r.get(k).sum++;
        return r;
      }, new Map())
      .values(),
  ];
  return result;
};
