
var vidas = 3;
var pontos = 0;
var fase = 1;
var travessiaFinalConcluida = false;

// JOGADOR
var jogador = createSprite(200, 365);
jogador.setAnimation("jogador");
jogador.scale = 0.5;

// CARROS
var carro1 = createSprite(50, 280);
carro1.setAnimation("carro_vermelho");
carro1.velocityX = 3;

var carro2 = createSprite(350, 210);
carro2.setAnimation("carro_azul");
carro2.velocityX = -4;

var carro3 = createSprite(80, 190);
carro3.setAnimation("carro_amarelo");
carro3.velocityX = 0;

// CAMINHÃO
var caminhao = createSprite(350, 130);
caminhao.setAnimation("caminhao");
caminhao.velocityX = 0;

// TRONCOS
var tronco1 = createSprite(80, 120);
tronco1.setAnimation("tronco_pequeno");
tronco1.velocityX = 0;

var tronco2 = createSprite(300, 80);
tronco2.setAnimation("tronco_grande");
tronco2.velocityX = 0;

var tronco3 = createSprite(100, 40);
tronco3.setAnimation("tronco_grande");
tronco3.velocityX = 0;

// PREPARAÇÃO INICIAL
prepararFase1();

// FUNÇÃO PRINCIPAL
function draw() {
  if (fase == 1) {
    jogarFase1();
  }
  else if (fase == 2) {
    jogarFase2();
  }
  else if (fase == 3) {
    jogarFase3();
  }
}

// MOVIMENTO DO JOGADOR
function moverJogador() {
  if (keyWentDown("up")) {
    jogador.y = jogador.y - 35;
  }

  if (keyWentDown("down")) {
    jogador.y = jogador.y + 35;
  }

  if (keyWentDown("left")) {
    jogador.x = jogador.x - 35;
  }

  if (keyWentDown("right")) {
    jogador.x = jogador.x + 35;
  }

  if (jogador.x < 20) {
    jogador.x = 20;
  }

  if (jogador.x > 380) {
    jogador.x = 380;
  }

  if (jogador.y > 380) {
    jogador.y = 380;
  }
}

// MOVIMENTAÇÃO DOS VEÍCULOS
function movimentarVeiculos() {
  if (carro1.x > 440) {
    carro1.x = -40;
  }

  if (carro1.x < -40) {
    carro1.x = 440;
  }

  if (carro2.x > 440) {
    carro2.x = -40;
  }

  if (carro2.x < -40) {
    carro2.x = 440;
  }

  if (carro3.x > 440) {
    carro3.x = -40;
  }

  if (carro3.x < -40) {
    carro3.x = 440;
  }

  if (caminhao.x > 460) {
    caminhao.x = -60;
  }

  if (caminhao.x < -60) {
    caminhao.x = 460;
  }
}

// MOVIMENTAÇÃO DOS TRONCOS
function movimentarTroncos() {
  if (tronco1.x > 460) {
    tronco1.x = -60;
  }

  if (tronco1.x < -60) {
    tronco1.x = 460;
  }

  if (tronco2.x > 480) {
    tronco2.x = -80;
  }

  if (tronco2.x < -80) {
    tronco2.x = 480;
  }

  if (tronco3.x > 480) {
    tronco3.x = -80;
  }

  if (tronco3.x < -80) {
    tronco3.x = 480;
  }
}

// VERIFICAR COLISÕES COM VEÍCULOS
function verificarColisoes() {
  if (
    jogador.isTouching(carro1) ||
    jogador.isTouching(carro2) ||
    jogador.isTouching(carro3) ||
    jogador.isTouching(caminhao)
  ) {
    perderVida();
  }
}

// PERDER VIDA
function perderVida() {
  if (vidas > 0) {
    vidas = vidas - 1;
    jogador.x = 200;
    jogador.y = 365;
  }
}

// MOSTRAR INFORMAÇÕES
function mostrarInformacoes() {
  fill("white");
  stroke("black");
  strokeWeight(3);
  textSize(15);

  text("VIDAS: " + vidas, 10, 20);
  text("PONTOS: " + pontos, 125, 20);
  text("FASE: " + fase, 315, 20);

  noStroke();
}

// ESCONDER TRONCOS
function esconderTroncos() {
  tronco1.x = -500;
  tronco1.y = -500;
  tronco1.velocityX = 0;

  tronco2.x = -500;
  tronco2.y = -500;
  tronco2.velocityX = 0;

  tronco3.x = -500;
  tronco3.y = -500;
  tronco3.velocityX = 0;
}

// PREPARAR FASE 1
function prepararFase1() {
  jogador.x = 200;
  jogador.y = 365;

  carro1.x = 50;
  carro1.y = 280;
  carro1.velocityX = 3;

  carro2.x = 350;
  carro2.y = 210;
  carro2.velocityX = -4;

  carro3.x = -200;
  carro3.y = -200;
  carro3.velocityX = 0;

  caminhao.x = -200;
  caminhao.y = -200;
  caminhao.velocityX = 0;

  esconderTroncos();
}

// JOGAR FASE 1
function jogarFase1() {
  background("green");

  moverJogador();
  movimentarVeiculos();
  verificarColisoes();

  drawSprites();
  mostrarInformacoes();

  if (jogador.y < 50) {
    pontos = pontos + 100;
    fase = 2;
    prepararFase2();
  }
}

// PREPARAR FASE 2
function prepararFase2() {
  jogador.x = 200;
  jogador.y = 365;

  carro1.x = 30;
  carro1.y = 310;
  carro1.velocityX = 5;

  carro2.x = 350;
  carro2.y = 250;
  carro2.velocityX = -6;

  carro3.x = 70;
  carro3.y = 190;
  carro3.velocityX = 7;

  caminhao.x = 350;
  caminhao.y = 130;
  caminhao.velocityX = -4;

  esconderTroncos();
}

// JOGAR FASE 2
function jogarFase2() {
  background("darkgreen");

  moverJogador();
  movimentarVeiculos();
  verificarColisoes();

  drawSprites();
  mostrarInformacoes();

  if (jogador.y < 50) {
    pontos = pontos + 200;
    fase = 3;
    prepararFase3();
  }
}

// PREPARAR FASE 3
function prepararFase3() {
  jogador.x = 200;
  jogador.y = 365;

  carro1.x = 50;
  carro1.y = 320;
  carro1.velocityX = 5;

  carro2.x = 350;
  carro2.y = 275;
  carro2.velocityX = -5;

  carro3.x = 80;
  carro3.y = 230;
  carro3.velocityX = 6;

  caminhao.x = 350;
  caminhao.y = 185;
  caminhao.velocityX = -4;

  tronco1.x = 70;
  tronco1.y = 120;
  tronco1.velocityX = 2;

  tronco2.x = 300;
  tronco2.y = 80;
  tronco2.velocityX = -2;

  tronco3.x = 100;
  tronco3.y = 40;
  tronco3.velocityX = 3;
}

// VERIFICAR O RIO
function verificarRio() {
  if (jogador.y < 145) {

    if (jogador.isTouching(tronco1)) {
      jogador.x = jogador.x + tronco1.velocityX;
    }

    else if (jogador.isTouching(tronco2)) {
      jogador.x = jogador.x + tronco2.velocityX;
    }

    else if (jogador.isTouching(tronco3)) {
      jogador.x = jogador.x + tronco3.velocityX;
    }

    else {
      perderVida();
    }

    // LIMITES HORIZONTAIS APÓS O TRANSPORTE
    if (jogador.x < 20) {
      jogador.x = 20;
    }

    if (jogador.x > 380) {
      jogador.x = 380;
    }
  }
}

// JOGAR FASE 3
function jogarFase3() {
  background("blue");

  if (travessiaFinalConcluida == false) {
    moverJogador();

    movimentarVeiculos();
    movimentarTroncos();

    verificarColisoes();

    // RECONHECER A CHEGADA FINAL
    if (jogador.y < 20) {
      pontos = pontos + 500;
      travessiaFinalConcluida = true;
    }

    // VERIFICAR O RIO SOMENTE SE
    // A TRAVESSIA AINDA NÃO TERMINOU
    if (travessiaFinalConcluida == false) {
      verificarRio();
    }
  }

  drawSprites();
  mostrarInformacoes();

  if (travessiaFinalConcluida == true) {
    fill("yellow");
    textSize(20);
    text("TRAVESSIA CONCLUIDA!", 75, 90);
  }
}
