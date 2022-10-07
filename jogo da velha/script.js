var jogador = null;
var jogadorSelect = document.getElementById("jogador_selecionado");
var vencedorSelect = document.getElementById("vencedor_selecionado");
var quadrados = document.getElementsByClassName('.container');

mudarJogador("X");

function escolherQuadrado(id) {

  
  var container = document.getElementById(id);
  if(container.innerHTML !== '-') {
    return
  }

  container.innerHTML = jogador;
  container.style.color = '#000';

  if(jogador === 'X') {
    jogador = 'O';
    
  } else {
    jogador = 'X';
  }
  mudarJogador(jogador);
  checarVencedor();
};

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelect.innerHTML = jogador;
};

function checarVencedor() {
  var quadrado1 = document.getElementById(1);
  var quadrado2 = document.getElementById(2);
  var quadrado3 = document.getElementById(3);
  var quadrado4 = document.getElementById(4);
  var quadrado5 = document.getElementById(5);
  var quadrado6 = document.getElementById(6);
  var quadrado7 = document.getElementById(7);
  var quadrado8 = document.getElementById(8);
  var quadrado9 = document.getElementById(9);
//VERTICAL
  if(checaSequencia(quadrado1, quadrado2, quadrado3)){
    mudarQuadrado(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
    return
  }

  if(checaSequencia(quadrado4, quadrado5, quadrado6)){
    mudarQuadrado(quadrado4, quadrado5, quadrado6);
    mudarVencedor(quadrado4);
    return
  }

  if(checaSequencia(quadrado7, quadrado8, quadrado9)){
    mudarQuadrado(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    return
  }
//HORIZONTAL  
  if(checaSequencia(quadrado1, quadrado4, quadrado7)){
    mudarQuadrado(quadrado1, quadrado4, quadrado7);
    mudarVencedor(quadrado4);
    return
  }
  if(checaSequencia(quadrado2, quadrado5, quadrado8)){
    mudarQuadrado(quadrado2, quadrado5, quadrado8);
    mudarVencedor(quadrado5);
    return
  }
  if(checaSequencia(quadrado3, quadrado6, quadrado9)){
    mudarQuadrado(quadrado3, quadrado6, quadrado9);
    mudarVencedor(quadrado6);
    return
  }
//DIAGONAL
  if(checaSequencia(quadrado1, quadrado5, quadrado9)){
    mudarQuadrado(quadrado1, quadrado5, quadrado9);
    mudarVencedor(quadrado5);
    return
  }
  if(checaSequencia(quadrado3, quadrado5, quadrado7)){
    mudarQuadrado(quadrado3, quadrado5, quadrado7);
    mudarVencedor(quadrado5);
    return
  }

}

  function mudarVencedor(container) {
    vencedor = container.innerHTML;
    vencedorSelect.innerHTML = vencedor  
  }

function mudarQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = "#0f0"
  quadrado2.style.background = "#0f0"
  quadrado3.style.background = "#0f0"
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
  var igual = false;

  if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
    igual = true
  }
  return igual
}


function reiniciar() {
  vencedor = null;
  vencedorSelect.innerHTML = ''

  for(var i = 1; i <= 9; i++) {
    var quadrado = document.getElementById(i);
      quadrado.style.background = '#eee';
      quadrado.style.color ='#eee';
      quadrado.innerHTML = '-'
  }
  mudarJogador('X')
}