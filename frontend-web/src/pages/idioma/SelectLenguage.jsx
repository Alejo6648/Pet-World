import { useTranslation } from 'react-i18next';

function Language() {
    const { i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('es')}>Español</button>
        </div>
    );
}

export default Language;
