const Enviroment = function(c, ctx){
  this.c = c;
  this.ctx = ctx;
  this.bgPos = 0;
  this.fgPos = 0;
  this.bgSpeed = 1;
  this.bgWidth = 900;
  this.bgheight = 509
this.bgImg = document.getElementById('bg');
this.bgImage = document.getElementById('world');
}
Enviroment.prototype.update = function() {
  this.bgPos -= this.bgSpeed;
  if(this.bgPos < -this.bgWidth)
  this.bgPos = 0;
};
Enviroment.prototype.render = function(){
  for(let i = 0; i <= this.c.width/this.bgWidth+1; i++)
  this.ctx.drawImage(this.bgImg, this.bgPos+i*this.bgWidth, 0);
  this.ctx.drawImage(this.bgImage,( this.bgWidth/2), (this.bgheight/2));
};
