export default function secondsToTime(s) {
  const fm = [
    Math.floor(s / 60 / 60 / 24),
    Math.floor(s / 60 / 60) % 24,
    Math.floor(s / 60) % 60,
    Math.floor(s % 60)
  ]
  return fm.map((v, i) => {
    return ((v < 10) ? '0' : '') + v;
  }).join(':');
}
