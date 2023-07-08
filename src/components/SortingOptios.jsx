import React, {useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark , faArrowUpAZ, faCalendarDay, faStar} from "@fortawesome/free-solid-svg-icons"; 

function SortingOptions({sortingAZ, sortingNewest, sortingPriority}) {
    const [menu, setMenu] = useState(false)

    return ( 
        <div className={ menu ? "sorting__container sorting__container--active" : "sorting__container"}>
            {menu ? <FontAwesomeIcon icon={faXmark} className="sorting__icon" onClick={() => setMenu(!menu)}/> : <FontAwesomeIcon icon={faBars} className="sorting__icon" onClick={() => setMenu(!menu)}/>}
            <h3 className="sorting__title">Set the sorting method</h3>

            <div className="sorting__options-container">
                <div className="sorting__option">
                    <p onClick={sortingAZ}>Sort from A to Z <FontAwesomeIcon icon={faArrowUpAZ} className="sorting__option-icon"/></p>
                </div>

                <div className="sorting__option">
                    <p onClick={sortingPriority}>Sort by priority <FontAwesomeIcon icon={faStar} className="sorting__option-icon"/></p>
                </div>

                <div className="sorting__option">
                    <p onClick={sortingNewest}>Sort from most recent <FontAwesomeIcon icon={faCalendarDay} className="sorting__option-icon"/></p>
                </div>
            </div>
        </div>
     );
}

export default SortingOptions;