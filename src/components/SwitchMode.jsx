import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";

function SwitchMode({changeMode}) {
    return ( 
        <div>
            <label class="toggle">
                <FontAwesomeIcon icon={faLightbulb} className="toggle__icon"/>
                <input class="toggle-checkbox" type="checkbox" onChange={changeMode}/>
                <div class="toggle-switch"></div>
                <FontAwesomeIcon icon={faMoon} className="toggle__icon"/>
            </label>
        </div>
    );
}

export default SwitchMode;