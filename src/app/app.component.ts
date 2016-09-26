import { Component } from '@angular/core';
import { User } from './user';

const USERS = [
  new User("Jack", 22, "pasword", 170,70),
   new User("Jason", 23, "pasword", 180,80),
   new User("Jenet", 25, "pasword", 190,90),
    new User("Ancient", 125, "pasword", 190,900)
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Big title";
  selectedUser:User;
  users:Array<User>;


  constructor(){
    this.selectedUser = USERS[0];
    this.users = USERS;
  }

  onCheckAge(){
    //if (this.user.age >=100){
    if (this.selectedUser.isOld()){
      alert("Old");
    }else{
      alert("Not old");
    }
  }

  onCheckBMI(){
    alert ("The BMI is " +this.selectedUser.getBMI());
  }

  deleteUser(index){
    //delete this.users[index];
    this.users.splice(index,1);
  }

  addUser(){
    let tempUser:any = {};
    tempUser.name = prompt("name")
    tempUser.age = prompt("age")
    tempUser.age = Number(prompt("age"))
    tempUser.weight = Number(prompt("weight"))
    tempUser.height = Number(prompt("height"))

    this.users.push( new User(
      tempUser.name,
      tempUser.age,
      tempUser.password,
      tempUser.weight,
      tempUser.height
    ))
  }

}
