$(function(){

	guitar.fb.obj = $('.fretboard');
	// guitar.fb.draw(guitar.data.pattern1.a);
	guitar.fb.drawMode(eval('guitar.data.majorScale.pattern' + createRandom(7)), createRandom(7));

	// tone js
	// playTone();

	$('#playHowl').click(function() {
		alert('ouch!');
	});
});

$intervalNumber = 3500;

setInterval(function(){
	guitar.fb.drawMode(eval('guitar.data.majorScale.pattern' + createRandom(7)), createRandom(7));
}, $intervalNumber);


var guitar = {};
guitar.fb = {}
guitar.data = {};


function createRandom(max, type) {
	if (type == 'floor') {
		return Math.floor(Math.random() * max);
	}
	
	return Math.ceil(Math.random() * max);
}
	
/**
* create fingerboard element.
*/
guitar.fb.draw = function (pattern) {
	// read from guitar.data.pattern1
	// draw rows with elemnets as defined by array
	$.each(pattern, function(k, v) {
		var $fret = guitar.fb.obj.append('<div class = "fretsmall '+ first + '"><div class="fretMarker">' + k  + '</div></div>');

		$.each(v, function(k1, v1) {
			console.log('note', v1);
			var css = '';
			switch(v1) {
				case 0:
				console.log(v1);
				break;
				case 1:
				console.log(v1);
				css = 'on';
				break;
				case 2:
				css = 'on root';
				console.log(v1);
				break;
			}

			// Also add data attribute onto selected element.
			// guitar.fb.obj.find('.fret').eq(k).append('<div class = "note ' + css + '"></div>');
			guitar.fb.obj.find('.fretsmall').eq(k).append('<div class = "note fb ' + 'n' +  v1 + ' off1"></div>');

		});
	});
}

// draw with root.
guitar.fb.drawMode = function (pattern, mode) {
	
	// Clear fingerboard
	guitar.fb.clear();

	// read from guitar.data.pattern1
	// draw rows with elemnets as defined by array
	$.each(pattern, function(k, v) {
		var $fret = guitar.fb.obj.append('<div class = "fret"></div>');
		
		$.each(v, function(k1, v1) {
			var css = '';

			if (v1 > 0 ) {
				css += ' on';
			}

			if (v1 == mode) {
				css += ' root';
			}

			// Also add data attribute onto selected element.
			guitar.fb.obj.find('.fret').eq(k).append('<div class = "note ' + css + '"></div>');
		});
	});

	$('.modelabel').html(capitalize(guitar.data.intervalNames[mode]));
}

guitar.fb.clear = function () {
	guitar.fb.obj.html('');
}

const capitalize = (s) => {
	if (typeof s !== 'string') return ''
	return s.charAt(0).toUpperCase() + s.slice(1)
  }



/**
 * 
 * @param {*} key 
 */
function getNormalisedKey(key) {
	    nts = notes.all.normalised[key];
	    var result;
	    $.each(nts, function(k, note){
	        $.each(keys, function(k1, scale) {
	            if (note == scale[0]) {
	                result = scale;
	            }
	        });
	    });
	
	    return result;
	}
	
	/**
	 * 
	 * @param {*} scale 
	 * @param {*} degree 
	 */
	function reorderScaleToMode(scale, degree) {
	    x = 0;
	    mode = scale.clone();
	    while (x < degree) {
	        x++;
	        z = mode.shift();
	        mode.push(z);
	    }
	    return mode;
	}
	
/**
 * Random num
 */
guitar.data.random = function(num) {
	return Math.floor(Math.random() * num);
}	