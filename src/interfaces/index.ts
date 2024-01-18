import { ENotificationType } from "../enum";

export interface INotification {
  message: string;
  type: ENotificationType;
}
export interface INotificationState {
  notification: INotification | null;
}

export interface IRoute {
  path: string;
  component: JSX.Element;
}
