import {Injectable} from '@angular/core';

export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({providedIn: 'root'})
export class TodosService {
  public todos: Todo[] = [];

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

   get itemsTodo() : number{
    return this.todos.filter(t => !t.completed).length;
  }

  // @ts-ignore
  get clearCompl() :void{
    this.todos=this.todos.filter(t=>!t.completed)
}

}
