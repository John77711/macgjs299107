
var music = {};

music.notes = {};
music.notes.flatSeries = ['A','Bb','Cb','C','Db','D','Eb','E','F','Gb','G','Ab'];
music.notes.sharpSeries = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
music.notes.en1 = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
music.notes.en2 = ['A','Bb','Cb','C','Db','D','Eb','Fb','F','Gb','G','Ab'];
music.notes.stemOrder = ['A','B','C','D','E','F','G'];

music.keys = {};
music.keys.sharps = ['C','G','D','A','E','B','F#','C#'];
music.keys.flats = ['C','F','Bb','Eb','Ab','Db','Gb','Cb'];

// music.scale.major = ['T','T','ST','T','T','T','ST'];
music.scales = {}
music.scales.major = [2,2,1,2,2,2,1];
// derive from minor
// music.scales.hminor = [2,1,2,2,1,3,1]; // harmonic
// music.scales.mminor = [2,1,2,2,2,2,1]; // melodic

music.scales.major.chords = [['major', 'major 7'],
							 ['minor', 'minor 7'],
							 ['minor', 'minor 7'],
							 ['major', 'major 7'],
							 ['major', '7'],
 							 ['minor', 'minor 7'],
							 ['dim', 'min7b5'],
							]

music.notes.actions = {};

music.notes.actions.normaliseIndex = function(index, base) {
	if (index > (base - 1)) {
		index = index % base;
	} else if (index < 0 ) {
		index = (base -1) + (index % base);
	}
	return index;
}

music.notes.actions.generateKey = function(Obj) {

	var notesArr = [];
	var keyType = 'sharp';
	var scaleType = 'major';

	if (music.keys.sharps.indexOf(Obj.key) == -1) {
		keyType = 'flat';	
	}

	// get the scale from the config object.
	if (typeof(Obj.scale) != 'undefined') {
		scaleType = Obj.scale;
	}
	
	var index = music.notes.sharpSeries.indexOf(Obj.key);
	
	if (keyType == 'flat') {
		index = music.notes.flatSeries.indexOf(Obj.key);
		if (index != -1) {
			notesArr.push(music.notes.flatSeries[index]);
		}
		else {
			index = music.notes.en2.indexOf(Obj.key);
			notesArr.push(music.notes.en2[index]);
		}
	}
	else {
		notesArr.push(music.notes.sharpSeries[index]);
	}


	for(var x = 0; x < 6; x++) {
		// index = index + music.scales.major[x];
		index = index + music.scales[scaleType][x];
		
		index = music.notes.actions.normaliseIndex(index, 12);
		// check order. If stem ahas jumped index, change note.
// 		if (music.notes.actions.getStemIndex(music.notes.sharpSeries[index]) - notesArr[notesArr.length] == 1) {
		if (keyType == 'sharp') {
			notesArr.push(music.notes.sharpSeries[index]);
		}
		else {
			notesArr.push(music.notes.flatSeries[index]);
		}
// 		}
	}
	return notesArr;
}

music.notes.actions.getStem = function(note) {
	return note.substr(0,1);
}

// 
music.notes.actions.checkSpellings = function(keyArr, keyType) {
	var initialStemIndex = music.notes.stemOrder.indexOf(keyArr[0].substr(0,1));
	
	var stemIdx = initialStemIndex;
	if (keyType == 'sharp') {
		var	suffix = '#';
	}
	else {
		var suffix = 'b';
	}
	
	$.each(keyArr, function(k,v){
// 		music.notes.stemOrder
		var actualStemIdx = music.notes.stemOrder.indexOf(v.substr(0,1));
		if(k > 0) {
			var nextStem = music.notes.actions.normaliseIndex(stemIdx + 1, 7);
			if (actualStemIdx != nextStem) {
				keyArr[k] = music.notes.stemOrder[nextStem] + suffix;
			}
			stemIdx = nextStem;
		}	

	});
	
	return keyArr;
}

music.notes.actions.hmFromMajor = function(majorArr) {
	// harmonic minor
	var hm = majorArr.clone();
	
	for(var x=0; x<2; x++) {
		var tmp = hm.pop();
		hm.unshift(tmp);
	}

    hm[6] = hm[6] + "#"; 

	// fix flat/sharp bug.
	hm[6] = hm[6].replace('b#', '');    

	return hm;
}

music.notes.actions.mmFromMajor = function(majorArr) {
	// harmonic minor
	var mm = majorArr.clone();
	
	for(var x=0; x<2; x++) {
		var tmp = mm.pop();
		mm.unshift(tmp);
	}

	mm[5] = mm[5] + "#"; 
    mm[6] = mm[6] + "#"; 

	// fix flat/sharp bug.
	mm[5] = mm[5].replace('b#', '');	
	mm[6] = mm[6].replace('b#', '');    
	return mm;
}

music.notes.actions.getStemIndex = function(note) {
// 	console.log(note);
	return music.notes.stemOrder.indexOf(note.substr(0,1));
}

music.chords = {};

music.chords.newTriad = function(scale, index) {
	var rootIdx = music.notes.actions.normaliseIndex(index,7);
	var root =  scale[rootIdx];
	var third =  scale[music.notes.actions.normaliseIndex(index + 2, 7)];
	var fifth =  scale[music.notes.actions.normaliseIndex(index + 4, 7)];
	var seventh =  scale[music.notes.actions.normaliseIndex(index + 6, 7)];	
	
	var fourPartChord = [root, third, fifth, seventh];
	var triad = fourPartChord.clone();
	triad.pop();
	
	var triad1 = triad.clone();
	var ele = triad1.shift();
	triad1.push(ele);

	var triad2 = triad1.clone();
	var ele = triad2.shift();
	triad2.push(ele);
	
	//
	var fpc1 = fourPartChord.clone();
	var ele = fpc1.shift();
	fpc1.push(ele);

	var fpc2 = fpc1.clone();
	var ele = fpc2.shift();
	fpc2.push(ele);

	var fpc3 = fpc2.clone();
	var ele = fpc3.shift();
	fpc3.push(ele);
	
	var triadInversions = [triad, triad1, triad2];
	var seventhInversions = [fourPartChord, fpc1, fpc2, fpc3];
		
	return {
			"key" : scale[0],
			"scale" : scale,
			"root" : root,
			"triad" : triad,
			"triad inversions" : triadInversions,
			"random triad" : triadInversions[Math.floor(Math.random()*3)],
			"seventh" : fourPartChord,
			"seventh inversions" : seventhInversions,
			"random seventh" : seventhInversions[Math.floor(Math.random()*4)],
			"triadFcn" : music.scales.major.chords[rootIdx][0],
			"seventhFcn" : music.scales.major.chords[rootIdx][1],			
		}; 
}


Object.prototype.clone = function() {
    var newObj = (this instanceof Array) ? [] : {};
    for (i in this) {
        if (i == 'clone') 
            continue;
        if (this[i] && typeof this[i] == "object") {
            newObj[i] = this[i].clone();
        } 
        else 
            newObj[i] = this[i]
    } return newObj;
};