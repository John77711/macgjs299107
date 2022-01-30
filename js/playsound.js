console.log('playsound...');

var playsound = {};

playsound.midi = function () {
    console.log('midi');
    // Read current position and generate midi note map.

    guitar.position;  // position needs normalised to fb.
    guitar.data.midiNoteFingerbord;

    result = guitar.fb.createPitchSpecificMapFromPattern(guitar.position, guitar.key);
    position = result['pattern'];

    // turn midi note numbers into an object.
    midiNoteNumbers = [];
    modeNotes = [];

    $.each(position, function(k, v) {
        $.each(v, function(s, t) {
            // is there a note in the position?
            if (t !== 0 ) {
                midiNoteNumbers.push(guitar.data.midiNoteFingerbord[k][s]);
            }
            if (t == 1) {
                modeNotes.push(playsound.calculatePitchFromMidi(guitar.data.midiNoteFingerbord[k][s]));
            }
        });
    });


    // sort values.
    midiNoteNumbers.sort();

    notes = [];
    midiNoteNumbers.forEach(note => {
        notes.push(playsound.calculatePitchFromMidi(note));
        if (playsound.isMidiRootNote(note, guitar.key)) {
            console.log('Note', note);
        }
    });

    console.log(notes);

    const synth = new Tone.Synth().toDestination();
    const seq = new Tone.Sequence((time, note) => {
        synth.triggerAttackRelease(note, 0.8, time);
        // subdivisions are given as subarrays
    }, notes).start(0);
    Tone.Transport.loop = false;
    // Tone.Transport.start();

}

playsound.calculatePitchFromMidi = function(midiNote) {

    notesA = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
    offset = 24; // A0 = 21. C1 =24

    normNote = midiNote - offset;
    idx = normNote % 12;    
    octave = Math.ceil(normNote/12);
    return notesA[idx] + octave;
}

/**
 * Check midi code against key to establisy if first note is
 */
playsound.isMidiRootNote =function(midiNote, key) {
    offset = 24; // A0 = 21. C1 =24

    normNote = midiNote - offset;
    idx = normNote % 12;
    //
    console.log(idx, key);
    return (key === idx) ? true : false; 
}

// Chop sequence at either side to get rid off root notes.
playsound.chopAtRootNotes = function(notes, key) {
    // notes indexOf.

    notes.forEach((note, idx) => {
        if (modeNotes.indexOf(note)==-1) {
            notes.shift();
        }
        else {
            // break;
        }
    });

    // loop from the end and pop any note tht is not a root note.


    // next steps, read midi input? Display on screen.


}