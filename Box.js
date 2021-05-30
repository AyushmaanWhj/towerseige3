class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    rectMode(CENTER)
    rect(x,y,width,height)
    this.body.visible=false
  }
  display(){
    if(this.body.speed<4){
      super.display()
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 2;
      tint(255,this.Visiblity);
      
      pop();
    }




  }
};
