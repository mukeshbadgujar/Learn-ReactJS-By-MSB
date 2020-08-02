import React from "react";

function MainCode() {
    let curDate = new Date();//(2020, 5, 5, 22);
    curDate = curDate.getHours();
    let greeting = ""
    const cssStyles = {}

    if (curDate >= 1 && curDate < 12) {
        greeting = "Good Morning";
        cssStyles.color = "Yellow"

    } else if (curDate >= 12 && curDate < 19) {
        greeting = "Good Afternoon";
        cssStyles.color = 'Orange'

    } else {
        greeting = "Good Night";
        cssStyles.color = "Gray"

    }

    return <h1 style = { cssStyles }> Hello World Raju { greeting } </h1>;
}

export default MainCode;