let ismobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementsByClassName('NavBar')[0].style.backgroundColor = "#FAFBFF";
    ismobile = true;
}

window.addEventListener('scroll', function(e) {
    removeToggle();
    let body = document.documentElement;
    let navbar = document.getElementsByClassName('NavBar')[0];
    if(body.scrollTop === 0) {
        navbar.style.boxShadow = "0 0 0 transparent";
        if(!ismobile){
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
        
    }
    else {
        navbar.style.boxShadow = "0 1px 15px rgba(0, 0, 0, 0.473)";
        navbar.style.backgroundColor = "rgb(47,49,61)";
    }
});

function toggle(x) {
    x.classList.toggle("change");
    document.getElementById('sandwitch-menu').classList.toggle("novis");
    document.getElementById('sandwitch-menu').classList.toggle("vis");
}
function removeToggle() {
    document.getElementsByClassName('container')[0].classList.remove("change");
    document.getElementById('sandwitch-menu').classList.remove("vis");
    document.getElementById('sandwitch-menu').classList.add("novis");
}

function tucano() {
    document.getElementById('tucano-box').classList.toggle('tuc-vis');
}