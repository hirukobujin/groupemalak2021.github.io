(function () {

    var COUNT = 300;
    var masthead = document.querySelector('.sky');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = masthead.clientWidth;
    var height = masthead.clientHeight;
    var i = 0;
    var active = false;
  
    function onResize() {
      width = masthead.clientWidth;
      height = masthead.clientHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = '#FFF';
  
      var wasActive = active;
      active = width > 600;
  
      if (!wasActive && active)
        requestAnimFrame(update);
    }
  
    var Snowflake = function () {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
      this.r = 0;
  
      this.reset();
    }
  
    Snowflake.prototype.reset = function() {
      this.x = Math.random() * width;
      this.y = Math.random() * -height;
      this.vy = 1 + Math.random() * 3;
      this.vx = 0.5 - Math.random();
      this.r = 1 + Math.random() * 2;
      this.o = 0.5 + Math.random() * 0.5;
    }
  
    canvas.style.position = 'absolute';
    canvas.style.left = canvas.style.top = '0';
  
    var snowflakes = [], snowflake;
    for (i = 0; i < COUNT; i++) {
      snowflake = new Snowflake();
      snowflake.reset();
      snowflakes.push(snowflake);
    }
  
    function update() {
  
      ctx.clearRect(0, 0, width, height);
  
      if (!active)
        return;
  
      for (i = 0; i < COUNT; i++) {
        snowflake = snowflakes[i];
        snowflake.y += snowflake.vy;
        snowflake.x += snowflake.vx;
  
        ctx.globalAlpha = snowflake.o;
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
  
        if (snowflake.y > height) {
          snowflake.reset();
        }
      }
  
      requestAnimFrame(update);
    }
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  
    onResize();
    window.addEventListener('resize', onResize, false);
  
    masthead.appendChild(canvas);
  })();

var images = [
  '2020 12 31 reveillon chez Marie  (24).JPG',
  '2020 12 31 reveillon chez Marie  (26).JPG',
  '2020 12 31 reveillon chez Marie  (33).JPG',
  '2020 12 31 reveillon chez Marie  (37).JPG',
  '2020 12 31 reveillon chez Marie  (39).JPG',
  '2021 01 01-WA0024.jpg',
  '2021 01 09 (7).JPG',
  '2021 01 09 (7).JPG',
  '2021 01 09 (20).JPG',
  '2021 01 09 (29).JPG',
  '2021 01 23 balade (4).JPG',
  '2021 01 23 balade (7).JPG',
  '2021 01 23 balade (14).JPG',
  '2021 04 15 sceaux (1).JPG',
  '2021 04 15 sceaux (22).JPG',
  '2021 04 28 (19).JPG',
  '2021 04 28 (22).JPG',
  '2021 04 28 WA0001 (1).jpg',
  '2021 04 28 WA0001 (2).jpg',
  '2021 04 28 WA0002 (3).jpg',
  '2021 10 15.JPG',
  '2021 10 15.MP4',
  '2021 12 31 (11).JPG',
  '2021 12 31 (19).JPG',
  '2021 12 31 (26).JPG',
  '2021 12 31 (41).JPG',
  '2021 12 31 (88).JPG',
  '2021 12 31 (124).JPG',
  '2022 0 02 (1).JPG',
  '2022 0 02 (2).JPG',
  '2022 0 02 (3).JPG'
];

var index = 0;
var buttons = document.querySelectorAll('button');
var image = document.querySelector('img');
function prevFn () {
  index--;
  index = index < 0 ? images.length - 1 : index;
  image.setAttribute('src', images[index]);
}
function nextFn () {
  index++;
  index = index > images.length - 1 ? 0 : index;
  image.setAttribute('src', images[index]);
}
buttons[0].addEventListener('click', prevFn);
buttons[1].addEventListener('click', nextFn);
  
  
setInterval(nextFn, 3000);
