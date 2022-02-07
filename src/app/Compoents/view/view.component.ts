import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  id;
  student;
  constructor(
    private studentService: StudentsService,
    private activetedRouter: ActivatedRoute,
    private router:Router
  ) {
    this.id = this.activetedRouter.snapshot.paramMap.get('id');
    console.log(this.id);
    this.studentService.getStudentById(this.id).subscribe((res) => {this.student = res},(err) => {console.log(err);
    });
  }
  back(){
    this.router.navigate(['/students']); // navigate to other page
  }
  ngOnInit(): void {}
}
