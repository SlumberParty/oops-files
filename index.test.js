const fs = require('fs');
const { join } = require('path');


describe('rename files', () => {
    beforeEach(done => {
        fs.writeFile(join(__dirname, '1.txt'), 'whyy', done));
    })

  afterEach(done => {
    fs.unlink(join(__dirname, '1.txt'), done);
  })

  it('')
});