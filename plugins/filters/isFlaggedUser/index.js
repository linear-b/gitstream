// Add users who you want to add to the flag list.
const flaggedUsers = ["user1", "user2"];
/**
 * @module isFlaggedUser
 * @description Returns true if the username that is passed to this function is specified in a predefined list of users. 
 * This is useful if you want gitStream automations to run only for specified users.
 * @param {string} Input - The GitHub username to check.
 * @returns {boolean} Returns true if the user is specified in the flaggedUsers list, otherwise false.
 * @example {{ pr.author | isFlaggedUser }}
 * @license MIT
 */
function isFlaggedUser(username) {
    if (flaggedUsers.includes(username)) {
        return true;
    } else {
        return false;
    }
};

function containsString(arr, str) {
    return arr.includes(str);
};

module.exports = isFlaggedUser;
