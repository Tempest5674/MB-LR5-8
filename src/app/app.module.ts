import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './my components/my.component';
import { GroupComponent } from './group/group.component';
import { FormsModule } from '@angular/forms';
import { NewGroupComponent } from './new-group/new-group.component';
import { GroupListComponent } from './group-list/group-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'books', component: GroupListComponent},
  {path: 'students/:bookId', component:StudentListComponent},
  {path: '', redirectTo: 'books', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent, MyComponent, GroupComponent, NewGroupComponent, GroupListComponent, StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
