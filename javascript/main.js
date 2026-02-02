       // Mobil navigasjon med togglefunksjon
        document.querySelector('button.md\\:hidden').addEventListener('click', function() {
            const nav = document.querySelector('nav.hidden');
            if (nav) {
                nav.classList.toggle('hidden');
                nav.classList.toggle('block');
                nav.classList.add('absolute', 'top-20', 'right-4', 'bg-white', 'p-4', 'shadow-lg', 'rounded-lg');
            }
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


// JavaScript for å håndtere cookie consent

document.getElementById('menu-toggle').addEventListener('click', function() {
  const navMenu = document.querySelector('nav');
  navMenu.classList.toggle('hidden');
});

    function showCookieConsent() {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        document.getElementById('cookieConsent').classList.add('show');
      }
    }

    function acceptCookies() {
      localStorage.setItem('cookieConsent', 'accepted');
      document.getElementById('cookieConsent').classList.remove('show');
    }

    function declineCookies() {
      localStorage.setItem('cookieConsent', 'declined');
      document.getElementById('cookieConsent').classList.remove('show');
    }

        // Vis cookie-boksen når siden lastes hvis ingen valg er gjort
    window.onload = showCookieConsent;