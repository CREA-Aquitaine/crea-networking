const getBrowserElements = () => {
  const nAgt = navigator.userAgent;
  let browserName = navigator.appName;
  let fullVersion = `${parseFloat(navigator.appVersion)}`;
  let nameOffset;
  let verOffset;
  let ix;

  // In Opera, the true version is after "Opera" or after "Version"
  // eslint-disable-next-line no-cond-assign
  if ((verOffset = nAgt.indexOf('Opera')) !== -1) {
    browserName = 'Opera';
    fullVersion = nAgt.substring(verOffset + 6);
    // eslint-disable-next-line no-cond-assign
    if ((verOffset = nAgt.indexOf('Version')) !== -1)
      fullVersion = nAgt.substring(verOffset + 8);
  }
  // In MSIE, the true version is after "MSIE" in userAgent
  // eslint-disable-next-line no-cond-assign
  else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
    browserName = 'Microsoft Internet Explorer';
    fullVersion = nAgt.substring(verOffset + 5);
  }
  // In Chrome, the true version is after "Chrome"
  // eslint-disable-next-line no-cond-assign
  else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
    browserName = 'Chrome';
    fullVersion = nAgt.substring(verOffset + 7);
  }
  // In Safari, the true version is after "Safari" or after "Version"
  // eslint-disable-next-line no-cond-assign
  else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
    browserName = 'Safari';
    fullVersion = nAgt.substring(verOffset + 7);
    // eslint-disable-next-line no-cond-assign
    if ((verOffset = nAgt.indexOf('Version')) !== -1)
      fullVersion = nAgt.substring(verOffset + 8);
  }
  // In Firefox, the true version is after "Firefox"
  // eslint-disable-next-line no-cond-assign
  else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
    browserName = 'Firefox';
    fullVersion = nAgt.substring(verOffset + 8);
  }
  // In most other browsers, "name/version" is at the end of userAgent
  else if (
    // eslint-disable-next-line no-cond-assign
    (nameOffset = nAgt.lastIndexOf(' ') + 1) <
    // eslint-disable-next-line no-cond-assign
    (verOffset = nAgt.lastIndexOf('/'))
  ) {
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() === browserName.toUpperCase()) {
      browserName = navigator.appName;
    }
  }
  // trim the fullVersion string at semicolon/space if present
  // eslint-disable-next-line no-cond-assign
  if ((ix = fullVersion.indexOf(';')) !== -1) {
    fullVersion = fullVersion.substring(0, ix);
  }
  // eslint-disable-next-line no-cond-assign
  if ((ix = fullVersion.indexOf(' ')) !== -1) {
    fullVersion = fullVersion.substring(0, ix);
  }

  let OSName = 'Unknown OS';
  if (navigator.appVersion.indexOf('Win') !== -1) OSName = 'Windows';
  if (navigator.appVersion.indexOf('Mac') !== -1) OSName = 'MacOS';
  if (navigator.appVersion.indexOf('X11') !== -1) OSName = 'UNIX';
  if (navigator.appVersion.indexOf('Linux') !== -1) OSName = 'Linux';

  const arrayBrowserElements = [browserName, fullVersion, OSName];

  return arrayBrowserElements;
};

export default getBrowserElements;
