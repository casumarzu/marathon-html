import assert from 'assert';

describe('Launching App.js', () => {

  describe('#DEBUG App', () => {
    // hooks
    // before( () => console.info('before') );
    // after( () => console.info('after') );
    // beforeEach( () => console.info('beforeEach') );
    // afterEach( () => console.info('afterEach') );

    it('2 плюс 2 равно четыре', () => assert.equal(2 + 2, 4) );
    it('2 плюс 3 равно пять', () => assert.equal(2 + 3, 5) );
  });

});
