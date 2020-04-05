import React, { useState,useEffect } from 'react';
import { Card, Tag } from 'antd';


const api = {
    base: "https://coronavirus-19-api.herokuapp.com/all"
}

const About = () => {

    const [data, setData] = useState([]);


   useEffect(()=>{
       fetch(`${api.base}`)
       .then(res=>res.json())
       .then(res=>{
           setData(res)
       })
       .catch(e=>{
           console.log(e);
       })
   });

    return (
            <div className="country-box">
                <div className="country">
                    <Card title="Global Stats" style={{ width: 300 }}>
                        <p>Cases : <Tag color="blue">{data.cases}</Tag></p>
                        <p>Deaths : <Tag color="red">{data.deaths}</Tag></p>
                        <p>Recovered : <Tag color="green">{data.recovered}</Tag></p>
                    </Card>
                </div>
            </div>

    );
};


export default About;