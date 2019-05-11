const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("notification added", doc));
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: "added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
    return createNotification(notification);
  });

  exports.createUser = functions.firestore
  .document('users/{userId}')
  .onCreate((snap, context) => {
    const user = snap.data();
    const notification = {
      content : "joined the system",
      user : `${user.firstName} ${user.lastName}`,
      time : new Date().toString()
    }
    return createNotifications(notification)
  });