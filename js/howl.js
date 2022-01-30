console.log('loading howl');

j = {};
j.sampleLength = 2400;  //2375
j.sampleDuration = 200;  //2375
j.spacing = 0;
j.convertMidiToSpriteIndex = function(midi) {
    console.log('midi to sprite index.');
    n = (midi - 24);
    return 'm' + n;
};
j.spriteQueue = [];

$(function(){

    j.howl = new Howl({
        src: ['assets/pianosprite.mp3'],
        sprite : { // Piano sounds starting from c1
            m1: [0, j.sampleDuration], // Midi 24
            m2: [(j.sampleLength * 1) + j.spacing, j.sampleDuration],
            m3: [(j.sampleLength * 2) + j.spacing, j.sampleDuration],
            m4: [(j.sampleLength * 3) + j.spacing, j.sampleDuration],
            m5: [(j.sampleLength * 4) + j.spacing, j.sampleDuration],
            m6: [(j.sampleLength * 5) + j.spacing, j.sampleDuration],
            m7: [(j.sampleLength * 6) + j.spacing, j.sampleDuration],
            m8: [(j.sampleLength * 7) + j.spacing, j.sampleDuration],
            m9: [(j.sampleLength * 8) + j.spacing, j.sampleDuration],
            m10: [(j.sampleLength * 9) + j.spacing, j.sampleDuration],
            m11: [(j.sampleLength * 10) + j.spacing, j.sampleDuration],
            m12: [(j.sampleLength * 11) + j.spacing, j.sampleDuration],
            m13: [(j.sampleLength * 12) + j.spacing, j.sampleDuration],
            m14: [(j.sampleLength * 13) + j.spacing, j.sampleDuration],
            m15: [(j.sampleLength * 14) + j.spacing, j.sampleDuration],
            m16: [(j.sampleLength * 15) + j.spacing, j.sampleDuration],
            m17: [(j.sampleLength * 16) + j.spacing, j.sampleDuration],
            m18: [(j.sampleLength * 17) + j.spacing, j.sampleDuration],
            m19: [(j.sampleLength * 18) + j.spacing, j.sampleDuration],
            m20: [(j.sampleLength * 19) + j.spacing, j.sampleDuration],
            m21: [(j.sampleLength * 20) + j.spacing, j.sampleDuration],
            m22: [(j.sampleLength * 21) + j.spacing, j.sampleDuration],
            m23: [(j.sampleLength * 22) + j.spacing, j.sampleDuration],
            m24: [(j.sampleLength * 23) + j.spacing, j.sampleDuration],
            m25: [(j.sampleLength * 24) + j.spacing, j.sampleDuration],
            m26: [(j.sampleLength * 25) + j.spacing, j.sampleDuration],
            m27: [(j.sampleLength * 26) + j.spacing, j.sampleDuration],
            m28: [(j.sampleLength * 27) + j.spacing, j.sampleDuration],
            m29: [(j.sampleLength * 28) + j.spacing, j.sampleDuration],
            m30: [(j.sampleLength * 29) + j.spacing, j.sampleDuration],
            m31: [(j.sampleLength * 30) + j.spacing, j.sampleDuration],
            m32: [(j.sampleLength * 31) + j.spacing, j.sampleDuration],
            m33: [(j.sampleLength * 32) + j.spacing, j.sampleDuration],
            m34: [(j.sampleLength * 33) + j.spacing, j.sampleDuration],
            m35: [(j.sampleLength * 34) + j.spacing, j.sampleDuration],
            m36: [(j.sampleLength * 35) + j.spacing, j.sampleDuration],
            m37: [(j.sampleLength * 36) + j.spacing, j.sampleDuration],
            m38: [(j.sampleLength * 37) + j.spacing, j.sampleDuration],
            m39: [(j.sampleLength * 38) + j.spacing, j.sampleDuration],
            m40: [(j.sampleLength * 39) + j.spacing, j.sampleDuration],
            m41: [(j.sampleLength * 40) + j.spacing, j.sampleDuration],
            m42: [(j.sampleLength * 41) + j.spacing, j.sampleDuration],
            m43: [(j.sampleLength * 42) + j.spacing, j.sampleDuration],
            m44: [(j.sampleLength * 43) + j.spacing, j.sampleDuration],
            m45: [(j.sampleLength * 44) + j.spacing, j.sampleDuration],
            m46: [(j.sampleLength * 45) + j.spacing, j.sampleDuration],
            m47: [(j.sampleLength * 46) + j.spacing, j.sampleDuration],
            m48: [(j.sampleLength * 47) + j.spacing, j.sampleDuration],
            m49: [(j.sampleLength * 48) + j.spacing, j.sampleDuration],
            m50: [(j.sampleLength * 49) + j.spacing, j.sampleDuration],
            m51: [(j.sampleLength * 50) + j.spacing, j.sampleDuration],
            m52: [(j.sampleLength * 51) + j.spacing, j.sampleDuration],
            m53: [(j.sampleLength * 52) + j.spacing, j.sampleDuration],
            m54: [(j.sampleLength * 53) + j.spacing, j.sampleDuration],
            m55: [(j.sampleLength * 54) + j.spacing, j.sampleDuration],
            m56: [(j.sampleLength * 55) + j.spacing, j.sampleDuration],
            m57: [(j.sampleLength * 56) + j.spacing, j.sampleDuration],
            m58: [(j.sampleLength * 57) + j.spacing, j.sampleDuration],
            m59: [(j.sampleLength * 58) + j.spacing, j.sampleDuration],
            m60: [(j.sampleLength * 59) + j.spacing, j.sampleDuration],
            m61: [(j.sampleLength * 60) + j.spacing, j.sampleDuration],
            m62: [(j.sampleLength * 61) + j.spacing, j.sampleDuration],
            m63: [(j.sampleLength * 62) + j.spacing, j.sampleDuration],
            m64: [(j.sampleLength * 63) + j.spacing, j.sampleDuration],
            m65: [(j.sampleLength * 64) + j.spacing, j.sampleDuration],
            m66: [(j.sampleLength * 65) + j.spacing, j.sampleDuration],
            m67: [(j.sampleLength * 66) + j.spacing, j.sampleDuration],
            m68: [(j.sampleLength * 67) + j.spacing, j.sampleDuration],
            m69: [(j.sampleLength * 68) + j.spacing, j.sampleDuration],
        },
        onend: function() {
            if (j.spriteQueue.length > 1) {
                j.spriteQueue.shift();
                j.howl.play(j.spriteQueue[0]);
            }
        },
        onload() {
            console.log('loaded');
        },
        onloaderror(e, msg) {
            console.log('Error', e, msg);
        }
    });

    $('#playHowl').click(function() {
        // setInterval(function(){
            j.howl.play('m' + Math.ceil(Math.random() * 70));
        // }, Math.random() * 500);    
    });
});

