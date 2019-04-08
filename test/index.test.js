const removeY = require('../lib/index');

describe('array test', ()=> {
  it('takes an array removes words that contain y', ()=> {
    const array = ['journal', 'coffee', 'Emily', 'lovely', 'computer'];
    const result = removeY(array);
    expect(result).toEqual(['journal', 'coffee', 'computer']);
  });
});
