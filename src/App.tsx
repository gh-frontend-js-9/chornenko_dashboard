import React from 'react';
import {BlockMenu} from './сomponents/BlockMenu'
import {DataProjectList} from './сomponents/DataProjectList';
import {TopBlockProject} from './сomponents/TopBlockProject';
import {ListComponent} from "./сomponents/ListComponent";


const App = () => {
    return (
        <div className="App">
            <div>
                <TopBlockProject/>
            </div>


            <div className={'build-block'}>
                <div className={'prosto'}>
                    <BlockMenu/>
                </div>
                <div className={'field-inform'}>

                    <ListComponent/>
                    <DataProjectList/>

                </div>
            </div>


        </div>
    );
}

export default App;
