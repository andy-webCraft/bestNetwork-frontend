import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import { appModel, Notification } from "entities/app";

function NotificationsBar() {
  const notifications = useSelector(appModel.getNotifications);

  if (!notifications.length) return undefined;

  return (
    <Stack spacing={1} position="fixed" bottom="1.5rem" left="1.5rem" zIndex={1000}>
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </Stack>
  );
}

export default NotificationsBar;
