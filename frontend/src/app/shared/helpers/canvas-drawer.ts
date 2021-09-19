export function initCanvas() {
  const canvas: HTMLCanvasElement = document.querySelector('#drawer') as HTMLCanvasElement;

  const mouse = {
    x: 0, y: 0,                        // coordinates
    lastX: 0, lastY: 0,                // last frames mouse position 
    b1: false, b2: false, b3: false,   // buttons
    buttonNames: ["b1", "b2", "b3"],   // named buttons
  }

  const ctx = canvas.getContext('2d');

  canvas.width = 400;
  canvas.height = 400;

  let painting: boolean = false;

  function startPosition(event) {
    painting = true;
    draw(event);
  }

  function finishPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(event) {
    if (!painting) return;

    var bounds = canvas.getBoundingClientRect();
    mouse.x = event.pageX - bounds.left - scrollX;
    mouse.y = event.pageY - bounds.top - scrollY;

    // first normalize the mouse coordinates from 0 to 1 (0,0) top left
    // off canvas and (1,1) bottom right by dividing by the bounds width and height
    mouse.x /= bounds.width;
    mouse.y /= bounds.height;

    // then scale to canvas coordinates by multiplying the normalized coords with the canvas resolution

    mouse.x *= canvas.width;
    mouse.y *= canvas.height;

    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);

    mouse.lastX = mouse.x;
    mouse.lastY = mouse.y;
  }

  function clear() {
    ctx.clearRect(0, 0, 400, 400);
  }

  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', finishPosition);
  canvas.addEventListener('mousemove', draw);

  const clearBtn: HTMLButtonElement = document.getElementById('clearBtn') as HTMLButtonElement;
  clearBtn.addEventListener('click', clear);
}
