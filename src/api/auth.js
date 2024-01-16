import {
  URL_AUTH,
  CLIENT_ID,
  RESPONSE_TYPE,
  RANDOM_STRING,
  REDIRECT_URI,
  SCOPE,
} from './const';

const searchPArams = new URLSearchParams('');

searchPArams.append('client_id', CLIENT_ID);
searchPArams.append('response_type', RESPONSE_TYPE);
searchPArams.append('state', RANDOM_STRING);
searchPArams.append('redirect_uri', REDIRECT_URI);
searchPArams.append('scope', SCOPE);

export const urlAuth = `${URL_AUTH}${searchPArams.toString()}`;
