// export const parseCookie = (str)  => {
//   return str
//     .split(";")
//     .map((v) => v.split("="))
//     .reduce((acc: { [name] }, v) => {
//       if (v.length > 1) {
//         acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
//         return acc;
//       } else {
//         return {};
//       }
//     }, {});
// };

// export const setToken = (token, setExpiry = false) => {
//   if (typeof window !== "undefined") {
//     let cookieString = `token=${token}; path=/;`;
//     if (setExpiry) {
//       const now = new Date();
//       const time = now.getTime();
//       const expireTime = time + 2592000; // 30 day
//       now.setTime(expireTime);
//       cookieString += ` expires=${now.toUTCString()};`;
//     }
//     document.cookie = cookieString;
//   }
// };

// export const removeToken = ()=> {
//   if (typeof window !== "undefined") {
//     document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//   }
// };

// export const getToken = ()=> {
//   if (typeof window !== "undefined") {
//     const cookie = parseCookie(document.cookie);
//     return cookie.token;
//   }
//   return null;
// };
