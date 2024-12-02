function setup() {
  // Set up the canvas
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS); // Use radians for rotation
}

function draw() {
  // Clear background and set origin to center
  background(255);
  translate(width / 2, height / 2);

  // Get current time
  let hr = hour();
  let min = minute();
  let sec = second();

  // Map time values to angles
  let secondAngle = map(sec, 0, 60, 0, TWO_PI);
  let minuteAngle = map(min, 0, 60, 0, TWO_PI);
  let hourAngle = map(hr % 12, 0, 12, 0, TWO_PI);

  // Draw clock face
  noFill();
  stroke(200);
  strokeWeight(8);
  ellipse(0, 0, 300, 300); // Outer circle for aesthetics

  // Seconds hand
  stroke(255, 0, 0);
  strokeWeight(2);
  let secX = cos(secondAngle - HALF_PI) * 120;
  let secY = sin(secondAngle - HALF_PI) * 120;
  line(0, 0, secX, secY);

  // Minutes hand
  stroke(0, 255, 0);
  strokeWeight(4);
  let minX = cos(minuteAngle - HALF_PI) * 100;
  let minY = sin(minuteAngle - HALF_PI) * 100;
  line(0, 0, minX, minY);

  // Hours hand
  stroke(0, 0, 255);
  strokeWeight(6);
  let hrX = cos(hourAngle - HALF_PI) * 70;
  let hrY = sin(hourAngle - HALF_PI) * 70;
  line(0, 0, hrX, hrY);

  // Draw center point
  fill(0);
  noStroke();
  ellipse(0, 0, 8, 8);

  // Draw hour ticks
  stroke(0);
  strokeWeight(2);
  for (let i = 0; i < 12; i++) {
      let angle = map(i, 0, 12, 0, TWO_PI);
      let x1 = cos(angle - HALF_PI) * 140;
      let y1 = sin(angle - HALF_PI) * 140;
      let x2 = cos(angle - HALF_PI) * 130;
      let y2 = sin(angle - HALF_PI) * 130;
      line(x1, y1, x2, y2);
  }
}
