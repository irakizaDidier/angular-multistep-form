import { Component, OnInit } from '@angular/core';
import { StepService } from '../../services/step-service.service';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css'],
})
export class StepFourComponent implements OnInit {
  selectedPlan: string | null = null;
  isMonthly: boolean = true;
  selectedAddOns: any = {};

  constructor(private stepService: StepService) {
    this.stepService.billingCycle$.subscribe((isMonthly) => {
      this.isMonthly = isMonthly;
    });
    this.stepService.selectedPlan$.subscribe((plan) => {
      this.selectedPlan = plan;
    });
    this.stepService.selectedAddOns$.subscribe((addOns) => {
      this.selectedAddOns = addOns;
    });
  }

  ngOnInit() {}

  changePlan() {
    this.stepService.goToStep(2);
  }

  nextStep() {
    this.stepService.goToNextStep();
  }

  prevStep() {
    this.stepService.goToPreviousStep();
  }
}
