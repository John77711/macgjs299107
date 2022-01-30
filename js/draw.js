
// Variants for draw1ing fingerboard.
// namespace draw clashes with method. 
guitar.fb.draw1 = {};


// guitar.fb.randomRoot(1) need this somewhere!!

guitar.fb.draw1.drawPositionWithScaleDegrees = function(pattern) {
    resetClasses = state.notes.reset.soft;

    guitar.fb.draw1.removeClassesFromNotes(state.notes.reset.hard);
    guitar.fb.obj.find('.note').addClass('off1'); // reset everything to off.
    

    // if draw mask is an option.
    if (state.useMask) {
        guitar.fb.draw1.drawMaskWithScaleDegrees(guitar.data.majorScale);
    }

	$.each(pattern, function(k, v) {
        
		$.each(v, function(k1, v1) {
            note = guitar.fb.obj.find('.fretsmall').eq(k).find('.note').eq(k1);
			switch(v1) {
                case guitar.modeH:  //highlighted note , allow this to be triggered in addition.  
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d' + (guitar.modeH+1),'on2']);
                    break;                
				case 0: // An unused note.
                    // only if it doesn't have the mask class.
                    if (!note.hasClass('mask')) {   
                        guitar.fb.draw1.renderNote(note, resetClasses, ['off1']);
                    }
                    break;
                case 1:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d1']); 
                    break;
                case 2:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d2']); 
                    break;
                case 3:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d3']); 
                    break;                                        
                case 4:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d4']);
                    break;                                        
                case 5:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d5']); 
                    break;                                        
                case 6:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d6']);
                    break;                                        
                case 7:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d7']);
                    break;                                         
			    default:
                    // anything other than 0-7
                    guitar.fb.draw1.renderNote(note, resetClasses, ['half1']);  
                    break;                                                                                                                      
			}

		});
	});    
}

/**
 * Draw mask with scale degrees.
 */
guitar.fb.draw1.drawMaskWithScaleDegrees = function() {

    // Adjust key for pitch axis mode.
    key = state.pitchAxis ? pitchAxis.getModeAsDifferentKey(guitar.key, guitar.modeH): guitar.key;
    
    const noteMap = guitar.masks.getNoteArray(key, 'major');
    mask = guitar.masks.getMask(noteMap);

    guitar.fb.draw1.removeClassesFromNotes(state.notes.reset.hard);

    $.each(mask, function(k, v) {
        
		$.each(v, function(k1, v1) {
            note = guitar.fb.obj.find('.fretsmall').eq(k).find('.note').eq(k1);
			switch(v1) {
				case 0: // An unused note.
                    // only if it doesn't have the mask class.
                    if (!note.hasClass('mask')) {   
                        guitar.fb.draw1.renderNote(note, resetClasses, ['off1']);
                    }
                    break;
                case 1:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d1','mask']); 
                    break;
                case 2:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d2','mask']); 
                    break;
                case 3:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d3','mask']); 
                    break;                                        
                case 4:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d4','mask']);
                    break;                                        
                case 5:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d5','mask']); 
                    break;                                        
                case 6:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d6','mask']);
                    break;                                        
                case 7:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d7','mask']);
                    break;                                         
			    default:
                    // anything other than 0-7
                    // guitar.fb.draw1.renderNote(note, resetClasses, ['half1']);  
                    break;                                                                                                                      
			}

		});
	});  
}

/**
 * Draw mask with absolute pitches.
 */
guitar.fb.draw1.drawMaskWithPitch = function() {

}


/**
 * 
 * @param {*} pattern 
 */
guitar.fb.draw1.drawPositionWithPitch = function(pattern) {

}

/**
 * 
 * 
 * @param [] classes 
 */
 guitar.fb.draw1.removeClassesFromNotes = function (classes) {
    $.each(classes, function(k,cssClass){
        guitar.fb.obj.find('.note').removeClass(cssClass);
    });
}

/**
 * 
 * 
 * @param [] classes 
 */
 guitar.fb.draw1.renderNote = function (obj, classesToRemove, classesToAdd) {
    $.each(classesToRemove, function(k, cssClass){
        obj.removeClass(cssClass);
    });

    $.each(classesToAdd, function(k, cssClass){
        obj.addClass(cssClass);
    });
}


//----------[ Draw with relative interval]--------//


guitar.fb.draw1.drawPositionWithRelativeInterval = function(pattern) {
    console.log('drawPositionWithRelativeInterval');

    resetClasses = state.notes.reset.soft;

    guitar.fb.draw1.removeClassesFromNotes(state.notes.reset.hard);
    guitar.fb.obj.find('.note').addClass('off1'); // reset everything to off.
    
    // if draw mask is an option.
    if (state.useMask) {
        guitar.fb.draw1.drawMaskWithScaleDegrees(guitar.data.majorScale);
    }

	$.each(pattern, function(k, v) {
        
		$.each(v, function(k1, v1) {
            note = guitar.fb.obj.find('.fretsmall').eq(k).find('.note').eq(k1);
            
            interval = guitar.masks.getRelativeInterval(v1, guitar.modeH, guitar.key, guitar.data.normalisedFingerboard[k][k1]);
            noteCssClass = 'n' + interval;

			switch(v1) {
                case guitar.modeH:  //highlighted note , allow this to be triggered in addition.  
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb','d' + (guitar.modeH+1),'on2']);
                    break;                
				case 0: // An unused note.
                    // only if it doesn't have the mask class.
                    if (!note.hasClass('mask')) {   
                        guitar.fb.draw1.renderNote(note, resetClasses, ['off1']);
                    }
                    break;
                case 1:
                    // guitar.masks.getRelativeInterval = function(degree, mode, key, absolutePitch);   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb', noteCssClass]); 
                    break;
                case 2:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb', noteCssClass]); 
                    break;
                case 3:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb', noteCssClass]); 
                    break;                                        
                case 4:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb', noteCssClass]);
                    break;                                        
                case 5:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb', noteCssClass]); 
                    break;                                        
                case 6:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb', noteCssClass]);
                    break;                                        
                case 7:   
                    guitar.fb.draw1.renderNote(note, resetClasses, ['fb', noteCssClass]);
                    break;                                         
			    default:
                    // anything other than 0-7
                    guitar.fb.draw1.renderNote(note, resetClasses, ['half1']);  
                    break;                                                                                                                      
			}

		});
	});    
}


/**
 * 
 */
guitar.fb.draw1.drawTriad = function (pattern) {
    guitar.fb.drawPosition(pattern);

}