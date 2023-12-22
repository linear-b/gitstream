// Add user who want to enable gitStream to this list.
const gitstreamUsers = ["user1", "user2"];
/**
 * @description Returns true if the username that is passed to this function is specified in a predefined list of users. 
 * This is useful if you want gitStream automations to run only for specified users.
 * @module isGitstreamUser
 * @param {string} username - The GitHub username to check.
 * @returns {boolean} Returns true if the user is specified in the gitstreamUsers list, otherwise false.
 * @example {{ pr.author | isGitStreamUser }}
 * @license MIT
 */
function isGitstreamUser(username) {
    if (containsString(gitstreamUsers, username)) {
        return true;
    } else {
        return false;
    }
};

function containsString(arr, str) {
    return arr.includes(str);
};

module.exports = isGitstreamUser;

/**
 * Copyright (c) 2023 LinearB

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */