let button = document.getElementById("button");

let buttonMobile = document.getElementById("button-mobile");

let shareBoxDesktop = document.getElementById('share-desktop');

let shareBoxMobile = document.getElementById('share-mobile');

let profileBox = document.getElementById('profile');


button.addEventListener('click', () => { 
    displayShare() ;

}) 


function displayShare() {
    if (window.innerWidth < 1000) {
        profileBox.style.display = 'none'
        shareBoxMobile.classList.toggle('share-mobile-off')   
        
    } else {
        shareBoxDesktop.classList.toggle('share-desktop-off')
    }
}


buttonMobile.addEventListener('click', displayProfile)

function displayProfile(params) {
    profileBox.style.display = 'flex';
    shareBoxMobile.classList.toggle('share-mobile-off')
    
}
// console.log(window.screen.width);