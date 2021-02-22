class DustBin {  
    constructor( x, y){
        var options = {
            'isStatic' : true
        }

        this.bodyb = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.bodyb);
	   /* this.bodyl= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
	    World.add(world, this.bodyl);
	    this.bodyr = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        World.add(world, this.bodyr);*/
        this.width = 50
        this.height = 100 
        this.image = loadImage("dustbin.png")
        
   }
   display(){
       fill("white");
       imageMode(CENTER);
       image(this.image,this.bodyb.position.x, this.bodyb.position.y,this.width, this.height)
      /* rect((this.bodyb.position.x-(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)
       rect((this.bodyb.position.x+(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)
   */  }
}