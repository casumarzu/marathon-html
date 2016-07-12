import $ from 'jquery'
window.$ = $

function onDone (json) {
  debugger
  return json
}
function onFail (err) {
  debugger
  return err
}

export class Sprints {
  index() {
    return fetch('/api/v1/races')
      .then(function(response) {
        debugger
        return response.json()
      }).then(onDone).catch(onFail)
  }
  show(sprint_id) {
    return fetch(`/api/v1/races/${sprint_id}`)
      .then(function(response) {
        return response.json()
      }).then(onDone).catch(onFail)
  }
}

export class Distances {
  index(race_id) {
    const url = `/api/v1/races/${race_id}/distances`
    return fetch(url)
      .then(function(response) {
        return response.json()
      }).then(onDone).catch(onFail)
  }
  show(race_id, distance_id) {
    const url = `/api/v1/races/${race_id}/distances/${distance_id}`
    return fetch(url)
      .then(function(response) {
        return response.json()
      }).then(onDone).catch(onFail)
  }
}

export class Participants {
  index(race_id, distance_id) {
    const url = `/api/v1/races/${race_id}/distances/${distance_id}/users`
    return fetch(url,{
      method: 'GET'
    })
      .then(function(response) {
        return response.json()
      }).then(onDone).catch(onFail)
  }
  show(race_id, distance_id, user_id) {
    const url = `/api/v1/races/${race_id}/distances/${distance_id}/users/${user_id}`
    return fetch(url)
      .then(function(response) {
        return response.json()
      }).then(onDone).catch(onFail)
  }
  add(race_id, distance_id, name, age_group, e_mail, sex, club, nation, city, phone) {
    const data = {
      name, e_mail, age_group, sex, club, nation, city, phone
    }
    const url = `/api/v1/races/${race_id}/distances/${distance_id}/users`
    // return fetch(url, {
    //   method: 'POST',
    //   boby: data
    // })
    //   .then(function(response) {
    //     return response.json()
    //   }).then(onDone).catch(onFail)

    return $.ajax({
      type: 'POST',
      dataType: 'json',
      url,
      data
    })

  }
}

/*
$.ajax({
  type: 'POST',
  dataType: 'json',
  url: '/api/v1/races/1/distances/1/users',
  data: {
    name:'Вася Пупкин', e_mail:'vasya@pupkin.com', age_group:3, sex:1, club:'Амелия', nation:'Россия', city:'Тверь', phone:'+7 920 123 54 23'
  }
}).done( data => console.log(data) )
.fail( err => console.error(err))
*/
// const wait = (delay) => new Promise( resolve => setTimeou(resolve, delay) )
