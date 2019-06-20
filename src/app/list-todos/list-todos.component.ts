import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos :Todo[];
  message: String;
  /*
  [
    new Todo(1,'Learn to Dance',false , new Date()),
    new Todo(2,'Learn to Sing',false , new Date()),
    new Todo(3,'asdasdasd',false , new Date()),
    new Todo(4,'asfasfafsaf',false , new Date())
    

];
*/
  constructor(
    private todoService:TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
   
  }


  refreshTodos()
  {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        this.todos = response;
      }
     );
  }
  deleteTodo(id) {
    console.log('Delete Todo '+id);
   

    this.todoService.updateTodo('in28minutes',id).subscribe
    (
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} successful`;
        this.refreshTodos();
   
      }
    );

   
  }


  updateTodo(id) {
    console.log('Update Todo '+id);

    this.router.navigate(['todos',id]);
    
  }

  addTodo()
  {
    this.router.navigate(['todos',-1])
  }

}

export class Todo{
  constructor(public id:number , 
    public description: string , 
    public done :Boolean,
    public targetDate: Date){}

}
