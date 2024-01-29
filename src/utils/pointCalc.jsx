const Min_Radius = 7.5;
const Max_Radius = 15;
const Depth = 2;
const Left_Color = "#1ECBE1";
const Right_Color = "#FFFFFF";
const Num_Tetra = 2500

const randomBetweenInterval = (min, max) => {
  return Math.random() * (max - min) + min;
}

const getGradientStop = (ratio) => {
  ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio

  const c0 = Left_Color.match(/.{1,2}/g).map(
    (oct) => parseInt(oct, 16) * (1 - ratio)
  )
  const c1 = Right_Color.match(/.{1,2}/g).map(
    (oct) => parseInt(oct, 16) * (ratio)
  )

  const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255))
  const color = ci
    .reduce((a, v) => (a << 8) + v, 0)
    .toString(16)
    .padStart(6, '0')

  return `#${color}`
}

const calcColor = (x) => {
  const maxDiff = Max_Radius * 2
  const dist = x + maxDiff
  const ratio = dist / maxDiff
  const stop = getGradientStop(ratio)

  return stop
}

export const pointsAsteriod = Array.from(
  { length: Num_Tetra },
  (_, k) => k + 1
).map((num) => {
  const randomRadius = randomBetweenInterval(Min_Radius, Max_Radius)
  const randomAngle = Math.random() * Math.PI * 5

  // const x = randomRadius * Math.cos(randomAngle)
  // const y = randomRadius * (Math.sin(randomAngle) + 0.2 * Math.cos(2.8 * randomAngle))

  // const x = randomRadius * (2 * Math.cos(randomAngle) + Math.cos(2 * randomAngle))
  // const y = randomRadius * (2 * Math.sin(randomAngle) + Math.sin(2 * randomAngle))

  // const x = randomRadius * Math.sin(randomAngle) * (Math.exp(Math.cos(randomAngle)) - 2 * Math.cos(4 * randomAngle) - Math.pow(Math.sin(randomAngle / 12), 5))
  // const y = randomRadius * Math.cos(randomAngle) * (Math.exp(Math.cos(randomAngle)) - 2 * Math.cos(4 * randomAngle) - Math.pow(Math.sin(randomAngle / 12), 5))

  const x = randomRadius * (Math.pow(Math.cos(randomAngle), 3))
  const y = randomRadius * (Math.pow(Math.sin(randomAngle), 3))

  const z = randomBetweenInterval(-Depth, Depth)

  const color = calcColor(x)

  return {
    idx: num,
    position: [x, y, z],
    color,
  };
});

export const pointsCircle = Array.from(
  { length: Num_Tetra },
  (_, k) => k + 1
).map((num) => {
  const randomRadius = randomBetweenInterval(Min_Radius, Max_Radius)
  const randomAngle = Math.random() * Math.PI * 5

  // const x = randomRadius * Math.cos(randomAngle)
  // const y = randomRadius * (Math.sin(randomAngle) + 0.2 * Math.cos(2.8 * randomAngle))

  // const x = randomRadius * (2 * Math.cos(randomAngle) + Math.cos(2 * randomAngle))
  // const y = randomRadius * (2 * Math.sin(randomAngle) + Math.sin(2 * randomAngle))

  // const x = randomRadius * Math.sin(randomAngle) * (Math.exp(Math.cos(randomAngle)) - 2 * Math.cos(4 * randomAngle) - Math.pow(Math.sin(randomAngle / 12), 5))
  // const y = randomRadius * Math.cos(randomAngle) * (Math.exp(Math.cos(randomAngle)) - 2 * Math.cos(4 * randomAngle) - Math.pow(Math.sin(randomAngle / 12), 5))

  // const y = randomRadius * (Math.pow(Math.sin(randomAngle), 3))
  // const x = randomRadius * (Math.pow(Math.cos(randomAngle), 3))

  const x = randomRadius * Math.cos(randomAngle)
  const y = randomRadius * Math.sin(randomAngle)

  const z = randomBetweenInterval(-Depth, Depth)

  const color = calcColor(x)

  return {
    idx: num,
    position: [x, y, z],
    color,
  };
});

export const pointsOuter = Array.from(
  { length: Num_Tetra },
  (_, k) => k + 1
).map((num) => {
  const randomRadius = randomBetweenInterval(Min_Radius / 2, Max_Radius * 2)
  const randomAngle = Math.random() * Math.PI * 5

  // const x = randomRadius * Math.cos(randomAngle)
  // const y = randomRadius * (Math.sin(randomAngle) + 0.2 * Math.cos(2.8 * randomAngle))

  // const x = randomRadius * (2 * Math.cos(randomAngle) + Math.cos(2 * randomAngle))
  // const y = randomRadius * (2 * Math.sin(randomAngle) + Math.sin(2 * randomAngle))

  // const x = randomRadius * Math.sin(randomAngle) * (Math.exp(Math.cos(randomAngle)) - 2 * Math.cos(4 * randomAngle) - Math.pow(Math.sin(randomAngle / 12), 5))
  // const y = randomRadius * Math.cos(randomAngle) * (Math.exp(Math.cos(randomAngle)) - 2 * Math.cos(4 * randomAngle) - Math.pow(Math.sin(randomAngle / 12), 5))

  // const y = randomRadius * (Math.pow(Math.sin(randomAngle), 3))
  // const x = randomRadius * (Math.pow(Math.cos(randomAngle), 3))

  const x = randomRadius * Math.cos(randomAngle)
  const y = randomRadius * Math.sin(randomAngle)

  const z = randomBetweenInterval(-Depth * 10, Depth * 10)

  const color = calcColor(x)

  return {
    idx: num,
    position: [x, y, z],
    color,
  };
});
