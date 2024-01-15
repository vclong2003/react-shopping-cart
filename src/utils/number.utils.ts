const roundPrice = (price: number): number => {
  return Math.round(price * 100) / 100;
};

export { roundPrice };
