import React, {Component} from "react";
import QuickSearch from "./src/Components/QuickSearch";
import Wallpaper from "./src/Components/Wallpaper";

class Home extends Component {
    render() {
        return (
            <div>
                <Wallpaper />
                <QuickSearch />

        
            </div>
        )
    }
}