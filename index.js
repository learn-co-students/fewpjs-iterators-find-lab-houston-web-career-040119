
function superbowlWin(array) {
  let winningSeason = array.find(season => season.result === "W")
  return winningSeason ? winningSeason.year : undefined
}
