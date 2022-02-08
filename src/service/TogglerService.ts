import { BehaviorSubject, Subscription } from "rxjs";

export class TogglerService {
  private subject: BehaviorSubject<boolean>;

  constructor(value: boolean) {
    this.subject = new BehaviorSubject<boolean>(value);
  }

  subscribe(next: (value: boolean) => void): Subscription {
    return this.subject.subscribe(next);
  }

  next(value: boolean): boolean {
    if (value !== this.subject.value) {
      this.subject.next(value);
      return true;
    }
    return false;
  }
}

export const offlineService = new TogglerService(false);
