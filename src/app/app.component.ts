import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { ToDo, TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 // Services
 userService = inject(UserService);
 todoService = inject(TodoService);

 // Signals  
 users = this.userService.members;
 isLoading = this.todoService.isLoading;
 currentMember = this.todoService.currentMember;
 todosForMember = this.todoService.filteredToDos;
 errorMessage = this.todoService.errorMessage;

 // Actions
 onFilter(ele:EventTarget | null) {
   this.todoService.filterToDos((ele as HTMLInputElement).checked)
 }

 onSelected(ele:EventTarget | null) {
   this.todoService.getToDosForMember(Number((ele as HTMLSelectElement).value));
 }

 onChangeStatus(task: ToDo, ele: EventTarget | null) {
   this.todoService.changeStatus(task, (ele as HTMLInputElement).checked);
 }

}