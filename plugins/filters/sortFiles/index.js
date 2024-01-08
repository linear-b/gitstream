/**
 * @module sortFiles
 * @description Sorts PR file metadata by specified directory. 
 * @param {string} Input - A list containing FileDiff objects.
 * @param {string} - The directory to sort by.
 * @returns {object} Returns an object containing a list of lists of FileDiff objects for each subdirectory under the specified directory.
 * @example {{ source.diff.files | sortFiles("some/directory") }}
 * @license MIT
**/
function sortFiles(fileMetadataList, directory) {
    const subdirectoryGroups = {};
    fileMetadataList.forEach((fileMetadata) => {
        const { new_file } = fileMetadata;
        const regexPattern = new RegExp(`^${directory.replace(/\//g, '\\/')}/([^/]+)`);
    
        // Extract the subdirectory
        const match = new_file.match(regexPattern);
    
        if (match) {
            const subdirectory = match[1];
    
            if (!subdirectoryGroups[subdirectory]) {
                subdirectoryGroups[subdirectory] = [];
            }
    
            subdirectoryGroups[subdirectory].push(fileMetadata);
        }
    });
    return subdirectoryGroups;
}

module.exports = sortFiles;
