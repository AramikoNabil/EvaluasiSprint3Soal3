var kodeUnix = [
  23,
  89,
  67,
  29,
  192,
  6,
  2,
  129,
  21,
  872,
  891,
  901,
  70,
  61,
  78,
  62,
  32,
  90,
  90,
];

var total = kodeUnix.map (x => x - 50 + kodeUnix.length)
.filter (x => x <= 20)
.reduce ((x , y) => x + y)

console.log (total)
