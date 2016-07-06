import $ from 'jquery'

window.sprints = function sprints(page, per_page) {
  $.ajax({
    type: 'GET',
    url: '/api/v1/races',
    dataType: 'json',
    data: { page, per_page }
  }).done((data) => {
    console.log(data);
  }).fail((data) => console.error(data))
}
