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
