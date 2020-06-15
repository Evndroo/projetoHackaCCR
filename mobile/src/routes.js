import React from "react"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
//importar paginas

import Home from "./Pages/Home"
import Missions from "./Pages/Missions"
import Details from "./Pages/Details"



const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        Missions,
        Details
    })
);



export default Routes;
