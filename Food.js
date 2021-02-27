class Food {
    constructor(x, y){
        super(x,y,50,50);
        this.image = loadImage("Images/Milk.png");
        this.Visiblity = 255;
        var foodObject;
        var foodStock;
        var getFoodStock;
        var updateFoodStock;
        var deductFood;
        var lastFed;
      }

      display(){
      var x=80,y=100;

      imageMode(CENTER);
      image(this.image,720,220,70,70);

      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          this.image(this.image,x,y,50,50);
          x=x+30;
        }

      }
  }
}