import React, { FC, useEffect } from 'react'
import type { Notification } from 'service/NotificationService';
import { notificationService } from 'service/NotificationService';

export const Notifications: FC = () => {
    useEffect(() => {
        const handleNotification = (notification: Notification) => {
            alert(`${notification.type} : ${notification.message}`)
        }
        const subscription = notificationService.subscribe(handleNotification);
        return () => {
            subscription.unsubscribe();
        }
    }, []);
    return <></>;
}
