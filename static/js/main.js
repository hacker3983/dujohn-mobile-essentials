const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

const typingText = document.getElementById("typingText");

const heroPhrases = [
    "Mobile Accessories.",
    "Professional Device Repairs.",
    "Jamaica-Wide Online Store.",
    "Quality. Protection. Convenience."
];

let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeHeroText() {
    const currentPhrase = heroPhrases[phraseIndex];

    if (isDeleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentPhrase.substring(0, characterIndex);

    let typingSpeed = isDeleting ? 45 : 80;

    if (!isDeleting && characterIndex === currentPhrase.length) {
        typingSpeed = 1800;
        isDeleting = true;
    } else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % heroPhrases.length;
        typingSpeed = 400;
    }

    setTimeout(typeHeroText, typingSpeed);
}

typeHeroText();
