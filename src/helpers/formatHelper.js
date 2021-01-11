const formatter = Intl.NumberFormat("pt-BR");

const formatPopulation = (number) => {
  return formatter.format(number);
};

export { formatPopulation };
