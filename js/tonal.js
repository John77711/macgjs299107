t = {};
t.noteSequence = ['c','d','e','f','g','a','b'];  // for calculating octave switches.

$(function(){
    console.log('tonal script loaded...');
    
    t.playScale = function() {
        notes = Tonal.Scale.get("C harmonic minor").notes;

        notes.forEach(note => {
            octave = 4;
            midi = Tonal.Note.midi(note + octave);
            sprite = j.convertMidiToSpriteIndex(midi);
            j.spriteQueue.push(sprite);
        });

        j.howl.play(j.spriteQueue[0]);
    }

    t.playSynth = function(chord) {
        notes = Tonal.Chord.get(chord).notes;
        nn = []
        notes.forEach(note => {
            octave = 4;
            nn.push(note + octave);
        });

        const synth = new Tone.PolySynth().toDestination();
        // set the attributes across all the voices using 'set'
        synth.set({ detune: -1200 });
        // play a chord
        synth.triggerAttackRelease(nn, 1);
    }
});