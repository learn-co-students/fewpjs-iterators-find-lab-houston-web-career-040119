const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  let record = records.find( r => r.result === "W" );
  if (record) {
    return record.year;
  }
  return undefined;
}
