import { Component, OnInit } from '@angular/core';
import { StepService } from '../../services/step-service.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css'],
})
export class StepThreeComponent implements OnInit {
  isMonthly: boolean = true;
  selectedAddOns: any = {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  };
  noAddOnSelected: boolean = false;

  constructor(private stepService: StepService) {}

  ngOnInit() {
    this.stepService.billingCycle$.subscribe((isMonthly) => {
      this.isMonthly = isMonthly;
    });

    this.stepService.selectedAddOns$.subscribe((addOns) => {
      this.selectedAddOns = addOns;
    });
  }

  nextStep() {
    if (
      this.selectedAddOns.onlineService ||
      this.selectedAddOns.largerStorage ||
      this.selectedAddOns.customizableProfile
    ) {
      this.noAddOnSelected = false;
      this.stepService.setSelectedAddOns(this.selectedAddOns);
      this.stepService.goToNextStep();
    } else {
      this.noAddOnSelected = true;
    }
  }

  prevStep() {
    this.stepService.goToPreviousStep();
  }

  onAddOnChange() {
    if (
      this.selectedAddOns.onlineService ||
      this.selectedAddOns.largerStorage ||
      this.selectedAddOns.customizableProfile
    ) {
      this.noAddOnSelected = false;
    }
  }
}
