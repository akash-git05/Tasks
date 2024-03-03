class person{
    constructor(name,age,DOB){
        this.name=name;
        this.age=age;
        this.DOB=DOB;
    }
    display(){
        console.log(
            `Name of the person is ${this.name},
Age of the person is ${this.age},
and the person born in ${this.DOB}`
             );
    }
}
let person1=new person("Akash",19,"05.06.2005");
let person2=new person("vinoth",18,"15.07.2006");
let person3=new person("Deepak",20,"08.03.2004");
person1.display();
console.log();
person2.display();s
console.log();
person3.display();
// console.log();