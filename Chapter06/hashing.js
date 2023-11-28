const util = require('util');
const crypto = require('crypto');

const pbkdf2 = util.promisify(crypto.pbkdf2);

// function pbkdf2(
//     password: BinaryLike, (암호화할 문자열)
//     salt: BinaryLike,
//     iterations: number, (반복횟수, 많이 돌릴수록 안전하지만 오래 걸림)
//     keylen: number, (byte 단위의 Key 길이)
//     digest: string, (암호화할 함수)
//     callback: (err: Error | null, derivedKey: Buffer) => void,
// ): void;


const encrypt = async text => {
    const ALGO = 'sha512';
    const KEY_LEN = 64;
    const digest = await pbkdf2(text, '', 1, KEY_LEN, ALGO);
    console.log(`${text} | ${digest.toString('base64')}`); 
};
(async () => await encrypt('samplepassword'))();

