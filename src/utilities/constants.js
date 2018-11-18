// Include all the Api Urls
const BASE_URL = "https://app.onboard.academy";
// const BASE_URL = "http://localhost:8080";

// For file upload : "/chat/:chatGroup/file"
// To get file: "/file/:fileName"

export const API_URLS = {
  LOGIN: `${BASE_URL}/login`,
  REGISTER: `${BASE_URL}/register`,
  USERS: `${BASE_URL}/users`,
  USER_PROFILE: `${BASE_URL}/profile`,
  UPDATE_PROFILE: `${BASE_URL}/update-profile`,
  VIEW_MATCHES: `${BASE_URL}/matches`,
  GET_INSTITUTION: `${BASE_URL}/institutions`,
  GET_LOCATION: `${BASE_URL}/locations`,
  BUDDY: `${BASE_URL}/buddy`,
  SENT_INVITATIONS: `${BASE_URL}/sent-invitations`,
  PENDING_INVITATION: `${BASE_URL}/pending-invitations`,
  CHAT: `${BASE_URL}/chat`,
  GET_FILE: `${BASE_URL}/file/`
};
