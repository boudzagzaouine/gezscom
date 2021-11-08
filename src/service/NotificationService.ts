import { Subject } from "rxjs";
import type { Subscription } from "rxjs";
import { Constants } from "config/Constants";

export enum NotificationType {
  SUCCESS = "success",
  ERROR = "error",
  SESSION_EXPIRED = "session_expired",
}
export interface Notification {
  type: NotificationType;
  message?: string;
  status?: number;
}
class NotificationService {
  private subject = new Subject<Notification>();

  subscribe(next: (value: Notification) => void): Subscription {
    return this.subject.subscribe(next);
  }

  next(value: Notification) {
    this.subject.next(value);
  }

  success(message: string = Constants.DEFAULT_SUCCESS) {
    this.next({ type: NotificationType.SUCCESS, message });
  }
  error(message: string = Constants.DEFAULT_ERROR) {
    this.next({ type: NotificationType.ERROR, message });
  }
}

export const notificationService = new NotificationService();
