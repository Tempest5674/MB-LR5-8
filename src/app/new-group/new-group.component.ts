import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GroupsDataService } from '../services/groups-data.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {

  showForm = false;

  constructor(private groupService: GroupsDataService) { }

  ngOnInit(): void {
  }

  onSubmit(myForm){
    const fields = myForm.form.controls;
    this.showForm = false;
    this.groupService.addBook({
      name:fields.name.value,
      genre:fields.genre.value,
      publisher:fields.publisher.value
    });
  }
}
