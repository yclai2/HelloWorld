export class User {
    name: string;
    age: number;
    height: number;
    weight: number;
    password:string;

    constructor(name:string, age:number, password:string, height:number, weight:number){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.password = password;

    }

    isOld():boolean{
        if(this.age >=100)
            return true;
        else
            return false;
        
    }

    getBMI():number{
        //let stuff:number = 12;
        //stuff = 13;

        return this.weight/((this.height/100)*(this.height/100));
    }

    isHealthy():boolean {
        if(this.getBMI() >= 18.5 && this.getBMI() <=24.9)
          return true;
        else
          return false;

    }
}
/*

*/