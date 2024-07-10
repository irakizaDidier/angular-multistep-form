import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  private currentStep = new BehaviorSubject<number>(1);

  currentStep$ = this.currentStep.asObservable();

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
}
