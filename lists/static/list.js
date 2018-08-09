$(document).ready(function () {
    $('input').on('keypress', function () {
        $('.has-error').hide();
        console.log('keypressed');
    });
});
