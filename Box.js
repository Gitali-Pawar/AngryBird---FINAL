class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("box.png");
  }
 display(){
 super.display()

 push()
imageMode(CENTER)
 image(this.image ,this.body.position.x , this.body.position.y , 100 ,80);
 pop()
 }

};
