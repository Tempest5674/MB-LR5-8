import { Component, OnInit } from '@angular/core';
import { GroupsDataService } from '../services/groups-data.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  books: any[];

  constructor(private groupService: GroupsDataService){
    groupService.getBooks().subscribe(
      (books)=>this.books = books
    );
  }
  ngOnInit(){
  }

}
