import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Constants } from '../model/constants';
import { Patient } from '../model/pacient';

@Component({
  selector: 'app-pacient-input',
  templateUrl: './pacient-input.page.html',
  styleUrls: ['./pacient-input.page.scss']
})
export class PacientInputPage implements OnInit {

  public patientForm: FormGroup;
  public sexEnum = Constants.sexes;
  public msEnum = Constants.maritalStatuses;
  private alertData = {
    header: 'Erro!',
    subHeader: 'Os dado(s) a seguir são inválidos:',
    message: '',
    buttons: ['OK']
  };

  constructor(private router: Router, private formBuilder: FormBuilder, public alertController: AlertController) {
    this.patientForm = this.formBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      age: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      sex: ['', Validators.required],
      maritalStatus: ['', Validators.required],
    });
  }

  ngOnInit() { }

  // For debug purposes only
  logForm(){
    if(this.patientForm.invalid){
      console.log(this.patientForm.controls);
    }
    console.log(this.patientForm.value);
  }

  validateForm(){
    let warning: string[] = [];

    //this.logForm();

    if(this.patientForm.controls.name.status === 'INVALID'){
      warning.push('Nome vazio.');
    }

    if(this.patientForm.controls.id.status === 'INVALID'){
      warning.push('Matrícula vazia.');
    }
    
    if(this.patientForm.controls.age.status === 'INVALID'){
      warning.push('Idade vazia ou inválida.');
    }

    if(this.patientForm.controls.sex.status === 'INVALID'){
      warning.push('Sexo não selecionado.');
    }
    
    if(this.patientForm.controls.maritalStatus.status === 'INVALID'){
      warning.push('Estado civil não selecionado.');
    }

    if(warning.length > 0){
      warning.forEach(err => {
        this.alertData.message += (err + '<br>');
      });
      this.presentAlert();
    }
    else{
      let currentPatient = new Patient();
      currentPatient.name = this.patientForm.value.name;
      currentPatient.id = this.patientForm.value.id;
      currentPatient.age = this.patientForm.value.age;
      currentPatient.sex = this.patientForm.value.sex;
      currentPatient.maritalStatus = this.patientForm.value.maritalStatus;

      const navExtra: NavigationExtras = { state: { patient: currentPatient}}
      this.router.navigate(['form-list'], navExtra);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create(this.alertData);

    await alert.present();
  }

}
