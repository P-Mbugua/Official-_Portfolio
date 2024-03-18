let menu = document.querySelectorO('#menu-btn');
let header = document.querySelectorO('.header');

menu.onclick = () =>{
    menu.classlist.toggle('bx-check-square');
    header.classlist.toggle('active');
}