import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  onSubmit(form: any) {
    this.submitted = true;

    if (form.valid) {
      this.clearForm();
      this.submitted = false;
      this.router.navigate(['step-two'], {
        relativeTo: this.router.routerState.root.firstChild,
      });
    }
  }
  clearForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
  }
}
