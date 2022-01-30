/**
 * Set up key menus.
 */
$(function(){

    // UIKeySelector
    $('#UIKeySelector > .item').click(function(){
        console.log($(this).text());

        $('#UIKeySelector > .item').removeClass('active');
        $(this).parent().find('.item').removeClass('active');
        $(this).toggleClass('active');  
        
        guitar.key = parseInt($(this).data('key'));
        cta.draw();
    });
    
    // UIScaleSelector
    $('#UIScaleSelector > .item').click(function(){
        console.log($(this).text());

        $(this).parent().find('.item').removeClass('active');
        $(this).toggleClass('active');

        guitar.scale = $(this).data('scale');
        cta.redrawMenus();
        cta.draw();
    });

    // UIModeSelector
    $('#UIModeSelector > .item').click(function(){
        console.log($(this).text());

        $(this).parent().find('.item').removeClass('active');
        $(this).toggleClass('active');

        guitar.modeH = parseInt($(this).data('mode'));
        cta.draw();
    });
    
    // UIPositionSelector
    $('#UIPositionSelector > .item').click(function(){
        console.log($(this).text());
        
        $(this).parent().find('.item').removeClass('active');
        $(this).toggleClass('active');
        
        // Get fingerboard position.
        guitar.position = cta.getPosition(guitar.scale, parseInt($(this).text()));
        cta.draw();
    });
    
    $('#UIRandomKeySelector .item').click(function(){
        
        // randoms (key, position, mode)
        rk = guitar.data.random(15);
        rm = guitar.data.random(7) + 1;
        rp = guitar.data.random(7) + 1;

        console.log($(this).hasClass('jj'));
        if ($(this).data('rand') == 'action') {
            if($('#UIRandomKeySelector .item[data-rand="key"]').hasClass('active')) {
                $('.item[data-key="' + rk + '"]').trigger('click');
            }
            if ($('#UIRandomKeySelector .item[data-rand="mode"]').hasClass('active')) {
                $('.item[data-mode="' + rm + '"]').trigger('click');
            }
            if ($('#UIRandomKeySelector .item[data-rand="position"]').hasClass('active')) {
                $('.item[data-pos="' + rp + '"]').trigger('click');
            }
        }
        else if ($(this).hasClass('jj')) {
            $(this).toggleClass('active');
        }
    });

    //UIDisplaySelector
    $('#UIDisplaySelector > .item').click(function(){
                
        $(this).parent().find('.item').removeClass('active');
        $(this).toggleClass('active');
        
        guitar.display = $(this).data('display');
        console.log(guitar.display);
        cta.draw();
    });

    //UIPlaySelection
    $('#UIPlaySelection > .item').click(function(){
        console.log($(this).data('play'));

        $(this).parent().find('.item').removeClass('active');
        $(this).toggleClass('active');

        playsound.midi(); //cant find this?

    });

    //UIJTestSelection
    $('#UIJTestSelection > .item').click(function(){
        console.log($(this).data('play'));

        $(this).parent().find('.item').removeClass('active');
        $(this).toggleClass('active');

    });

    // UIPositionSelector
    $('#UIQuizModeSelector > .item').click(function(){
        console.log($(this).data('deg'));

        $(this).parent().find('.item').removeClass('active');
        $(this).parent().find('.item').removeClass('red');
        $(this).toggleClass('active');
        // also bind with key numbers.

        if ($(this).data('deg') == guitar.modeH) {
            $('#UIRandomKeySelector .item[data-rand="action"]').trigger('click');
        }
        else {
            $(this).toggleClass('red');
        }

    }); 
    
    // Key selector for chord shapes.
    $('#UIQuizKeySelector > .item').click(function(){
 
        $(this).parent().find('.item').removeClass('active');
        $(this).parent().find('.item').removeClass('red');
        $(this).toggleClass('active');
        
        if ($(this).data('key') == guitar.key) {
            console.log('Trigger click.');
            $('#UIRandomKeySelector .item[data-rand="action"]').trigger('click');
        }
        else {
            $(this).toggleClass('red');
        }        
    });
});

var cta = {};
cta.draw = function() {
    console.log('draw function...');
    // reset positions - if scale changes set pattern to scale
    // Key remains global and read from guitar.key.

    key = state.pitchAxis ? pitchAxis.getModeAsDifferentKey(guitar.key, guitar.modeH): guitar.key;
    // on display highlight may change? Not really...
    result = guitar.fb.createPitchSpecificMapFromPattern(guitar.position, key);
    console.log(guitar.display);

    switch(guitar.display) {
        case 'standard':
            guitar.fb.drawPosition(result['pattern']);
            break;
        case 'interval':
        case 'interval1':
        case 'interval2':
            guitar.fb.draw1.drawPositionWithScaleDegrees(result['pattern']);
        break;
        case 'relative':
            guitar.fb.draw1.drawPositionWithRelativeInterval(result['pattern']);
        break;
        case 'pitches':
        break;
        case 'triads': // draw triads.
            
            // Triad position.
            randomPosition = guitar.data.random(3);
            
            // Sub set of strings for the triad.
            randomStringSet = guitar.data.random(4);

            // Random major/minor.
            randomMode = guitar.data.random(2);

            posArr = ['a', 'b', 'c'];
            modeArr = ['major','minor'];
            // for major/minor switch mode to 1 or 6.
            stringSetArr = ['h1', 'm2', 'm1', 'l1', 'all']; 
            
            guitar.position = guitar.data.triads[modeArr[randomMode]].positions[posArr[randomPosition]];
            guitar.position = guitar.fb.getStringSet( guitar.position, stringSetArr[randomStringSet]);

            result = guitar.fb.createPitchSpecificMapFromPattern(guitar.position, key);
            guitar.fb.draw1.drawTriad(result['pattern']);
        break;       
    }

    // Display single root only.
    guitar.fb.randomRoot(1)
}

// Redraw menus if changing scale
cta.redrawMenus = function() {
    $vals = [];
    switch(guitar.scale) {
        case 'major':
            $vals = ['Ionian','Dorian','Phrygian','Lydian','Mixolydian','Aeolian','Locrean'];
        break;
        case 'harmonic':
            $vals = ['Harmonic Minor','2','3','4','Phrygian Dominant','6', '7'];
            break;
        case 'melodic':
            $vals = ['Melodic Minor','2','3','4','5','6', '7'];
        break;
        case 'pentatonic':
            $vals = ['1',0,0,0,0,'6']; //Zeros should not be displayed.
        break;        
    }

    $('#UIModeSelector > .item').each(function(k,v) {
        if (k < $vals.length && $vals[k] != 0) {
            $(this).text($vals[k]);
            $(this).show();
        }
        else {
            $(this).hide();
        }
    });
 
    $('#UIPositionSelector > .item').each(function(k,v) {
        if (guitar.scale=='pentatonic') { // pentatonic
            $(this).siblings().eq(5).hide();
            $(this).siblings().eq(6).hide();
        } else {
            $(this).siblings().eq(5).show();
            $(this).siblings().eq(6).show();
        }

        $(this).data('pos', k); // not required
    });    
}

/**
 * Return 2d array of position.
 * @param string scale
 * @param int position
 * 
 * @return []
 */
cta.getPosition = function (scale, position) {
    switch(scale) {
        case 'major':
            return guitar.data.majorScale['pattern' + position].b; 
        case 'harmonic':
            return guitar.data.harmonicMinor['pattern'+ position].a;
        case 'melodic':
        break;
        case 'pentatonic':
            return guitar.data.pentatonics['pattern' + position].a;
    }
}