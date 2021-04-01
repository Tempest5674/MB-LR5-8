import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsDataService {

  private books = [
    {
      name:"testName1",
      genre:"testGenre1",
      publisher:"testPublisher1"
    },
    {
      name:"testName2",
      genre:"testGenre2",
      publisher:"testPublisher2"
    }
  ];

  private students = [
    {name:'testTome1', bookName:"testName1"},
    {name:'testTome2', bookName:"testName1"},
    {name:'testTome3', bookName:"testName1"},
    {name:'testTome1', bookName:"testName2"},
    {name:'testTome2', bookName:"testName2"},
    {name:'testTome3', bookName:"testName2"},
  ];

  getStudents(bookName: string): Observable<any[]>{
    return of(this.students.filter( elem=>{
      return elem.bookName===bookName;
    }));
  }
  constructor() { }

  getBooks():Observable<any[]>{
    return of(this.books);
  }

  addBook(book) {
    this.books.push(book);
  }

  deleteBook(index){
    this.books.splice(index,1);
  }
}
