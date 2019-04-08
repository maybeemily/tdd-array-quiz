const { removeY } = require('../lib/index');

describe('array test', ()=> {
    it('takes an array removes words that contain y', ()=> {
        const strings = ['journal', 'coffee', 'Emily', 'lovely', 'computer'];
        const result = removeY(strings);
        expect(result).toEqual(['journal', 'coffee', 'computer']);
    });
});
