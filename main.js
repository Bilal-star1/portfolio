
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(event,tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";

}



const scriptURL = 'https://script.google.com/macros/s/AKfycbygI9C0FrRNIkqrNLLAa_4PicHM4sjEw-jABmoERDpK9YgbCEsGNMD9P4cMam8KmoHg/exec'

const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
e.preventDefault();
msg.className = 'loading';  // Set class to 'loading'
msg.innerHTML = 'Submitting...';  // Show loading message
msg.style.display = 'inline-block';  // Ensure message is visible

fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
    msg.className = 'success';  // Change class to 'success'
    msg.innerHTML = "Message sent successfully";  // Show success message
    setTimeout(function(){
        msg.style.display = 'none';
        msg.className = '';  // Reset class
        msg.innerHTML = "";
    }, 5000);
    form.reset();
})
.catch(error => {
    msg.className = 'error';  // Change class to 'error'
    msg.innerHTML = "Error sending message";  // Show error message
    setTimeout(function(){
        msg.style.display = 'none';
        msg.className = '';  // Reset class
        msg.innerHTML = "";
    }, 5000);
    console.error('Error!', error.message);
});
});


// Function to scroll to the top smoothly
function scrollToTop() {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
}

// Show or hide the back-to-top button based on scroll position
window.onscroll = function() {
scrollFunction();
};

function scrollFunction() {
var button = document.getElementById("back-to-top-btn");
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
button.style.display = "block";
} else {
button.style.display = "none";
}
}


// CV Details
const cvs = {
'1234': 'images/my-cv.pdf',
'5678': 'images/cv-developer.pdf',
'91011': 'images/cv-manager.pdf'
};

function showPinInput() {
document.getElementById('pinSection').style.display = 'block';
}

function downloadCV() {
const pin = document.getElementById('pinInput').value;
const errorMessage = document.getElementById('errorMessage');

if (cvs[pin]) {
window.location.href = cvs[pin];
errorMessage.textContent = '';
} else {
errorMessage.textContent = 'Invalid Pin. Please try again.';
}
}

