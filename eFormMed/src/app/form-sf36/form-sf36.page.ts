import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Patient } from '../model/pacient';

@Component({
  selector: 'app-form-sf36',
  templateUrl: './form-sf36.page.html',
  styleUrls: ['./form-sf36.page.scss'],
})
export class FormSF36Page implements OnInit {

  private patientData: Patient;

  constructor(private router: Router) { }

  ngOnInit() {
    this.patientData = this.router.getCurrentNavigation().extras.state.patient;
    if(this.patientData === undefined || this.patientData === null){
      console.log('ERROR: Patient Data is not present!');
    }
    else{
      console.log('Patient Data recorded with success.');
    }
  }

  goBack(){
    const navExtra: NavigationExtras = { state: { patient: this.patientData }}
    this.router.navigate(['form-list'], navExtra);
  }

}
