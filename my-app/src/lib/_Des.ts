import CryptoJS from 'crypto-js';
import tripledes from 'crypto-js/tripledes';
import { DES } from './env'

const IV = CryptoJS.enc.Utf8.parse(DES.Iv);
const KEY = CryptoJS.enc.Utf8.parse(DES.Key);

class CryptoDES {
  encrypt(message: string) {
    let result = '';
    if (message) {
      result = encodeURIComponent(tripledes.encrypt(message, KEY, {
        iv: IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }));
    }
    return result;
  }

  decrypt(message: string) {
    let result = '';
    if (message) {
      message = decodeURIComponent(message);
      result = tripledes.decrypt(
        { ciphertext: CryptoJS.enc.Base64.parse(message) },
        KEY,
        {
          iv: IV, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7
        }
      );
    }
    return result ? result.toString(CryptoJS.enc.Utf8) : result;
  }
}

export default new CryptoDES();