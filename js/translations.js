    // Translations
    const translations = {
        en: {
        sloganTop: "مرحباً بكم في تعلم اللهجة البغدادية!",
        pageTitle: "Welcome to Learn Baghdad Arabic",
        pageDescription: "This website is designed to help you learn basic Baghdad Arabic phrases, greetings, and numbers.",
        learnSectionTitle: "Learn new words and phrases",
        greetingsLink: "Lesson 1: Greetings",
        phrasesLink: "Lesson 2: Common Phrases",
        numbersLink: "Lesson 3: Numbers",
        practiceSectionTitle: "Practice new words and phrases",
        practiceGreetingsLink: "Lesson 1: Greetings",
        practicePhrasesLink: "Lesson 2: Common Phrases",
        practiceNumbersLink: "Lesson 3: Numbers",
        quizSectionTitle: "Quiz",
        quizGreetingsLink: "Quiz: Greetings",
        quizPhrasesLink: "Quiz: Phrases",
        quizNumbersLink: "Quiz: Numbers",
        futureContentTitle: "For future content",
        futureContentDescription: "This section is reserved for future content.",
        sloganBottom: "Learning a new language opens doors to new worlds.",
        },
        no: {
        sloganTop: "Velkommen til å lære Baghdadi-arabisk!",
        pageTitle: "Velkommen til Å Lære Baghdadi Arabisk",
        pageDescription: "Dette nettstedet er designet for å hjelpe deg med å lære grunnleggende Baghdadi-arabiske fraser, hilsener og tall.",
        learnSectionTitle: "Lær nye ord og fraser",
        greetingsLink: "Leksjon 1: Hilsener",
        phrasesLink: "Leksjon 2: Vanlige Fraser", // Plural form
        numbersLink: "Leksjon 3: Tall",
        practiceSectionTitle: "Øv på nye ord og fraser",
        practiceGreetingsLink: "Leksjon 1: Hilsener",
        practicePhrasesLink: "Leksjon 2: Vanlige Fraser", // Plural form
        practiceNumbersLink: "Leksjon 3: Tall",
        quizSectionTitle: "Quiz",
        quizGreetingsLink: "Quiz: Hilsener",
        quizPhrasesLink: "Quiz: Fraser", // Plural form
        quizNumbersLink: "Quiz: Tall",
        futureContentTitle: "For fremtidig innhold",
        futureContentDescription: "Dette avsnittet er reservert for fremtidig innhold.",
        sloganBottom: "Å lære et nytt språk åpner dører til nye verdener.",
        },
    };
    
    // Function to set the language
    function setLanguage(language) {
        document.getElementById('sloganTop').textContent = translations[language].sloganTop;
        document.getElementById('pageTitle').textContent = translations[language].pageTitle;
        document.getElementById('pageDescription').textContent = translations[language].pageDescription;
        document.getElementById('learnSectionTitle').textContent = translations[language].learnSectionTitle;
        document.getElementById('greetingsLink').textContent = translations[language].greetingsLink;
        document.getElementById('phrasesLink').textContent = translations[language].phrasesLink;
        document.getElementById('numbersLink').textContent = translations[language].numbersLink;
        document.getElementById('practiceSectionTitle').textContent = translations[language].practiceSectionTitle;
        document.getElementById('practiceGreetingsLink').textContent = translations[language].practiceGreetingsLink;
        document.getElementById('practicePhrasesLink').textContent = translations[language].practicePhrasesLink;
        document.getElementById('practiceNumbersLink').textContent = translations[language].practiceNumbersLink;
        document.getElementById('quizSectionTitle').textContent = translations[language].quizSectionTitle;
        document.getElementById('quizGreetingsLink').textContent = translations[language].quizGreetingsLink;
        document.getElementById('quizPhrasesLink').textContent = translations[language].quizPhrasesLink;
        document.getElementById('quizNumbersLink').textContent = translations[language].quizNumbersLink;
        document.getElementById('futureContentTitle').textContent = translations[language].futureContentTitle;
        document.getElementById('futureContentDescription').textContent = translations[language].futureContentDescription;
        document.getElementById('sloganBottom').textContent = translations[language].sloganBottom;
    
        // Save the user's language preference
        localStorage.setItem('language', language);
    }
    
    // Function to load the saved language preference
    function loadLanguage() {
        const savedLanguage = localStorage.getItem('language') || 'en'; // Default to English if no preference is saved
        setLanguage(savedLanguage); // Apply the saved language
    }
    
    // Load the saved language when the page loads
    window.onload = loadLanguage;