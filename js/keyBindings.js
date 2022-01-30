/**
 * Add key bindings for mode quiz.
 * 
 * @param {*} e 
 * @returns 
 */
document.onkeydown = function(e) {
    console.log(e);

    // ArrowRight
    // ArrowLeft

    // Enter
    $activeItem = $('#UIQuizKeySelector .item .active');
    $allItems = $('#UIQuizKeySelector .item');
    $nextItem = $activeItem;
    $previousItem = $activeItem;

    switch(e.key) {
        case '1': //UIQuizModeSelector
        case '2': 
        case '3':
        case '4':
        case '5':
        case '6':         
        case '7': 
            $('#UIQuizModeSelector .item[data-deg="' + e.key + '"]').trigger('click');
            break;
        case 'ArrowRight':         
            $.each($allItems, function(k, item){
                if ($(item).hasClass('active') === true) {
                    $(item).removeClass('active');
                    $nextItem = $(item).next('.item');
                }               
            });

            $nextItem.addClass('active');
        break;
        case 'ArrowLeft': 
            $.each($allItems, function(k, item){
                if ($(item).hasClass('active') === true) {
                    $(item).removeClass('active');
                    $previousItem = $(item).prev('.item');
                }       
            });

            $previousItem.addClass('active');
            break;
        case 'r':
            $('#UIRandomKeySelector .item[data-rand="action"]').trigger('click');
        break;
        case 'Enter':
            // do trigger on active element to make selection.
            // console.log('Trigger click to select key1.');
            // console.log($activeItem.text());
            $('#UIQuizKeySelector .item.active').first().trigger('click');
        break; 
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};