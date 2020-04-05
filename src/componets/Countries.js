import React, { useState } from 'react';
import { Card, Tag, Input } from 'antd';

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
                <Search
                    className="search-bar"
                    placeholder="Search and Enter Press"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                    style={{ width: 350, marginLeft: '300px', marginBottom: '30px' }}
                />
            </div>
            <div className="country-box">
                <div className="country">
                    <Card title={data.country} style={{ width: 300 }}>
                        <p>Cases : <Tag color="blue">{data.cases}</Tag></p>
                        <p>Deaths : <Tag color="red">{data.deaths}</Tag></p>
                        <p>Recovered : <Tag color="green">{data.recovered}</Tag></p>
                    </Card>
                </div>
            </div>
        </div>

    );
};


export default App;