const Notification = ({ classStatus, message }) => {
  if (message === null) {
    return null;
  } else {
    let classname = {};
    if (classStatus === "message") {
      classname = "message";
    } else {
      classname = "delete";
    }
    return <div className={classname}>{message}</div>;
  }
};
export default Notification;
