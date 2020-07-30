// RISPOSTE RANDOM
var listaRisp = [
    "Mi è sembrato di vedere un gatto.",
    "Parto a metà agosto.",
    "Non dire volgarità.",
    "Rispondi perfavore.",
    "Je ne parle pas italien.",
    "Ich spreche kein Italienisch."
];

// INVIO
$('#mic').click(function() {
    manda();
});
$('#send-text').keypress(function(event) {    // intercetto il tasto INVIO
    if(event.which == 13) {
        manda();
    }
});

// RICEZIONE
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
    // var ora = numeriRandom(0, 23);
    // var minuti = numeriRandom(0, 60);

    //$('.sent .mex-time').text(ora + '.' + minuti);
}

function risposta() {
    i= 0;
    while (i < 1) {
        var indice = numeriRandom(0, listaRisp.length-1);
        var elemento3 = $('.template .message').clone();
        var el2 = elemento3.children('.mex-top');
        el2.children('.mex-text').text(listaRisp[indice]);
        elemento3.addClass('received');
        $('.conversazione').append(elemento3);
        scroll();
        i++;
    }
    // var ora = numeriRandom(0, 23);
    // var minuti = numeriRandom(0, 60);

    // $('.received .mex-time').text(ora + '.' + minuti);
}

function numeriRandom(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function scroll() {
    $(".conversazione").scrollTop($(".conversazione")[0].scrollHeight);
}
