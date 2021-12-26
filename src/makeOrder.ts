// need to fix types with more time
// using memoization and callbacks
// adapted javascript coin change problem
export const makeOrder = function (packages: any[]) {
  let order: any;
  let cache: any = {};
  return (order = function (amount: number) {
    if (!amount) {
      return [];
    }
    if (cache[amount]) {
      return cache[amount].slice(0);
    }
    let min: any[] = [];
    packages.forEach(function (pack) {
      if (
        amount - pack >= 0 &&
        (order(amount - pack).length < min.length - 1 || !min.length) &&
        (order(amount - pack).length || !(amount - pack))
      ) {
        min = [pack].concat(order(amount - pack));
      }
    });
    return (cache[amount] = min).slice(0);
  });
};
