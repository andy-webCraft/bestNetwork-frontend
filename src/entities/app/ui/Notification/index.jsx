import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Alert } from "@mui/material";
import PropTypes from "prop-types";

import { appModel } from "entities/app";

function Notification({ notification, duration = 3000 }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(appModel.deleteNotification({ id: notification.id }));
  };

  useEffect(() => {
    setTimeout(handleDelete, duration);
  }, []);

  return (
    <Alert severity={notification.type} onClose={handleDelete}>
      {notification.message}
    </Alert>
  );
}

Notification.propTypes = {
  notification: PropTypes.shape(
    { id: PropTypes.string, type: PropTypes.string, message: PropTypes.string },
  ).isRequired,
  duration: PropTypes.number,
};

Notification.defaultProps = { duration: 3000 };

export default Notification;
