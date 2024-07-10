import { Component } from '@angular/core';
import { StepService } from '../../services/step-service.service';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css'],
})
export class AsideNavComponent {
  constructor(public stepService: StepService) {}

  goToStep(step: number) {
    this.stepService.goToStep(step);
  }
}
