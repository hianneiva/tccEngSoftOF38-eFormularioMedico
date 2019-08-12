import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from '../model/constants';

@Component({
  selector: 'app-pacient-input',
  templateUrl: './pacient-input.page.html',
  styleUrls: ['./pacient-input.page.scss']
})
export class PacientInputPage implements OnInit {

  public patientForm: FormGroup;
  public sexEnum = Constants.sexes;
  public msEnum = Constants.maritalStatuses;

  constructor(private formBuilder: FormBuilder) {
    this.patientForm = this.formBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      age: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      sex: ['', Validators.required],
      maritalStatus: ['', Validators.required],
    });
  }

  ngOnInit() { }

  logForm(){
    if(this.patientForm.invalid){
      console.log(this.patientForm.controls);
    }
    console.log(this.patientForm.value);
  }

}
