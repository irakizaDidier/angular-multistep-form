import { Component } from '@angular/core';
import { StepService } from '../../services/step-service.service';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css'],
})
export class AsideNavComponent {
  currentStep: number | undefined;

  constructor(public stepService: StepService) {
    this.stepService.currentStep$.subscribe((step) => {
      this.currentStep = step;
    });
  }

  goToStep(step: number) {
    this.stepService.goToStep(step);
  }
}
