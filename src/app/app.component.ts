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
{'title':'title 1', 'desc':'description 1', 'c': '13/02/2020', 'endDate': '13/02/2020', 'status': 'Done'},

{'title':'title 2', 'desc':'description 2', 'startDate': '13/02/2020', 'endDate': '20/02/2020', 'status': 'WIP'}

];

ngOnInit() {
     
      this.formdata = new FormGroup({
         title: new FormControl(""),
         desc: new FormControl(""),
         startDate: new FormControl(""),
         endDate: new FormControl("")
      });
   }
   onClickSubmit(data) {
     this.todoList.push(data)
     
     }
}
