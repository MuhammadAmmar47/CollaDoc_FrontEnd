import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  apiBaseUrl:
    //window.location.origin +
    'http://localhost/services_A',
};
