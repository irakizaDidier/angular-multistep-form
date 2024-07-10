import { Component } from '@angular/core';
import { StepService } from './services/step-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-multisteps-form';
  currentStep: number | undefined;

  constructor(private stepService: StepService) {
    this.stepService.currentStep$.subscribe(
      (step) => (this.currentStep = step)
    );
  }

  goToNextStep() {
    this.stepService.goToNextStep();
  }

  goToPreviousStep() {
    this.stepService.goToPreviousStep();
  }

  goToStep(step: number) {
    this.stepService.goToStep(step);
  }
}
