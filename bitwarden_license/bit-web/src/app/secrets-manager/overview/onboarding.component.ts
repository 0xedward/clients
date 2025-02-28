import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from "@angular/core";

import { OnboardingTaskComponent } from "./onboarding-task.component";

@Component({
  selector: "sm-onboarding",
  templateUrl: "./onboarding.component.html",
})
export class OnboardingComponent {
  @ContentChildren(OnboardingTaskComponent) tasks: QueryList<OnboardingTaskComponent>;
  @Input() title: string;

  @Output() dismiss = new EventEmitter<void>();

  protected open = true;
  protected visible = false;

  protected get amountCompleted(): number {
    return this.tasks.filter((task) => task.completed).length;
  }

  protected get barWidth(): number {
    return this.tasks.length === 0 ? 0 : (this.amountCompleted / this.tasks.length) * 100;
  }

  protected get isComplete(): boolean {
    return this.tasks.length > 0 && this.tasks.length === this.amountCompleted;
  }

  protected toggle() {
    this.open = !this.open;
  }
}
