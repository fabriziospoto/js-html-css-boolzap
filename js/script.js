
$('#mic').click(function() {
    manda();
  });
  // intercetto il tasto INVIO
  $('#send-text').keypress(function(event) {
    if(event.which == 13) {
      manda();
    }
  });

function manda(){

        var valore = $('#send-text').val(); //prendo valore input

        var elemento2 = $('.template .message').clone();
        var el = elemento2.children('.mex-top');
        el.children('.mex-text').text(valore); //Personalizzo clone
        elemento2.addClass('sent');

        $('.conversazione').append(elemento2); //aggiungo clone input
}
