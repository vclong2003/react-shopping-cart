import { ENotificationType } from "../enum";

const getNotificationBg = (type: ENotificationType | undefined) => {
  if (type === ENotificationType.Success) return "var(--green)";
  if (type === ENotificationType.Warning) return "var(--orange)";
  if (type === ENotificationType.Error) return "var(--red)";
  return "var(--gray)";
};

export { getNotificationBg };
