$(function () {

    //defaults
    $.fn.editable.defaults.url = '/save/';

    //enable / disable
    /*
     $('#enable').click(function() {
     $('#user .editable').editable('toggleDisabled');
     });*/

    //editables 
    $('#char_name').editable({
        type: 'text',
        pk: 1,
        name: 'char_name',
        title: 'Enter character name'
    });


    $('#experience').editable({
        emptytext: '&nbsp;',
        type: 'text',
        pk: 1,
        name: 'experience',
        title: 'Enter experience'
    });

    $('#player_name').editable({
        type: 'text',
        pk: 1,
        name: 'player_name',
        title: 'Enter player name'
    });

    $('#chronicle').editable({
        type: 'text',
        pk: 1,
        name: 'chronicle',
        title: 'Enter chronicle'
    });

    $('#concept').editable({
        type: 'text',
        pk: 1,
        name: 'concept',
        title: 'Enter concept'
    });

    $('#residence').editable({
        type: 'text',
        pk: 1,
        name: 'residence',
        title: 'Enter residence'
    });


    $('#sex').editable({
        prepend: "not selected",
        autotext: 'never',
        name: 'sex',
        source: [
            {value: 'M', text: 'M'},
            {value: 'F', text: 'F'}
        ]
    });


    $('.health-table').find('span').editable({
        //$('#health[0]').editable({
        //prepend: "□",
        emptytext: '&nbsp;',
        title: 'select damage',
        pk: 1,
        type: 'select',
        source: [
            {value: ' ',text: ' '},
            {value: '/',text: '/'},
            {value: 'X',text: 'X'},
            {value: '*',text: '*'}
        ]
    });


    $('#nature').editable({
        showbuttons: false
    });


    $('#demeanor').editable({
        showbuttons: false
    });


    $('#age').editable({
        type: 'text',
        pk: 1,
        name: 'age',
        title: 'Enter character age'
    });


    $('#user .editable').on('hidden', function (e, reason) {
        if (reason === 'save' || reason === 'nochange') {
            var $next = $(this).closest('tr').next().find('.editable');
            if ($('#autoopen').is(':checked')) {
                setTimeout(function () {
                    $next.editable('show');
                }, 300);
            } else {
                $next.focus();
            }
        }
    })

});