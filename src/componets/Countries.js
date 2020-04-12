import React, { useState } from 'react';
import { Card, Input } from 'antd';

const { Search } = Input;


const api = {
    base: "https://coronavirus-19-api.herokuapp.com/countries/"
}

const App = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}${query}`)
                .then(res => res.json())
                .then(result => {
                    setData(result);
                    setQuery('');
                    console.log(result);

                });
        }
    }


    return (
        <div >
            <div class="search-box">
                <Search className="search-bar" placeholder="Search and Enter Press"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                    style={{ borderRadius: 30 }}
                />
            </div>

            <div className="country-box">
                <h3 className="text-uppercase">{data.country}</h3>
                <div className="country ">
                    <Card className="text-left bg-4 text-light" style={{ width: '18rem' }}>
                        <h2 className="text-uppercase text-center text-light">Total Test</h2>
                        <h4 className="text-center text-light">{data.totalTests}</h4>
                    </Card>
                </div>
                <div className="country ">
                    <Card className="text-left bg-1 text-light" style={{ width: '18rem' }}>
                        <h2 className="text-uppercase text-center text-light">cases</h2>
                        <h4 className="text-center text-light">{data.cases}</h4>
                    </Card>

                </div>
                <div className="country ">
                    <Card className="text-left bg-2 text-light" style={{ width: '18rem' }}>
                        <h2 className="text-uppercase text-center text-light">deaths</h2>
                        <h4 className="text-center text-light">{data.deaths}</h4>
                    </Card>

                </div>

                <div className="country ">
                    <Card className="text-left bg-3 text-light" style={{ width: '18rem' }}>
                        <h2 className="text-uppercase text-center text-light">recovered</h2>
                        <h4 className="text-center text-light">{data.recovered}</h4>
                    </Card>

                </div>
            </div>
        </div>

    );
};


export default App;