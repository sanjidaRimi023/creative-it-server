const admin = require("firebase-admin");
const serviceAccount = require("./firebaseServiceAccount.json");
//initial firebase admin app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
module.exports = admin;
