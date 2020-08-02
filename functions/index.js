const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello, ninjas!");
});

// notificationsコレクションにnotificationオブジェクトを追加
const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("notification added", doc));
};

// projectが作成されたタイミングがトリガー
exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc) => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    //   Cloud Functions用の関数は何かしらのレスポンスが必要なのでreturnする形で関数を呼び出す
    return createNotification(notification);
  });

//   新しいユーザーが作成されたときがトリガー
exports.userJoined = functions.auth.user().onCreate((user) => {
  // .doc(user.uid).get()で作られたユーザー情報をusersコレクションからとって、notificationオブジェクトを作成し、createNotificationに渡す
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the party",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };

      return createNotification(notification);
    });
});
