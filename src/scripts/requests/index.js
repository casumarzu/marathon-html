import $ from 'jquery'

window.signup = function signup(name, password) {
  $.ajax({
    type: 'POST',
    url: '/api/signup',
    dataType: 'json',
    data: {name, password}
  }).done((data) => {
    console.log(data);
  }).fail((data) => console.error(data))
}

window.login = function auth(name, password) {
  $.ajax({
    type: 'POST',
    url: '/api/auth',
    dataType: 'json',
    data: {name, password}
  }).done((data) => {
    console.log(data);
  }).fail((data) => console.error(data))
}

window.logout = function logout() {
  $.ajax({
    type: 'POST',
    url: '/api/logout',
    dataType: 'json'
  }).done((data) => {
    console.log(data);
  }).fail((data) => console.error(data))
}

window.Clients = {
  show() {
    $.ajax({
      type: 'GET',
      url: '/api/clients',
      dataType: 'json'
    }).done((data) => {
      console.log(data);
    })
  },
  add(name) {
    $.ajax({
      type: 'POST',
      url: '/api/clients',
      dataType: 'json',
      data: {
        name: name,
      }
    }).done((data) => {
      console.info('done add', data);
    }).fail((data) => {
      console.error('fail add', data);
    })
  },
  remove(id) {
    $.ajax({
      type: 'DELETE',
      url: '/api/clients',
      dataType: 'json',
      data: {
        _id: id,
      }
    }).done((data) => {
      console.info('done remove', data);
    }).fail((data) => {
      console.error('fail remove', data);
    })
  }
}


window.Bills = {
  show() {
    $.ajax({
      type: 'GET',
      url: '/api/bills',
      dataType: 'json'
    }).done((data) => {
      console.log(data);
    })
  },
  add(name, id) {
    $.ajax({
      type: 'POST',
      url: '/api/bills',
      dataType: 'json',
      data: {
        name: name,
        client: id
      }
    }).done((data) => {
      console.info('done add', data);
    }).fail((data) => {
      console.error('fail add', JSON.parse(data.responseText));
    })
  },
  remove(id) {
    $.ajax({
      type: 'DELETE',
      url: '/api/bills',
      dataType: 'json',
      data: {
        _id: id,
      }
    }).done((data) => {
      console.info('done remove', data);
    }).fail((data) => {
      console.error('fail remove', data);
    })
  }
}


window.Transactions = {
  show() {
    $.ajax({
      type: 'GET',
      url: '/api/transactions',
      dataType: 'json'
    }).done((data) => {
      console.log(data);
    })
  },
  add(message, cost, id) {
    $.ajax({
      type: 'POST',
      url: '/api/transactions',
      dataType: 'json',
      data: {
        message: message,
        cost: cost,
        bill: id
      }
    }).done((data) => {
      console.info('done add', data);
    }).fail((data) => {
      console.error('fail add', data);
    })
  },
  remove(id) {
    $.ajax({
      type: 'DELETE',
      url: '/api/transactions',
      dataType: 'json',
      data: {
        _id: id,
      }
    }).done((data) => {
      console.info('done remove', data);
    }).fail((data) => {
      console.error('fail remove', data);
    })
  }
}
