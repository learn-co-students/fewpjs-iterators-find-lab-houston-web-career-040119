const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let winning = record.find( obj => obj.result == "W")
  if (winning != undefined) {return winning.year}
  else {return undefined}
}
