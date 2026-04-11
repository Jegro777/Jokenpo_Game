let jogadorNome;
var jogadorPontos = 0;
var jogadorEscolha = 0;
var computadorPontos = 0;
var computadorEscolha = 0;

/* EXIBE MENSAGEM NA TELA */
function mensagem(texto) {
  document.getElementById("mensagem").innerHTML = texto;
}

/* DEFINE O NOME DO JOGADOR NA TELA */
function definirNomeJogador(nome) {
  document.getElementById("jogador-nome").innerHTML = nome;
}

/* SORTEIA ENTRE DOIS NÚMEROS */
function sortear(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* CALCULA E RETORNA QUEM GANHOU */
// 1- pedra | 2- papel | 3- tesoura
// retorna: 0 = empate | 1 = jogador | 2 = computador
function calcularEscolha(jogador, computador) {
  if (jogador == 1 && computador == 1) {
    return 0;
  } else if (jogador == 1 && computador == 2) {
    return 2;
  } else if (jogador == 1 && computador == 3) {
    return 1;
  } else if (jogador == 2 && computador == 1) {
    return 1;
  } else if (jogador == 2 && computador == 2) {
    return 0;
  } else if (jogador == 2 && computador == 3) {
    return 2;
  } else if (jogador == 3 && computador == 1) {
    return 2;
  } else if (jogador == 3 && computador == 2) {
    return 1;
  } else if (jogador == 3 && computador == 3) {
    return 0;
  }
}

/* SOMA PONTOS PARA O JOGADOR */
function somarPontoJogador() {
  jogadorPontos++;
  document.getElementById("jogador-pontos").innerHTML = jogadorPontos;
}

/* SOMA PONTOS PARA O COMPUTADOR */
function somarPontoComputador() {
  computadorPontos++;
  document.getElementById("computador-pontos").innerHTML = computadorPontos;
}

/* DESTACA A ESCOLHA NA TELA */
function selecionar(tipo, escolha) {
  document
    .getElementById(tipo + "-escolha-" + escolha)
    .classList.add("selecionado");
}

/* REMOVE O DESTAQUE DA ESCOLHA */
function deselecionar(tipo, escolha) {
  document
    .getElementById(tipo + "-escolha-" + escolha)
    .classList.remove("selecionado");
}

/* LÓGICA PRINCIPAL DO JOGO */
function jogar(escolha) {
  //Deselecionar uma escolha após selecionar uma outra
  deselecionar('jogador', jogadorEscolha);
  deselecionar('computador', computadorEscolha);

  // sortear a jogada do computador
  jogadorEscolha = escolha;
  computadorEscolha = sortear(1, 3);

  // destacar as escolhas na tela
  selecionar("jogador", jogadorEscolha);
  selecionar("computador", computadorEscolha);

  // calcular quem ganhou
  var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

  // exibir resultado e somar pontos
  if (ganhador == 0) {
    mensagem("Empate!");
  } else if (ganhador == 1) {
    mensagem("Ponto para " + jogadorNome + "!");
    somarPontoJogador();
  } else if (ganhador == 2) {
    mensagem("Ponto para o Computador!");
    somarPontoComputador();
  }

  // setTimeout dentro de jogar(), dispara a cada rodada
  setTimeout(function () {
    deselecionar("jogador", jogadorEscolha);
  }, 3500);
  setTimeout(function () {
    deselecionar("computador", computadorEscolha);
  }, 3500);
}

// Eventos de clique nos botões
document.getElementById("jogador-escolha-1").onclick = function () {
  jogar(1);
};
document.getElementById("jogador-escolha-2").onclick = function () {
  jogar(2);
};
document.getElementById("jogador-escolha-3").onclick = function () {
  jogar(3);
};

// Pergunta o nome e exibe boas-vindas
jogadorNome = prompt("Qual é o seu nome?");
document.getElementById("mensagem").innerHTML =
  "Bem-vindo " + jogadorNome + "! Está preparado? Escolha uma opção acima.";
definirNomeJogador(jogadorNome);
