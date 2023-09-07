let letras = []; // Arreglo para almacenar las letras "D"

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    background(0);
    
    // Dibuja todas las letras "D" en el arreglo
    for (let letra of letras) {
        let fontSize = 200;
        fill(255);
        textSize(fontSize);
        textAlign(CENTER, CENTER);
        text('D', letra.x, letra.y);
        fill(255, 150);
        text('D', letra.x + 30, letra.y);
    }
}

function mousePressed() {
    if (mouseButton === LEFT) {
        // Agrega una nueva letra "D" en el lugar del clic izquierdo
        letras.push({ x: mouseX, y: mouseY });
        redraw();
    } else if (mouseButton === RIGHT && letras.length > 0) {
        // Elimina la última letra "D" creada con el clic derecho
        letras.pop();
        redraw();
    }
}
