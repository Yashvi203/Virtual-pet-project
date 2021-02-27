var dog,sadDog,happyDog;
var feed;
var add;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj = new Food(700,320,70,70);

}

function draw() {
  background(46,139,87);

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + "PM", 350,30);
  }else if(lastFed==0){
    text("Last Feed : 12 AM", 350,30);
  }else{
    text("Last Feed : "+ lastFed +"AM", 350,30);
  }

  drawSprites();
}

//function to read food Stock
function feedDog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
    }else{
      foodObj.updateFoodStock(foodObj.getFoodStock()-1);
    }
}

//function to update food stock and last fed time
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
    //Food:foodS
  })
}

//function to add food in stock



