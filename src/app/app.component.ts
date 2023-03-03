import { Component } from '@angular/core';
import { todo } from './model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  taskName: any;
  model =  new todo();
  idCounter:number = 0
  updatedObj:any;
  isEdit:boolean = false;
  isEmpty!:boolean;
  taskList = [
  { id: 1, name: 'task 1' },
  { id: 2, name: 'task 2' },
  { id: 3, name: 'task 3' },
];

constructor(){}

addTodo(){
  this.model.name = this.taskName;
  this.model.id = this.idCounter;
  console.log(this.model);
  this.taskList.push(this.model);
  this.idCounter++;

}

empty(event:any){
  if(event.target.value.trim() == ''){
    this.isEmpty = true;
  }else{
    this.isEmpty=false;
  }
  console.log(event.target.value)
}

deleteTodo(index:any){
  console.log(index); 
  this.taskList.splice(index,1); 
}

editTodo(task:any){
  this.taskName = task.name;
  console.log(task);
  const updatedTask = new todo()
  updatedTask.name = task.name
  updatedTask.id = task.id
  this.updatedObj= updatedTask;
  this.isEdit = true;
}

updateTask(){
  console.log(this.updatedObj.id,this.updatedObj.name);
  const index = this.taskList.findIndex(task => task.id === this.updatedObj.id);
  if (index !== -1) {
    const updatedTask = new todo();
    updatedTask.id = this.updatedObj.id;
    updatedTask.name = this.taskName;
    this.taskList[index] = updatedTask;
  }
  this.isEdit = false;
}

ngOnInit(){
  console.log(this.taskList);
  this.isEmpty=true;
}

}
