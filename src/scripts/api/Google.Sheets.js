
export default class GoogleSheetsAPI {
  constructor() {
    this.CLIENT_ID = '174484714392-qodoerh4b83v5qpe28lam543v5aggk76.apps.googleusercontent.com'
    this.SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    console.info('Hello!', this)
    this.checkAuth()
  }

  checkAuth() {
    gapi.auth.authorize(
      {
        'client_id': this.CLIENT_ID,
        'scope': this.SCOPES.join(' '),
        'immediate': true
      }, ::this.handleAuthResult);
  }

  handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
      this.loadSheetsApi()
    }
  }

  handleAuthClick(event) {
    gapi.auth.authorize(
      {client_id: this.CLIENT_ID, scope: this.SCOPES, immediate: false},
      ::this.handleAuthResult)
    return false
  }

  loadSheetsApi() {
    var discoveryUrl =
        'https://sheets.googleapis.com/$discovery/rest?version=v4';
    gapi.client.load(discoveryUrl).then(::this.listMajors);
  }

  listMajors() {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      range: 'Class Data!A2:E',
    }).then(function(response) {
      const {values} = response.result
      values.forEach((item)=> console.log(item))
    }, function(response) {
      appendPre('Error: ' + response.result.error.message);
    });
  }
}
