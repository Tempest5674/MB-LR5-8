import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GroupsDataService } from '../services/groups-data.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() book;
  @Input() bookIndex;
  showInfo = false;

  constructor(private groupService: GroupsDataService) { }

  ngOnInit(){}


  changeGenre(genr: string){
  }
  delBook(){
    this.groupService.deleteBook(this.bookIndex);
  }
}
