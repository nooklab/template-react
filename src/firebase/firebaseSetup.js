import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/remote-config';

// const firebaseConfig = require(process.env.REACT_APP_ENV === 'development' ? './firebaseConfig.dev.json' : './firebaseConfig.prod.json');
const env = process.env.REACT_APP_ENV || 'local'
// console.log(env)
const firebaseConfig = require(`./firebaseConfig.${env}.json`);


firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth().useDeviceLanguage();

// Remote Config 설정
// const remoteConfig = firebase.remoteConfig();
//
// remoteConfig.defaultConfig = {
//   'url_chat_res': '{"url":"' + process.env.REACT_APP_CHAT_RESOURCE_URL + '"}'
// };
