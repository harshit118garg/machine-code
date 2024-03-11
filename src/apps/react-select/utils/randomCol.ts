export function randomCol(): string {
  const red = toHex(Math.floor(Math.random() * 256));
  const green = toHex(Math.floor(Math.random() * 256));
  const blue = toHex(Math.floor(Math.random() * 256));

  const color = `#${red}${green}${blue}`;

  return color;
}

function toHex(decimal: number): string {
  const hex = decimal.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}
