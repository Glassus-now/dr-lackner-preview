/**
 * Language Switching Script
 */
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-de]');
    
    elements.forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            el.textContent = text;
        } else {
            el.textContent = el.getAttribute('data-de');
        }
    });

    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    localStorage.setItem('selectedLanguage', lang);
}

// Restore saved language on load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'de';
    switchLanguage(savedLang);
});