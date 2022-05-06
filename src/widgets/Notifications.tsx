import { useEffect } from "react";
import { notificationService } from "service/NotificationService";
import type { FC } from "react";
import type { Notification } from "service/types";

export const Notifications: FC = () => {
  useEffect(() => {
    const handleNotification = (notification: Notification) => {
      alert(`${notification.type} : ${notification.message}`);
    };
    const subscription = notificationService.subscribe(handleNotification);
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return <></>;
};
