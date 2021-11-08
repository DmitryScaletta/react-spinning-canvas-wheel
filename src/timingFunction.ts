// https://github.com/d3/d3-ease/blob/main/src/math.js
const tpmt = (x: number) => {
  return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}

const timingFunction = tpmt;

export default timingFunction;
