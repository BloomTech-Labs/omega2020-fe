import React from 'react';

var firework;
var gravity;

export function Setup() {
    createCanvas(400, 300);
    gravity = createVector(0, 0.2);
    stroke(255);
    strokeWeight(4);
    firework = new Particle(random(width), 150);

}

export function Draw() {
    background(51);
    firework.applyForce(gravity)
    firework.update();
    firework.show();
}