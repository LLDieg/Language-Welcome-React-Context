import "../App.css";

import LanguageChooser from "./LanguageChooser";

function Header(props) {
  return (
    <div>
      <h1>LANGUAGE TRANSLATOR</h1>

      <LanguageChooser setLanguage={props.setLanguage}></LanguageChooser>
    </div>
  );
}

export default Header;
