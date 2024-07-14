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
  private stepOneData = new BehaviorSubject<any>({
    name: '',
    email: '',
    phone: '',
  });
  private stepTwoData = new BehaviorSubject<any>({
    plan: '',
  });
  private stepThreeData = new BehaviorSubject<any>({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });
  private stepFourData = new BehaviorSubject<any>({});

  currentStep$ = this.currentStep.asObservable();
  billingCycle$ = this.billingCycle.asObservable();
  selectedPlan$ = this.selectedPlan.asObservable();
  selectedAddOns$ = this.selectedAddOns.asObservable();
  stepOneData$ = this.stepOneData.asObservable();
  stepTwoData$ = this.stepTwoData.asObservable();
  stepThreeData$ = this.stepThreeData.asObservable();
  stepFourData$ = this.stepFourData.asObservable();

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

  setStepOneData(data: any) {
    this.stepOneData.next(data);
  }

  setStepTwoData(data: any) {
    this.stepTwoData.next(data);
  }

  setStepThreeData(data: any) {
    this.stepThreeData.next(data);
  }

  setStepFourData(data: any) {
    this.stepFourData.next(data);
  }
}
