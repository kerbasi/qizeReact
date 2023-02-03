import { useGlobalContext } from "../appContext";

export const Header = () => {
  const { local, setLocal } = useGlobalContext();

  const handleLanguageClick = (lang) => {
    setLocal(lang);
  };

  return (
    <header className='header'>
      <menu className='language-menu'>
        <li className='language-menu__item'>
          <button
            className={`language-menu__item-button ${
              local.includes("ru") ? `language-menu__item-button_selected` : ``
            }`}
            onClick={() => handleLanguageClick("ru")}
          >
            Ru
          </button>
        </li>
        <li className='language-menu__item'>
          <button
            className={`language-menu__item-button ${
              local.includes("en") ? `language-menu__item-button_selected` : ``
            }`}
            onClick={() => handleLanguageClick("en")}
          >
            En
          </button>
        </li>
      </menu>
    </header>
  );
};
