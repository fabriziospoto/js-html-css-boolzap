//**********************INVIO
$('#mic').click(function() {
    manda();
});
$('#send-text').keypress(function(event) {    // intercetto il tasto INVIO
    if(event.which == 13) {
        manda();
    }
});

//***********************RICEZIONE
$('#mic').click(function() {
    setTimeout(risposta, 1500);
});
$('#send-text').keypress(function(event) {    // intercetto il tasto INVIO
    if(event.which == 13) {
        setTimeout(risposta, 1500);
    }
});

//***************FUNZIONI
function manda(){
    var valore = $('#send-text').val(); //prendo valore input
    var elemento2 = $('.template .message').clone();
    var el = elemento2.children('.mex-top');
    el.children('.mex-text').text(valore); //Personalizzo clone
    elemento2.addClass('sent');
    $('.conversazione').append(elemento2); //aggiungo clone input
    scroll();

    var datetime = new Date();  // Imposto ora
    var ora = datetime.getHours();
    var minutes = datetime.getMinutes();
    $('.sent .mex-time').text(ora + '.' + minutes);

}

function risposta() {
    var elemento3 = $('.template .message').clone();
    var el2 = elemento3.children('.mex-top');
    el2.children('.mex-text').text('Ok');
    elemento3.addClass('received');
    $('.conversazione').append(elemento3);
    scroll();

    var datetime = new Date();  // Imposto ora
    var ora = datetime.getHours();
    var minutes = datetime.getMinutes();
    $('.received .mex-time').text(ora + '.' + minutes);
}

function scroll() {
    $(".conversazione").scrollTop($(".conversazione")[0].scrollHeight);
}
