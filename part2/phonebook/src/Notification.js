const Notification = ({ classStatus, message }) => {
  if (message === null) {
    return null;
  } else {
    return <div className={classStatus}>{message}</div>;
  }
};
export default Notification;
