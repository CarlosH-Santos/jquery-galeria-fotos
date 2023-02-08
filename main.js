$(document).ready(function() {
   $('header button').click(function() { //dd um evento em um elemento - - primeiro seleciona o elemento -- segundo .click = é uma função/ após isso chama uma função
      $('form').slideDown(); // Ao clicar no botão ele desce o painel
   });
   
   $('#botton-reset').click(function() { // utiliza-se o # antes de button pq no jquery é necessário quando se trata de id
      $('form').slideUp(); // Ao clicar no botão ele sobe o painel !LEMBRAR: colocar o display:none no CSS neste caso onde trata do 'form'
   });

   $('form').on('submit', function(e) { //add um elemento através da função .on /chama o e.preventDefault pra prevenir que atualize a página assim que for enviado.
      e.preventDefault();
      const enderecoDaNovaImagem = $("#url-imagem").val(); //Add uma nova imagem
      const novoElemento = $('<li li style= "display: none"></li>');
      $(`<img src= "${enderecoDaNovaImagem}" />`).appendTo(novoElemento); //pega o elemento e add entre o <li> da const novoElemento
      $(`
      <div class= "overlay-image-link">
         <a href="${enderecoDaNovaImagem}" target="_blank" title = "Ver imagem em tamanho real" >  
            Ver imagem em tamanho real
         </a>   
      <div/> 
      `).appendTo(novoElemento); //o target é para abrir o link em outra aba  
      $(novoElemento).appendTo('ul');
      $(novoElemento).fadeIn(1000);
      $('#url-imagem').val('');  //para limpar o formuário após o envio
   })

})

