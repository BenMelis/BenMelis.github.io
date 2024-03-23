//Importing the head
function importHead() {
    fetch('/head.html')
        .then(response => response.text())
        .then(navbarHtml => {
        document.getElementById('head-container').innerHTML = navbarHtml; // Inject the head HTML into the container
        })
        .catch(error => console.error('Error fetching head metadata:', error));
    }
    
importHead();

//Importing the navbar
function importNavbar() {
    fetch('/navbar.html')
        .then(response => response.text())
        .then(navbarHtml => {
        document.getElementById('navbar-container').innerHTML = navbarHtml; // Inject the navbar HTML into the container
        })
        .catch(error => console.error('Error fetching navbar:', error));
    }
    
importNavbar();

//Importing the footer
function importFooter() {
    fetch('/footer.html')
        .then(response => response.text())
        .then(navbarHtml => {
        document.getElementById('footer-container').innerHTML = navbarHtml; // Inject the navbar HTML into the container
        })
        .catch(error => console.error('Error fetching footer:', error));
    }
    
importFooter();