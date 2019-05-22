const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let record = array.find(element => element.result === 'W')
  return !!record ? record.year : undefined
}
