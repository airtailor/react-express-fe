import {flatten} from 'lodash';

export const getTotal = cart => {
  const alterations = cart.garments.reduce((prev, curr) => {
    prev.push(curr.alterations);
    prev = flatten(prev);
    return prev;
  }, []);
  const price = alterations.reduce((prev, curr) => (prev += curr.price), 0);
  return price.toFixed(2);
};
