import "alpinejs";

// window.toggleDarkMode = () => {
//   if (localStorage.theme === "dark") {
//     localStorage.theme = "light";
//   } else {
//     localStorage.theme = "dark";
//   }

//   if (localStorage.theme === "dark") {
//     document.querySelector("html").classList.add("dark");
//   } else {
//     document.querySelector("html").classList.remove("dark");
//   }
// };

// // https://stackoverflow.com/questions/59621784/how-to-detect-prefers-color-scheme-change-in-javascript
// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addEventListener("change", (e) => {
//     if (e.matches) {
//       document.querySelector("html").classList.add("dark");
//     } else {
//       document.querySelector("html").classList.remove("dark");
//     }
//   });

// // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);
// // We listen to the resize event
// window.addEventListener('resize', () => {
//   // We execute the same script as before
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

// console.log("hello world!");