document.addEventListener('DOMContentLoaded', () => {
    const playMusicButton = document.getElementById('playMusic');
    const michaelJacksonMusic = document.getElementById('michaelJacksonMusic');
    const dancingCharacter = document.getElementById('dancingCharacter');

    // --- Gestion de la Musique ---
    playMusicButton.addEventListener('click', () => {
        if (michaelJacksonMusic.paused) {
            michaelJacksonMusic.play();
            playMusicButton.textContent = 'Mettre en Pause';
            dancingCharacter.classList.add('dancing'); // Ajoute la classe pour démarrer l'animation du GIF
        } else {
            michaelJacksonMusic.pause();
            playMusicButton.textContent = 'Lancer le Beat !';
            dancingCharacter.classList.remove('dancing'); // Retire la classe pour arrêter/pauser l'animation du GIF
        }
    });

    // Arrêter l'animation quand la musique s'arrête (si elle se termine d'elle-même)
    michaelJacksonMusic.addEventListener('ended', () => {
        dancingCharacter.classList.remove('dancing');
        playMusicButton.textContent = 'Lancer le Beat !';
    });

    // IMPORTANT : On retire toute la logique d'animation de spritesheet ici
    // Le GIF s'animera tout seul quand il sera visible et chargé.
    // Nous allons utiliser une classe CSS pour le contrôler.

    // Au chargement initial, le personnage est statique ou en première frame du GIF
    // On pourrait ajouter une classe 'static' ou 'paused' si le GIF le supporte
    // Mais pour la plupart des GIFs, l'animation démarre dès qu'ils sont chargés.
    // L'astuce sera de le masquer/afficher ou de le rendre actif/inactif via CSS.
});