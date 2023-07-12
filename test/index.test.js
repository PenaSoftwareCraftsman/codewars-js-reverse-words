const { reverseWords } = require('./../src/index')

describe('reverseWords', () => {
    it('Should return a empty string when a empty string is passed', () => {
        let str = "";
        let strExpected = "";

        expect(reverseWords(str)).toBe(strExpected);
    });


    it('Should return a string "a" when "a" is passed', () => {
        let str = "a";
        let strExpected = "a";

        expect(reverseWords(str)).toBe(strExpected);
    });

    it('Should return a string "ab" when "ba" is passed', () => {
        let str = "ab";
        let strExpected = "ba";

        expect(reverseWords(str)).toBe(strExpected);
    });
});