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
    setTimeout(risposta, 1000);
});
$('#send-text').keypress(function(event) {    // intercetto il tasto INVIO
    if(event.which == 13) {
        setTimeout(risposta, 1000);
    }
});

//***************RICHIAMO CHAT
$(document).on('click', '.c-box', function() {
    // richiamo();
    var posizione = $(this).index();
    console.log(posizione);
    $('.contatti .c-box').removeClass('active');
    $('main .conversazione').removeClass('active');

    $('main .conversazione').eq(posizione).addClass('active');
    $('.contatti .c-box').eq(posizione).addClass('active');

    var dato = document.getElementsByClassName('nome');

    var n = $(this).find('.nome').text();
    console.log(n);
    $('#av-dato').text(n);

    var f = $(this).find('.avatar-measures').attr('src');
    console.log(f);
    $('#av-js').attr('src', f);
});


//***************FUNZIONI
function manda(){
    var valore = $('#send-text').val(); //prendo valore input
    var elemento2 = $('.template .message').clone();
    var el = elemento2.children('.mex-top');
    el.children('.mex-text').text(valore); //Personalizzo clone
    elemento2.addClass('sent');
    $('.conversazione.active').append(elemento2); //aggiungo clone input
    // scroll();

    var datetime = new Date();  // Imposto ora
    var ora = addZero(datetime.getHours());
    var minutes = addZero(datetime.getMinutes());
    $('.sent .mex-time').text(ora + '.' + minutes);

}

function risposta() {
    var elemento3 = $('.template .message').clone();
    var el2 = elemento3.children('.mex-top');
    el2.children('.mex-text').text('Ok');
    elemento3.addClass('received');
    $('.conversazione.active').append(elemento3);
    // scroll();

    var datetime = new Date();  // Imposto ora
    var ora = addZero(datetime.getHours());
    var minutes = addZero(datetime.getMinutes());
    $('.received .mex-time').text(ora + '.' + minutes);
    console.log(datetime);
}

function scroll() {
    $(".conversazione").scrollTop($(".conversazione")[0].scrollHeight);
}


function addZero(numero) {
    if (numero < 10) {
        return '0' + numero;
    }
    return numero
}
