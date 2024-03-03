//creating a movie class
class movie{
    constructor( title,studio,rating){
        this.title = title;
        this.studio =studio;
        this.rating = rating;
        if(rating===null){
            this.rating="PG";
        }
            

    }
     getPG(){ 
        let m=[this.title,this.studio,this.rating];
         let result=[];
        if(m[2].split('')[0]==='P'){
            result.push(this.title,this.studio,this.rating);
            return console.log(result);
        }
         
    
        }
}
    
    
let movies=[];
movies.push(new movie("django","redgiantproductions","PG"));
movies.push(new movie("KillBill","Eon Production","SG"));
movies.push(new movie("fightclub","columbia Production","SG"));
movies.push(new movie("conjuring","columbia Production","PG"));
movies.push(new movie("CasinoRoyale","Eon Production","PG13"));
for(let i=0;i<movies.length;i++){
   movies[i].getPG();
    }