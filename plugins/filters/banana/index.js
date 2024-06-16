/**
 * @module banana
 * @description Replace all instances of the word banana with the 🍌 emoji.
 * @param {string} Input - The string to bananaify
 * @returns {string} Returns the same string with all instances of the word banana replaced with the 🍌 emoji
 * @example {{ pr.comment | banana }}
 * @license MIT
**/


module.exports = (text) => {
    return text.replaceAll('banana', '🍌');
};

const banana = require('./index.js');
console.assert(banana("hello banana!") === 'hello 🍌!', `banana("hello banana!") === 'hello 🍌' but got ${banana("hello banana!")}`);
