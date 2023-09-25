import { assert } from 'chai'
import TextToPhonemes from "../../src/reciter/reciter.js";
import TextToPhonemesC from "./c-conv/reciter.js";
import loadFixture from '../fixture-reader.js';

export default function (files) {
  describe('reciter.js', () => {
    files.forEach((file) => {
      describe(`#Reciter.TextToPhonemes(${file})`, () => {
        loadFixture('reciter/fixtures/' + file).forEach((word) => {
          it(`should convert: "${word.input}" to "${word.output}".` , () => {
            const result = TextToPhonemes(word.input);
            assert.notEqual(result, false);
            assert.equal(result.trim(), word.output.trim());
          });
        });
      });
    });
  });
  describe('reciter-c.js', () => {
    files.forEach((file) => {
      describe(`#Reciter.TextToPhonemes(${file})`, () => {
        loadFixture('reciter/fixtures/' + file).forEach((word) => {
          it(`should convert: "${word.input}" to "${word.output}".` , () => {
            const result = TextToPhonemesC(word.input);
            assert.notEqual(result, false);
            assert.equal(result.trim(), word.output.trim());
          });
        });
      });
    });
  });
}
