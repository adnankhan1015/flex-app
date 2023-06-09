// ROUTES
const global = {
    currentPage: window.location.pathname
}

// Highlight ACtive Link
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active')
        }
    })
}

// Init Application
function init() {
    switch (global.currentPage) {
        case '/':
        case '/inbdex.html':
            console.log('Home');
            break;
        case '/show.html':
            console.log('Shows');
            break;
        case '/movie-details.html':
            console.log('Movie Details');
            break;
        case '/tv-details.html':
            console.log('TV Details');
            break;
        case '/search.html':
            console.log('Search');
            break;
    }
    highlightActiveLink()
}


document.addEventListener('DOMContentLoaded', init)