const os = require('os');
const path = require('path');
const admin = require('firebase-admin');
const Env = require('./env');

const credentialsFile = path.join(os.homedir(), '.addressbook', 'credentials.json');

const serviceAccount = require(credentialsFile);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: Env.FIREBASE_URL,
});

const database = admin.database();

module.exports = database;
