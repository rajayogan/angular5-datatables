import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {DataSource} from '@angular/cdk/collections';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  studentDetails = {
    studentName: '',
    studentAge: '',
    studentGrade: ''
  }

  displayedColumns = ['Name', 'Age', 'Grade'];
  dataSource = new StudentDataSource(this.student);

  constructor(private student: StudentService, private afs: AngularFirestore) {

  }

  addStudent() {
    this.student.addStudent(this.studentDetails);
  }
}

export class StudentDataSource extends DataSource<any> {

  constructor(private student: StudentService) {
  super()
  }

  connect() {
    return this.student.getStudents();
  }

  disconnect() {

  }
}
