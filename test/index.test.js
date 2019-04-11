const { removeLetter } = require('../lib/index');

describe('array test', ()=> {
    it('takes an array removes words that contain y', ()=> {
        const strings = ['journal', 'coffee', 'Emily', 'lovely', 'computer'];
        const result = removeLetter(strings, 'y');
        expect(result).toEqual(['Is it journal?', 'Is it coffee?', 'Is it computer?']);
    });
});
