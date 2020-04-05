import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Countries from './Countries';
import Global from './Global';

const Info = () => {
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="country" title="Country">
                <Countries />
            </Tab>
            <Tab eventKey="global" title="Global">
                <Global />
            </Tab>
        </Tabs>
    );

};

export default Info;