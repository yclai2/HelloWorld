import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Big title";

  user:User

  constructor(){
    this.user =  new User();
    this.user.name = "Jason Bourne";
    this.user.age = 30;
    this.user.weight = 70;
    this.user.height = 170;
  }

  onCheckAge(){
    //if (this.user.age >=100){
    if (this.user.isOld()){
      alert("Old");
    }else{
      alert("Not old");
    }
  }

  onCheckBMI(){
    alert ("The BMI is " +this.user.getBMI());
  }

}
