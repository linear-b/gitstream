/**
 * @module banana
 * @description Replace all instances of the word banana with the 🍌 emoji.
 * @param {string} Input - The string to bananaify
 * @returns {string} Returns the same string with all instances of the word banana replaced with the 🍌 emoji
 * @example {{ pr.comment | banana }}
 * @license MIT
**/
function banana(text) {
    return text.replaceAll('banana', '🍌');
};

module.exports = banana;