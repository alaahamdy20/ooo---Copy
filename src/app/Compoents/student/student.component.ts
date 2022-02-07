import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'tr[app-student]',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student;
  constructor(private studentService:StudentsService,private router:Router ){}

  ngOnInit(): void {
  }

  delete(){

    let res = confirm("Are You Sure Delete This Student")
    console.log(res);
    if(res){
      this.studentService.deleteStudentById(this.student.id).subscribe(
        (res) => {
          this.student = res;
        },
        (err) => {
          console.log(err);
        }
      );
    }
    

    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

}
