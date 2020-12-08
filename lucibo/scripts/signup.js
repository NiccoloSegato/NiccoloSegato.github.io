document.getElementById("submit-sign").addEventListener("click", function(event){

    // Retrieving DOM elements
    let name = document.getElementById('sign-form')["name"];
    let surname = document.getElementById('sign-form')["surname"];
    let birthday = document.getElementById('sign-form')["birthday"];
    let city = document.getElementById('sign-form')["city"];
    let email = document.getElementById('sign-form')["email"];

    let ig_username = document.getElementById('sign-form')["ig_username"];
    let ig_followers = document.getElementById('sign-form')["ig_followers"];
    let ig_categories = document.getElementById('sign-form')["ig_categories"];
    /*let igK = document.getElementById('sign-form')["ig_K"];
    let igM = document.getElementById('sign-form')["ig_M"];*/

    let tt_username = document.getElementById('sign-form')["tt_username"];
    let tt_followers = document.getElementById('sign-form')["tt_followers"];
    let tt_categories = document.getElementById('sign-form')["tt_categories"];
    /*let ttK = document.getElementById('sign-form')["tt_K"];
    let ttM = document.getElementById('sign-form')["tt_M"];*/

    let password = document.getElementById('sign-form')["password"];

    let personal = [name, surname, birthday, city, email, password];
    let instagram = [ig_username, ig_followers, ig_categories];//, igM, igK];
    let tiktok = [tt_username, tt_followers, tt_categories];//, ttK, ttM];

    checkFields(personal, instagram, tiktok);

});

function checkFields(personal, instagram, tiktok) {
    let personal_error = [];
    // Check personal data
    personal.forEach(element => {
        if(element.value == ''){
            personal_error.push(element);
        }
    });

    let ig_error = [];
    // Check instagram data
    instagram.forEach(element => {
        if(element.value == ''){
            ig_error.push(element);
        }
    });

    let tt_error = [];
    // Check instagram data
    tiktok.forEach(element => {
        if(element.value == ''){
            tt_error.push(element);
        }
    });

    // checking errors
    if((ig_error.length > 0) && (tt_error.length > 0)){
        // Nessun social completo
        resetBorders(personal, instagram, tiktok);
        ig_error.forEach(element => {
            signError(element);
        });
        tt_error.forEach(element => {
            signError(element);
        });
        alert('Compilare tutti i campi di almeno un social network!');
    }
    else if ((ig_error.length > 0) && (tt_error.length == 0) && (ig_error.length != 3)) {
        // Instagram NON completo e TikTok completo
        resetBorders(personal, instagram, tiktok);
        ig_error.forEach(element => {
            signError(element);
        });
        alert('Compila tutti i campi del tuo account Instagram');
    }
    else if ((ig_error.length == 0) && (tt_error.length > 0) && (tt_error.length != 3)) {
        // TikTok NON completo e Instagram completo
        resetBorders(personal, instagram, tiktok);
        tt_error.forEach(element => {
            signError(element);
        });
        alert('Compila tutti i campi del tuo account TikTok');
    }
    else if (personal_error.length > 0) {
        // Info personali NON complete
        resetBorders(personal, instagram, tiktok);
        personal_error.forEach(element => {
            signError(element);
        });
        alert('Compila tutti i tuoi campi personali');
    }
    else {
        /**
         * SUCCESS
         * All fields required are filled
         * Write to database and redirect
         */
        window.location.href = 'confirmation.html';
    }
}

function signError(element) {
    element.style.border = '1px solid red';
}
function resetBorders(personal, instagram, tiktok) {
    personal.forEach(element => {
        element.style.border = 'none';
    })
    instagram.forEach(element => {
        element.style.border = 'none';
    })
    tiktok.forEach(element => {
        element.style.border = 'none';
    })
}