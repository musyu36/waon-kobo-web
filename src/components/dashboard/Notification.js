import React from "react";
import moment from "moment";

const Notification = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-1">
        <div className="card-content theme-back-white">
          <span className="card-title blue-grey-text text-darken-4">
            Notifications
          </span>
          <ul className="notifications">
            {notifications &&
              notifications.map((item) => {
                return (
                  <li key={item.id}>
                    <span className="fw-450 blue-grey-text text-darken-4">
                      {item.user}{" "}
                    </span>
                    <span className="blue-grey-text text-darken-3">
                      {item.content}
                    </span>
                    <div className="blue-grey-text text-lighten-3 note-date">
                      {moment(item.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
