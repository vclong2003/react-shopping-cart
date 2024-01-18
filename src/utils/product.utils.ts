import { ENotificationType } from "../enum";
import { INotification } from "../interfaces";

/**
 * Get the notification object for product fetch error
 * @returns {INotification}
 */
const productFetchErrorNoti = (): INotification => ({
  message: "Something went wrong when fetching products! ",
  type: ENotificationType.Error,
});

export { productFetchErrorNoti };
