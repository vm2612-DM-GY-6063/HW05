let shadows = [];
let maxRadius = 100;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    // Initialize random shadow positions
    for (let i = 0; i < 50; i++) {
        shadows.push({
            x: random(width),
            y: random(height),
            radius: random(10, 30),
            growthRate: random(0.1, 0.5),
        });
    }
}

function draw() {
    background(0, 50); // Slightly transparent black background for blending effect

    // Draw and update shadows
    for (let shadow of shadows) {
        // Draw shadow
        fill(255, 150);
        ellipse(shadow.x, shadow.y, shadow.radius * 2);

        // Update shadow radius
        shadow.radius += shadow.growthRate;

        // Limit maximum radius
        if (shadow.radius > maxRadius) {
            shadow.radius = random(10, 30);
            shadow.x = random(width);
            shadow.y = random(height);
        }
    }

    // Interactive shrinking
    if (mouseIsPressed) {
        for (let shadow of shadows) {
            let distance = dist(mouseX, mouseY, shadow.x, shadow.y);
            if (distance < 100) {
                shadow.radius = max(10, shadow.radius - 2);
            }
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
