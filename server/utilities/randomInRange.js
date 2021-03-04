
const randomInRange = (min, max) => {
  const minShifted = Math.ceil(min);
  const maxShifted = Math.floor(max);

  return Math.floor(Math.random() * (maxShifted - minShifted + 1)) + minShifted;
}

export default randomInRange;
