class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
        if(radius===""){
            this.raduis=1.0;
        }
        if(color===""){
            this.color="red";
        }
    }
    getRadius(){
        return console.log(this.radius);
    }
    setRadius(radius){
        this.radius=radius;
    }
    getColor(){
        return console.log(this.color);
    }
    setColor(color){
        this.color=color;
    }
    toString(){
        console.log(`circle[radius=${this.radius},color=${this.color}]`);
    }
    getArea(){
      let pi=3.14159265359;
      let result=pi*(this.radius*this.radius);
      return console.log(result);
        
    }
    getCircumference(){
        let pi=3.14159265359;
        let r1=2*pi*this.radius;
        return console.log(r1);
    }
}
let cir= new circle(2.5,"Blue");
cir.getColor();
cir.getRadius();
cir.getArea();
cir.getCircumference();
cir.toString();
 console.log();
let cir1=new circle();
cir1.setRadius(3.4);
cir1.setColor("black");
cir1.getRadius();
cir1.getColor();
cir1.toString();