// let cookies =
//   "devlogger_auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY3Y2ZmZTk0MjA1YWU3MGQ1ZDIzYTAwNiJ9LCJpYXQiOjE3NDIxOTgxMzJ9.AhHSV0bmOoALeJzyfw-JH-51GqqGKIBKYz7zyC1-7wU; test_cookie=Test%20Cookie%20Value; test_cookie2=Test%20Cookie%202%20Value";

// const req = {
//   cookies: {
//     devlogger_auth:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY3Y2ZmZTk0MjA1YWU3MGQ1ZDIzYTAwNiJ9LCJpYXQiOjE3NDIxOTgxMzJ9.AhHSV0bmOoALeJzyfw-JH-51GqqGKIBKYz7zyC1-7wU",
//     test_cookie: "Test Cookie Value",
//     test_cookie2: "Test Cookie2 Value",
//   },
// };

// // Separate the entire string into three values separated by the "; "
// cookies = cookies.split("; ");

// // console.log(cookies);

// // Access the first string
// let auth_cookie = cookies[0];

// // console.log(auth_cookie);

// // devlogger_auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY3Y2ZmZTk0MjA1YWU3MGQ1ZDIzYTAwNiJ9LCJpYXQiOjE3NDIxOTgxMzJ9.AhHSV0bmOoALeJzyfw-JH-51GqqGKIBKYz7zyC1-7wU

// // Get the value after the = - Separate the string by the =, then you get the name and the value
// auth_cookie = auth_cookie.split("=");

// // console.log(auth_cookie);

// // Access the second string
// const cookie_name = auth_cookie[0];
// const cookie_value = auth_cookie[1];

// console.log(cookie_name, cookie_value);
