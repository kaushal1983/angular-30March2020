import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  formdata;
  title;
  desc;
  startDate;
  endDate;
  status;
  todoList =[
{'title':'title 1', 'desc':'description 1', 'start': '13/02/2020', 'end': '13/02/2020', 'status': 'Done'},

{'title':'title 2', 'desc':'description 2', 'start': '13/02/2020', 'end': '20/02/2020', 'status': 'WIP'}

];

ngOnInit() {
     
      this.formdata = new FormGroup({
         emailid: new FormControl("angular@gmail.com"),
         passwd: new FormControl("abcd1234")
      });
   }
   onClickSubmit(data) {this.emailid = data.emailid;}
}
