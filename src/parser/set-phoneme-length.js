import { combinedPhonemeLengthTable } from "./tables.js";
import { END } from "../common/constants.js";

/**
 * change phoneme length dependent on stress
 *
 * @param {getPhoneme}    getPhoneme Callback for retrieving phonemes.
 * @param {getPhonemeStress} getStress  Callback for retrieving phoneme length.
 * @param {setPhonemeLength} setLength  Callback for setting phoneme length.
 *
 * @return undefined
 */
export default function SetPhonemeLength(getPhoneme, getStress, setLength) {
  let position = 0;
  let phoneme;
  while ((phoneme = getPhoneme(position)) !== END) {
    let stress = getStress(position);
    if (stress === 0 || stress > 0x7f) {
      setLength(position, combinedPhonemeLengthTable[phoneme] & 0xff);
    } else {
      setLength(position, combinedPhonemeLengthTable[phoneme] >> 8);
    }
    position++;
  }
}
