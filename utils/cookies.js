export const getToken = (cookies) => {
  if (cookies) {
    return cookies.token;
  }
  if (typeof cookies !== undefined) {
    const cookie = parseCookie(document.cookie);
    return cookie.token;
  }
  return null;
};
