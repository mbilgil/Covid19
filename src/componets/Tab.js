import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Countries from './Countries';
import Turkey from './Turkey';
import Global from './Global';
import SearchCountries from './SearchCountries';



const Info = () => {
    return (
        <Tabs defaultActiveKey="turkey" id="uncontrolled-tab-example">
            <Tab eventKey="turkey" title="Türkiye" >
                <Turkey />
            </Tab>
            <Tab eventKey="global" title="World" >
                <Global />
            </Tab>
            <Tab eventKey="search" title="Search Country" >
                <SearchCountries />
            </Tab>
        </Tabs>
    );

};

export default Info;