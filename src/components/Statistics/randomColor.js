export default function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = 'rgba(' + r + ',' + g + ',' + b + ',0.8)';
  return color;
}
