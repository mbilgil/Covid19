import React, { useState, useEffect } from 'react';
import { Card } from 'antd';


const api = {
    base: "https://coronavirus-19-api.herokuapp.com/countries/Turkey"
}

const App = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch(`${api.base}`)
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
            .catch(e => {
                console.log(e);
            })
    });

    return (
        <div >
            <div className="country-box">
                <img style={{ marginTop: '50px', marginBottom: '50px' }} alt="" src="https://restcountries.eu/data/tur.svg" width="240" height="160" className="d-inline-block align-top" />
                <h3 className="text-uppercase">TÜRKİYE</h3>
                <div className="country ">
                    <Card className="text-left bg-4 text-light" style={{ width: '18rem' }}>
                        <h2 className="text-uppercase text-center text-light">Toplam Test</h2>
                        <h4 className="text-center text-light">{data.totalTests}</h4>
                    </Card>

                </div>
                <div className="country ">
                    <Card className="text-left bg-1 text-light" style={{ width: '18rem' }}>
                        <h2 className="text-uppercase text-center text-light">Vaka Sayısı</h2>
                        <h4 className="text-center text-light">{data.cases}</h4>
                    </Card>

                </div>
                <div className="country ">
                    <Card className="text-left bg-2 text-light" style={{ width: '18rem' }}>
                        <h2 className="text-uppercase text-center text-light">Ölüm</h2>
                        <h4 className="text-center text-light">{data.deaths}</h4>
                    </Card>

                </div>

                <div className="country ">
                    <Card className="text-left bg-3 text-light" style={{ width: '18rem' }}>
                        <h2 className="text-uppercase text-center text-light">İyİleşen</h2>
                        <h4 className="text-center text-light">{data.recovered}</h4>
                    </Card>

                </div>

            </div>
        </div>

    );
};


export default App;