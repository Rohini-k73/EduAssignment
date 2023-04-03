import React from 'react';
import '../Styles/home.css';
import Wallpaper from './Wallpaper';
import QuickSearch from './QuickSearch';


class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Wallpaper />
                <QuickSearch />
            </React.Fragment>
        )
    }
}

export default Home;