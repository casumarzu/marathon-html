import $ from 'jquery'

const sprints = window.sprints = (page, per_page) => {
  fetch('/api/v1/races')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
}
