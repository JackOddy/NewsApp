let colors = [
  '#f5d46a',
  '#ec7d5c',
  '#a53f5b',
  '#55335f',
];

export default () => {
  const [h, ...t] = colors;
  colors = [...t, h];
  return h;
}
