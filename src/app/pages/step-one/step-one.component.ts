import { Component } from '@angular/core';
import { StepService } from '../../services/step-service.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css'],
})
export class StepOneComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  submitted: boolean = false;

  constructor(private stepService: StepService) {}

  onSubmit(form: any) {
    this.submitted = true;

    if (form.valid) {
      this.clearForm();
      this.submitted = false;
      this.stepService.goToNextStep();
    }
  }

  clearForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
  }
}
