import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    homeAnimation();
  }

  public handleFileInput(event) {

  }
}

function homeAnimation() {
  let canvas: HTMLCanvasElement = document.getElementById('home-animation') as HTMLCanvasElement;

  let ctx: CanvasRenderingContext2D = canvas.getContext('2d');

  let width: number = canvas.width;
  let height: number = canvas.height;

  let particles: Particle [] = [];
  let properties = {
    backgroundColor: '#333',
    particleColor: 'white',
    particleRadius: 3,
    particleCount: 60,
    particleMaxVeliocity: 0.5
  };

  class Particle {
    x;
    y;
    veliocityX;
    veliocityY;

    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;

      this.veliocityX = Math.random() * (properties.particleMaxVeliocity * 2) - properties.particleMaxVeliocity;
      this.veliocityY = Math.random() * (properties.particleMaxVeliocity * 2) - properties.particleMaxVeliocity;
    }

    position() {
      this.x + this.veliocityX > width && this.veliocityX > 0 || this.x + this.veliocityX < 0 && this.veliocityX < 0
        ? this.veliocityX *= -1
        : this.veliocityX;

      this.y + this.veliocityY > height && this.veliocityY > 0 || this.y + this.veliocityY < 0 && this.veliocityY < 0
        ? this.veliocityY *= -1
        : this.veliocityY;

      this.x += this.veliocityX;
      this.y += this.veliocityY;
    }

    reDraw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = properties.particleColor;
      ctx.fill();
    }
  }

  function reDrawparticles() {
    for (let i in particles) {
      particles[i].position();
      particles[i].reDraw();
    }
  }

  function reDrawBackground() {
    ctx.fillStyle = properties.backgroundColor;
    ctx.fillRect(0, 0, width, height);
  }

  function drawLines() {
    let x1;
    let y1;
    let x2;
    let y2;
    let length;
    let opacity;

    for (let i in particles) {
      for (let j in particles) {
        x1 = particles[i].x;
        y1 = particles[i].y;

        x2 = particles[j].x;
        y2 = particles[j].y;

        length = Math.sqrt(Math.pow(x2 - x1, 1) + Math.pow(y2 - y1, 2));
      }
    }
  }

  function loop() {
    reDrawBackground();
    reDrawparticles();
    requestAnimationFrame(loop);
  }

  function init() {
    for (let i = 0; i < properties.particleCount; i++) {
      particles.push(new Particle());
    }

    loop();
  }

  init();
}
