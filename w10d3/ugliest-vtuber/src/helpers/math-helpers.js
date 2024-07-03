// Calculate distance between 2 3d points
// Square root ( (x2 - x1)^2 + (y2 - y1)^2 + (z2- z1)^2 )


export const calculateDistanceBetweenPoints = (pointA, pointB) => {
  const xDiff = pointB.x - pointA.x
  const yDiff = pointB.y - pointA.y
  const zDiff = pointB.z - pointA.z

  return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2) + Math.pow(zDiff, 2))
}