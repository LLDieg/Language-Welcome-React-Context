
import "../App.css";



function LanguageChooser(props) {

//const [language, setLanguage] = useState(" ")



function handleChange(e){
//language = e.target.value;
//setLanguage(value);

props.setLanguage(e.target.value)

//console.log(e.target.value)
}



  return (
<div>
<select className="Selecionar" onChange={handleChange} name="choose" id="">
        <option value="Ger">Deutch 🇩🇪 </option>
        <option value="Eng">English 🇺🇸 </option>
        <option value="Afg">افغانستان 🇦🇫 </option>
        <option value="Spn">Español 🇵🇪 </option>
        <option value="Frn">français 🇫🇷 </option>
        <option value="Tur">Türkiye 🇹🇷  </option>
    </select>





</div>



  );
};

export default LanguageChooser;
