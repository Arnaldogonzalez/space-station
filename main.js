var arr = [];
window.onload= function(){
  const c = document.getElementById('canvas');
  const ctx = c.getContext('2d');
  function result(){
    $.ajax({
          url: "http://api.open-notify.org/astros.json",
          method: 'GET',
          success: function(response) {
            console.log(response);
            arr = response.people.map(value=>value.name);
          }
      });
  }
  result();
}

/**
 * Provides requestAnimationFrame in a cross browser way.
 * @author paulirish / http://paulirish.com/
 * https://gist.github.com/838785
 */
if ( !window.requestAnimationFrame ) {
    window.requestAnimationFrame = ( function() {

        return window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

            window.setTimeout( callback, 1000 / 60 );

        };

    } )();
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;

var circle = function(color, r) {
    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.arc(0, 0, r, 0, 2 * Math.PI, true);
    ctx.closePath();

    ctx.fill();
}

var i = 0;
var bg = document.getElementById('bg');
var planet = document.getElementById('planet');
var img = document.getElementById('station');
var names = document.getElementById('names');
var redraw = function() {
    ctx.save();
    // paint bg
    ctx.drawImage(bg, 0, 0, 1500, 700);
    // ctx.fillStyle = 'black';
    // ctx.fillRect(0, 0, w, h);
    // set origin to center
    ctx.translate(1400 / 2, 700 / 2);
    // draw planet
    ctx.drawImage(planet, -100, -100, 200, 200);
    // circle('yellow', 20);
    // rotate + move along x
    ctx.rotate(i / 350);
    ctx.translate(20, 20);
    // draw station
    ctx.drawImage(station, 50, 50, 90, 90);
    // circle('green', 10);

    for(var j=0;j<arr.length;j++){
        ctx.font = "15px Arial";
        ctx.fillStyle = "#FF0000";
        ctx.fillText(arr[j],100,j*25);
    }

    ctx.restore();

    i++;

    window.requestAnimationFrame(redraw);
};

window.requestAnimationFrame(redraw);
