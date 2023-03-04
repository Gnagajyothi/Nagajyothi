
import { Component } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  
newuser: any = "";
password: any = "";
listofusers: any[] = [
  "jyo",
   "pavani", 
   "bhagi",
   "nag",
   "phani",
   "vanaja",
   "pinky"
   ];

adduser() {
  // this.listofusers.push(this.newuser)
  this.listofusers.unshift(this.newuser)
  this.listofusers.unshift(this.password)
}
}





