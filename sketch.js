let angle = 0;
let lineLength = 100;
let timer = 0;
let phase = 1; // 1: líneas dentro del círculo, 2: girar las líneas, 3: mostrar círculo
let circleX = 200; // Posición X inicial del círculo
let circleSize = lineLength * 2; // Tamaño inicial del círculo
let angleSecondary = 0;
let circleXSecondary = 200;
let circleSizeSecondary = lineLength * 2;
let innerCircleSize = 20; // Tamaño inicial del círculo interno
let growing = true; // Controlar si el círculo interno crece o encoje

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(220);

  // Movimiento y tamaño del círculo principal
  circleX = map(sin(frameCount * 0.05), -1, 1, 100, 300);
  circleSize = map(cos(frameCount * 0.05), -1, 1, lineLength * 0.5, lineLength * 3);

  // Mostrar el círculo principal
  noFill();
  stroke(0, 0, 255);
  ellipse(circleX, height / 2, circleSize);

  // Movimiento y tamaño del círculo secundario
  circleXSecondary = width - circleX;
  circleSizeSecondary = circleSize;

  // Mostrar el círculo secundario
  ellipse(circleXSecondary, height / 2, circleSizeSecondary);

  // Movimiento y tamaño del círculo interno
  if (growing) {
    innerCircleSize += 0.5;
  } else {
    innerCircleSize -= 0.5;
  }

  if (innerCircleSize >= circleSizeSecondary * 0.5 || innerCircleSize <= 0) {
    growing = !growing;
  }

  // Dibujar el círculo interno en el círculo secundario
  let innerCircleX = circleXSecondary;
  ellipse(innerCircleX, height / 2, innerCircleSize);

  if (phase === 1) {
    // Mostrar las líneas dentro del círculo durante 3 segundos
    if (millis() - timer < 3000) {
      translate(circleX, height / 2);
      stroke(0);
      line(-lineLength / 2, 0, lineLength / 2, 0);
      line(0, -lineLength / 2, 0, lineLength / 2);
    } else {
      // Cambiar a la fase 2 después de 3 segundos
      phase = 2;
      timer = millis();
    }
  } else if (phase === 2) {
    // Girar las líneas durante 3 segundos
    if (millis() - timer < 3000) {
      translate(circleX, height / 2);
      rotate(radians(angle));
      stroke(0);
      line(-lineLength / 2, 0, lineLength / 2, 0);
      line(0, -lineLength / 2, 0, lineLength / 2);
      angle += 1;
    } else {
      // Cambiar a la fase 3 después de 3 segundos
      phase = 3;
      timer = millis();
      angle = 0;
    }
  } else if (phase === 3) {
    // Mostrar el círculo durante 3 segundos
    if (millis() - timer < 3000) {
      noFill();
      stroke(0, 0, 255);
      ellipse(circleX, height / 2, circleSize);
      ellipse(circleXSecondary, height / 2, circleSizeSecondary);
    } else {
      // Reiniciar el proceso después de 3 segundos
      phase = 1;
      timer = millis();
      angle = 0;
    }
  }
}
