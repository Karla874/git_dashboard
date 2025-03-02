const usuario = [{"id":5758,"name":"Sir Purr","nickname":"Purr","avatar":"https://cdn-icons-png.flaticon.com/512/8277/8277564.png"}];
//let username = document.querySelector(".user span");
//let avatar = document.querySelector(".user img");

let username = usuario[0].name;
let avatar = usuario[0].avatar;
let nickname = usuario[0].nickname;

document.body.innerHTML = document.body.innerHTML.replaceAll("{username}", username);
document.body.innerHTML = document.body.innerHTML.replaceAll("{nickname}", nickname);
document.body.innerHTML = document.body.innerHTML.replaceAll("https://cdn-icons-png.flaticon.com/512/17446/17446833.png", avatar);
