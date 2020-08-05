function setup() {
    
    createCanvas(800, 800,WEBGL);
    }
     
    function draw() {
        background("red");
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cylinder(40, 200,);
  fill("blue")
    
  translate(-100,-200);
  stroke('black');
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  ellipsoid(50, 50, 40, 8);


    }