import { Component, OnInit } from '@angular/core';
import { StepService } from '../../services/step-service.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css'],
})
export class StepOneComponent implements OnInit {
  name: string = '';
  email: string = '';
  phone: string = '';
  submitted: boolean = false;

  constructor(private stepService: StepService) {}

  ngOnInit() {
    this.stepService.stepOneData$.subscribe((data) => {
      this.name = data.name;
      this.email = data.email;
      this.phone = data.phone;
    });
  }

  onSubmit(form: any) {
    this.submitted = true;

    if (form.valid) {
      const data = { name: this.name, email: this.email, phone: this.phone };
      this.stepService.setStepOneData(data);
      this.submitted = false;
      this.stepService.goToNextStep();
    }
  }
}
