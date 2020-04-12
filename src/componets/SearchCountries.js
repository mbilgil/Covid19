import React, { useState, useEffect } from 'react';
import './SearchCountries.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

export default function SearchCountries() {
    const [time, setTime] = useState(0);
    setInterval(() => {
        let date = new Date();
        setTime(date.toLocaleTimeString())
    }, 1000)
    return (
        <React.Fragment>
            <header> 
                <div className="time">
                    <h4> Time:  {time}</h4>
                </div>

            </header>

            <section className="table_section">
                <StickyHeadTable />
            </section>
        </React.Fragment>
    )
}

const columns = [
    { id: 'country_name', label: 'Country Name', minWidth: 120 },

    { id: 'cases', label: 'Cases', minWidth: 100 },
    {
        id: 'today_cases',
        label: 'Today Cases',
        minWidth: 120,
        align: 'right',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'deaths',
        label: 'Deaths',
        minWidth: 120,
        align: 'right',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'today_deaths',
        label: 'Today Deaths',
        minWidth: 120,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'recovered',
        label: 'Recovered',
        minWidth: 120,
        align: 'right',
        format: (value) => value.toFixed(2)
    }
];

function createData(country_name, cases, today_cases, deaths, today_deaths, recovered) {
    return { country_name, cases, today_cases, deaths, today_deaths, recovered };
}
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});
function StickyHeadTable() {

    const [apiLoading, setApiLoading] = useState('');
    const [total_country, setTotal_country] = useState(0);
    const [total_cases, setTotal_cases] = useState(0);
    const [total_today_cases, setTotal_today_cases] = useState(0);
    const [total_deaths, setTotal_deaths] = useState(0);
    const [total_today_deaths, setTotal_today_deaths] = useState(0);
    const [total_recovered, setTotal_recovered] = useState(0);

    useEffect(() => {
        document.title = 'Covid19 Stats - @mbilgil'
        const api_url = 'https://corona.lmao.ninja/countries?sort=cases';
        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                //  console.log(data)
                const api_result = data.map((i) =>
                    createData(<span> <img id="countryFlag" src={i.countryInfo.flag} alt="Flag" />  {i.country}</span>
                        , i.cases, i.todayCases, i.deaths, i.todayDeaths, i.recovered),

                )
                //  console.log(api_result)
                // set api loading

                setApiLoading(api_result);

                // set total country 
                setTotal_country(data.length);

                // set total cases 

                let total_cases = data.map(i => i.cases);
                setTotal_cases(total_cases.reduce((a, b) => a + b));
                // set total today cases
                let total_today_cases = data.map(i => i.todayCases);
                setTotal_today_cases(total_today_cases.reduce((a, b) => a + b));
                // set deaths 
                let total_deaths = data.map(i => i.deaths);
                setTotal_deaths(total_deaths.reduce((a, b) => a + b));
                // set today deaths
                let total_today_deaths = data.map(i => i.todayDeaths);
                setTotal_today_deaths(total_today_deaths.reduce((a, b) => a + b));
                // set total recovered 
                let total_recovered = data.map(i => i.recovered);
                setTotal_recovered(total_recovered.reduce((a, b) => a + b))
            })
            .catch(() => {
                console.log('We catch the api error see your covid api')
            })
    })
    const rows = apiLoading === '' ?
        [
            createData('Loading', 'Loading', 'Loading', 'Loading', 'Loading', 'Loading'),

        ] :
        apiLoading
        ;
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(300);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const inputSearch = (e) => {
        let filter = e.target.value.toUpperCase();
        let tablerowControl = document.querySelectorAll('#tablerowControl');
        tablerowControl.forEach(i => {
            let txtValue = i.textContent || i.innerText;
            (txtValue.toUpperCase().indexOf(filter) > -1) ?
                i.style.display = '' :
                i.style.display = 'none'
        })
    }
    return (
        <Paper className={classes.root}>
            <div className="table_option">
                <input type="text" id="input_search" onInput={inputSearch} placeholder="Search Country" />
                <span className="wordwide">
                    Wordwide
        </span>
                <span>Country: {total_country} </span>
                <span>Cases: {total_cases}</span>
                <span>Today Cases: {total_today_cases}</span>
                <span>Deaths: {total_deaths}</span>
                <span>Today Deaths: {total_today_deaths} </span>
                <span>Recovered: {total_recovered}</span>
            </div>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>

                    </TableHead>

                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, nikhil_01774372294) => {
                            return (
                                <TableRow id="tablerowControl" hover role="checkbox" tabIndex={-1} key={nikhil_01774372294}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[300]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
