import { Component } from '@angular/core';
import { StepService } from '../../services/step-service.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css'],
})
export class StepTwoComponent {
  selectedPlan: string | null = null;
  isMonthly: boolean = true;
  showError: boolean = false;

  constructor(private stepService: StepService) {
    this.stepService.billingCycle$.subscribe((isMonthly) => {
      this.isMonthly = isMonthly;
    });
  }

  selectPlan(plan: string) {
    this.selectedPlan = plan;
    this.stepService.setSelectedPlan(plan);
    this.showError = false;
  }

  toggleBillingCycle(event: Event) {
    this.isMonthly = (event.target as HTMLInputElement).checked;
    this.stepService.setBillingCycle(this.isMonthly);
  }

  nextStep() {
    if (!this.selectedPlan) {
      this.showError = true;
      return;
    }
    this.stepService.goToNextStep();
  }

  prevStep() {
    this.stepService.goToPreviousStep();
  }
}
