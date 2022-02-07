import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  id;
  student;
  constructor(
    private studentService: StudentsService,
    private activetedRouter: ActivatedRoute,
    private router:Router
  ) {
    this.id = this.activetedRouter.snapshot.paramMap.get('id');
    console.log(this.id);
    this.studentService.getStudentById(this.id).subscribe(
      (res) => {
        this.student = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
  }
  back(){
    this.router.navigate(['/students']); // navigate to other page
  }
  update(){
    this.studentService.updateStudentById(this.id,this.student).subscribe(
      (res) => {
        console.log(res);
        
      },
      (err) => {
        console.log(err);
      }
    );
    this.back()
  }
}
