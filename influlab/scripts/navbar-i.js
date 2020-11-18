window.addEventListener('scroll', function(e) {
    let body = document.documentElement;
    let navbar = document.getElementsByClassName('NavBar')[0];
    if(body.scrollTop === 0) {
        navbar.style.boxShadow = "0 0 0 transparent";
        navbar.style.backgroundColor = "rgba(0, 76, 255, 0.1)";
    }
    else {
        navbar.style.boxShadow = "0 1px 15px rgba(216, 216, 216, 0.473)";
        navbar.style.backgroundColor = "#FAFBFF";
    }
});

function toggle(x) {
    x.classList.toggle("change");
}