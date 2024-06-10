export const checkIfWellWatered = (lastWatered, wateringInterval) => {
  const lastWateredDate = new Date(lastWatered)
  const todayDate = new Date()

  const diffInMs = todayDate.getTime() - lastWateredDate.getTime()
  const diffInDays = diffInMs / 1000 / 86400

  return diffInDays < wateringInterval
}
