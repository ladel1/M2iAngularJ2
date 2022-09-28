import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  userForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
  ) {
    this.userForm = this.formBuilder.group({
        nom:['',Validators.required],
        description:['',]
    });
   }
   checkField(field:string):boolean{
    return this.userForm.controls[field].invalid && (
           this.userForm.controls[field].dirty || 
           this.userForm.controls[field].touched
      );
   }

   fieldInvalide():boolean{
    return this.userForm.controls["nom"].invalid && (
      this.userForm.controls["nom"].dirty || 
      this.userForm.controls["nom"].touched
 );
   }

   ajouter(){ // ajouter dans api
    console.log(this.userForm.value)    
   }

  ngOnInit(): void {
  }

}
