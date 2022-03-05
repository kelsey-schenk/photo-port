import React, { useState } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import React, { useEffect } from 'react';


function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">📸</span>{" "} Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <span onClick={() => handleClick("Contact")}>
                        Contact
                        </span>
                    </li>
                    {categories.map((category) => {
                        <li className={`mx-1${
                            currentCategory.name === category.name && 'navActive'
                        }`} key={category.name}>
                        {/* use built in onClick method */}
                        <span onClick={() => { setCurrentCategory(category) }} >
                            {capitalizeFirstLetter(category.name)}
                        </span>
                    </li>
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;