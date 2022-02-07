import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private myClient:HttpClient) { }

//myClinet:Cli
  getAllStudents(){    
    return this.myClient.get('http://localhost:5000/students')
  }
  getStudentById(id){    
    return this.myClient.get('http://localhost:5000/students/'+id)
  }
  updateStudentById(id,student){    
    return this.myClient.put('http://localhost:5000/students/'+id,student)
  }

  deleteStudentById(id){
    return this.myClient.delete('http://localhost:5000/students/'+id)
  }
}
