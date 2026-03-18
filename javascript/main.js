            const menuBtn = document.getElementById('menu-btn');
            const nav = document.getElementById('mobile-nav');

            menuBtn.addEventListener('click', function() {
                // Vi sjekker ikke lenger om den har "hidden" i selektoren, 
                // vi bare toggler klassene på det faste elementet.
                nav.classList.toggle('hidden');
                nav.classList.toggle('block');
            });

        // Jevn skrolling for ankerlenker
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Funksjon for å sjekke om enheten er en mobil
        function isMobile() {
            return window.innerWidth <= 768; // Samme grense som i CSS
        }

        const imageContainers = document.querySelectorAll('.image-container');
        imageContainers.forEach(container => {
            container.addEventListener('click', () => {
                // Bare tillat toggle hvis det ikke er en mobil
                if (!isMobile()) {
                    container.classList.toggle('fullscreen');
                }
            });
        });

        // Håndter vindustørrelse-endringer
        window.addEventListener('resize', () => {
            imageContainers.forEach(container => {
                // Fjern fullscreen hvis brukeren endrer til mobilvisning
                if (isMobile() && container.classList.contains('fullscreen')) {
                    container.classList.remove('fullscreen');
                }
            });
        });

    document.querySelectorAll('.image-link').forEach(link => {
    link.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});


function showCookieConsent() {
    // Sjekk om brukeren allerede har tatt et valg
    if (!localStorage.getItem('cookieConsent')) {
        document.getElementById('cookieConsent').classList.add('show');
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookieConsent').classList.remove('show');
    // Her kan du legge til kode som AKTIVERER sporing/cookies
    // f.eks. laste inn Google Analytics, Meta Pixel osv.
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    document.getElementById('cookieConsent').classList.remove('show');
    // Her kan du sørge for at ingen sporing aktiveres
}

function handleCookieChoice() {
    const choice = localStorage.getItem('cookieConsent');
    if (choice === 'accepted') {
        // → aktiver analyseverktøy, chat, etc.
        console.log("Cookies akseptert");
    } else if (choice === 'declined') {
        // → blokker tracking
        console.log("Cookies avvist");
    }
}

// Kjør når siden er lastet
document.addEventListener('DOMContentLoaded', () => {
    showCookieConsent();
    handleCookieChoice();     // valgfri – kjører logikk ved lasting
});
