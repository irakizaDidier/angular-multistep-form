import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  private currentStep = new BehaviorSubject<number>(1);
  private billingCycle = new BehaviorSubject<boolean>(true);
  private selectedPlan = new BehaviorSubject<string | null>(null);
  private selectedAddOns = new BehaviorSubject<any>({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  currentStep$ = this.currentStep.asObservable();
  billingCycle$ = this.billingCycle.asObservable();
  selectedPlan$ = this.selectedPlan.asObservable();
  selectedAddOns$ = this.selectedAddOns.asObservable();

  goToNextStep() {
    const step = this.currentStep.value + 1;
    this.currentStep.next(step);
  }

  goToPreviousStep() {
    const step = this.currentStep.value - 1;
    this.currentStep.next(step);
  }

  goToStep(step: number) {
    this.currentStep.next(step);
  }

  setBillingCycle(isMonthly: boolean) {
    this.billingCycle.next(isMonthly);
  }

  setSelectedPlan(plan: string | null) {
    this.selectedPlan.next(plan);
  }

  setSelectedAddOns(addOns: any) {
    this.selectedAddOns.next(addOns);
  }
}
