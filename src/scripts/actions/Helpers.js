import _ from 'lodash'
export function snapshotToList(snapshot) {
  let list = _.compact(snapshot.val())
  let resultList = []
  for(let participant in list){
    if ({}.hasOwnProperty.call(list, participant)) {
      let participantItem = list[participant]
      resultList.push(participantItem)
    }
  }
  return resultList
}

export function recordFromSnapshot(snapshot) {
  let record = snapshot.val()
  record.key = snapshot.key
  return record
}
