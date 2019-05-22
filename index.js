const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  if (record.find(resultOfYear => resultOfYear.result === 'W')) {
    return record.find(resultOfYear => resultOfYear.result === 'W').year 
  }
}