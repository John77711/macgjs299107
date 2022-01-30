/**
 * Pitch access method for modes.
 */

pitchAxis = {};

/**
 * 
 */
pitchAxis.getModeAsDifferentKey = function(key, mode) {
    modeTranslation = [0, 2, 4, 5, 7, 9, 11];
                
    newKey = (12 + key - modeTranslation[mode-1]) % 12;
    // Return temporary key as pitch axis relative.
    return newKey;
}