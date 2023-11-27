// Auto Nav Bar Scrolling //
const section = document.querySelector('section')
const navLink = document.querySelector('header nav a')
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if (top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
    //Sticky Navbar//
    var header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 100)
    menubar.classList.remove('bx-x')
    navbar.classList.remove('active')
};
//toggle changer//
let menubar = document.querySelector('#menu')
let navbar = document.querySelector('.navbar')
menubar.onclick = () => {
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')


    //Create A Text Changer//
    /*var type=new Typed(".textline",{
        strings:['Software Developer','Full Stack Web Developer','Competetive Programmer','Data Analyst'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    })*/
}
