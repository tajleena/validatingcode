import { Component,OnInit} from '@angular/core';
import {Student} from './student.modal';
import{FormBuilder, FormGroup, Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
student:Student=new Student();
  studentFormGroup:FormGroup;
  
 
  

  constructor(private formBuilder:FormBuilder)
  {

  }
  ngOnInit()
  {
    this.studentFormGroup=this.formBuilder.group(
      {
       
        address1:this.formBuilder.group({street:['',Validators.required],area:['',Validators.required],postalCode:['',Validators.required]}),
        country:['',Validators.required],
        state:['guj',Validators.required],        
        hobbies:this.formBuilder.array([]),
      }
    );
    this.studentFormGroup.controls.state.patchValue('raj');
    
    
   
    
  }
  submit()
  {
    console.log(this.studentFormGroup.value);
    // this.studentFormGroup.controls.state.patchValue('guj');

  }
      addHobby()
    {
      const hob=this.studentFormGroup.controls.hobbies as FormArray;
      hob.push(this.formBuilder.group({
        
        hobbyName:''}));
    }
}
