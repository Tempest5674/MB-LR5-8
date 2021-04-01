import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsDataService } from '../services/groups-data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: any[];

  constructor(private groupService: GroupsDataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.getStudents(params.bookId)
    );
  }
  getStudents(bookName: string) {
    const n = bookName.toString();
    this.groupService.getStudents(n).subscribe(
      (students) => {
        this.students = students;
      }
    );
  }
}
