class uberCab{
    constructor(km,type){
        this.km=km;
        this.type=type;
    }
    calCulatePrice(){
        let km1 = 500;
        let km2= 1000;
        let price=0;
        if(this.type==="auto"){
         price =km1*this.km;
         console.log(price);
        }
        else if(this.type==="car"){
         price=km2*this.km;
         console.log(price);
        }
        else{
            console.log(" Sorry this is not a vehicle type in  our uber");
        }
        
    }
    
    
} 
let cab1=new uberCab(2,"lorry");
cab1.calCulatePrice();
