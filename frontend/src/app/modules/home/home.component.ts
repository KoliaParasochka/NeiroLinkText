import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectFileDialogComponent } from '../../shared/select-file-dialog/select-file-dialog.component';
import { WriteSymbolDialogComponent } from '../../shared/write-symbol-dialog/write-symbol-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  public ngOnInit(): void {
    homeAnimation();
  }

  public handleFileInput(event) {

  }

  public onUploadImgBtnClick(): void {
    this.dialog.open(SelectFileDialogComponent, {
      panelClass: 'upload-file-custom',
      disableClose: true
    });
  }

  public onWriteSymbolBtnClick(): void {
    this.dialog.open(WriteSymbolDialogComponent, { disableClose: true });
  }
}

function homeAnimation() {
  let canvas: HTMLCanvasElement = document.getElementById('home-animation') as HTMLCanvasElement;

  let ctx: CanvasRenderingContext2D = canvas.getContext('2d');

  let width: number = canvas.width;
  let height: number = canvas.height;

  let particles: Particle [] = [];
  let properties = {
    backgroundColor: 'white',
    particleColor: '#3f51b5',
    particleRadius: 3,
    particleCount: 30,
    particleMaxVeliocity: 0.5,
    lineLength: 150,
    particleLife: 6
  };

  class Particle {
    x;
    y;
    veliocityX;
    veliocityY;
    life;

    constructor() {
      this.initParticle();
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

    reCalculateLife() {
      if (this.life < 1) {
        this.initParticle();
      }

      this.life--;
    }

    initParticle() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;

      this.veliocityX = Math.random() * (properties.particleMaxVeliocity * 2) - properties.particleMaxVeliocity;
      this.veliocityY = Math.random() * (properties.particleMaxVeliocity * 2) - properties.particleMaxVeliocity;

      this.life = Math.random() * properties.particleLife * 90;
    }
  }

  function reDrawParticles() {
    for (let i in particles) {
      //particles[i].reCalculateLife();
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

        length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        if (length < properties.lineLength) {
          opacity = 1 - length / properties.lineLength;

          ctx.lineWidth = 0.5;
          ctx.strokeStyle = 'rgb(63, 81, 181,' + opacity + '';

          ctx.beginPath();

          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);

          ctx.closePath();
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    reDrawBackground();
    reDrawParticles();
    drawLines();
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
