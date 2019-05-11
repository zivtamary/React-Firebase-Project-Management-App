import React from "react";
import moment from "moment";

const Notifications = ({notifications}) => {
  return (
    <div className="card">
      <div className="card-header typography-title border-muted mx-2">
        Notifications
      </div>
      <div className="card-body">
        <ul class="list-group list-group-flush">
                  {notifications && notifications.map(n => {
                      return (
                          <li key={n.id} className="list-group-item list-group-item-action">{`${n.user} ${n.content} – ${moment(n.time.toDate()).fromNow()}`}</li>
                )
            })}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
