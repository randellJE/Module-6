import { useState } from "react";

const phrases = new Map([
    ['English', 'Happy Birthday'],
    ['German', 'Alles Gute zum Geburtstag'],
    ['Spanish', 'Feliz Cumpleanos'],
    ['French', 'Bon anniversaire']
])

function BirthdayTranslator() {

    // wrong way!!
    // const [currentLanguage, setCurrentLanguage] = useState('English');
    // const [phrase, setPhrase] = useState(phrases.get('English'))

    // const handleChangeLanguage = (lang) => {
    //     setCurrentLanguage(lang);
    //     setPhrase(phrases.get(lang))
    // }

    // const [currentPhrase, setCurrentPhrase] = useState(
    //     {lang: 'English', phrase: 'Happy Birthday'}
    // )

    // const handleChangeLanguage = (newlang) => {
    //     setCurrentPhrase({lang: newlang, phrase: phrases.get(newlang)})
    // }

    // Most simplified version
    const [currentLanguage, setCurrentLanguage] = useState('English');

    const handleChangeLanguage = (newLang) => {
        setCurrentLanguage(newLang)
    }

    return (
        <div className="BirthdayTranslator componentBox">
            <h3>{phrases.get(currentLanguage)}! ({currentLanguage})</h3>
            <button onClick={() => handleChangeLanguage('English')}>English</button>
            <button onClick={() => handleChangeLanguage('German')}>German</button>
            <button onClick={() => handleChangeLanguage('Spanish')}>Spanish</button>
            <button onClick={() => handleChangeLanguage('French')}>French</button>
        </div>
    )
}

export default BirthdayTranslator