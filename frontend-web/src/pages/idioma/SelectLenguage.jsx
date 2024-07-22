import { useTranslation } from 'react-i18next';
import Button from '../../components/moleculas/Button';

function Language() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div>
            <Button variant="custom1" onClick={() => changeLanguage('en')}>{t('English')}</Button>
            <Button variant="custom1" onClick={() => changeLanguage('es')}>{t('Spanish')}</Button>
        </div>
    );
}

export default Language;
