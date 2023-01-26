import React from 'react';
import { Grid, _ } from 'gridjs-react';

const data = [
    ["01", "Engineer", "1 level", "Senior Implementation Architect", "2023.1.03", "40"],
    ["02", "Engineer", "2 level", "Forward Creative Coordinator", "2023.1.03", "40"],
    ["03", "Engineer", "1 level", "Legacy Functionality Associate", "2023.1.03", "40"],
    ["04", "Engineer", "1 level", "Product Accounts Technician", "2023.1.03", "40"],
    ["05", "Engineer", "2 level", "Customer Data Director", "2023.1.03", "40"],
    ["06", "Engineer", "1 level", "Corporate Identity Director", "2023.1.03", "40"],
    ["07", "Engineer", "1 level", "Lead Applications Associate", "2023.1.03", "40"],
    ["08", "Engineer", "3 level", "Dynamic Assurance Director", "2023.1.03", "40"],
    ["09", "Engineer", "1 level", "Customer Data Director", "2023.1.03", "40"],
    ["10", "Engineer", "1 level", "Senior Response Liaison", "2023.1.03", "40"],
];

const data1 = [
    ["#VL2111", "Jonathan", "07 Oct, 2021", "$24.05", "Paid",],
    ["#VL2110", "Harold", "07 Oct, 2021", "$26.15", "Paid"],
    ["#VL2109", "Shannon", "06 Oct, 2021", "$21.25", "Refund"],
    ["#VL2108", "Robert", "05 Oct, 2021", "$25.03", "Paid"],
    ["#VL2107", "Noel", "05 Oct, 2021", "$22.61", "Paid"],
    ["#VL2106", "Traci", "04 Oct, 2021", "$24.05", "Paid"],
    ["#VL2105", "Kerry", "04 Oct, 2021", "$26.15", "Paid"],
    ["#VL2104", "Patsy", "04 Oct, 2021", "$21.25", "Refund"],
    ["#VL2103", "Cathy", "03 Oct, 2021", "$22.61", "Paid"],
    ["#VL2102", "Tyrone", "03 Oct, 2021", "$25.03", "Paid"],
];

const data2 = [
    ["Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
    ["Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
    ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
    ["Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
    ["Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
    ["Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
    ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
    ["Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
    ["Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
    ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"],
];

// Base Example
const BaseExample = () => {
    const[pagination, setPaginiation] = React.useState("6");

    const selectSetPaginiation = (pageValue) => {
        setPaginiation(pageValue)
    };
    return (
        <React.Fragment>
            <select className="form-select table-per-page" onChange={(e)=> selectSetPaginiation(e.target.value)}>
                <option value="6">6</option>
                <option value="10">10</option>
            </select>
            <Grid
                data={data}
                columns={[{
                    name: 'ID',
                    formatter: (cell) => _(<span className="fw-semibold">{cell}</span>),
                },
                    "Sort",
                {
                    name: 'Level',
                },
                    "Title", "Browser Date",
                {
                    name: "Count",
                    width: 60
                }
                ]}
                search={true}
                sort={true}
                resizable = {true}
                pagination={{ enabled: true, limit: pagination, }}
            />
        </React.Fragment>
    );
};

// Card Table
const CardTableExample = () => {
    return (
        <React.Fragment>
            <Grid
                data={data2}
                columns={["Name", "Email", "Position", "Company", "Country"]}
                sort={true}
                pagination={{ enabled: true, limit: 5, }}
            />
        </React.Fragment>
    );
};

// Pagination
const PaginationExample = () => {
    return (
        <React.Fragment>
            <React.Fragment>
                <Grid
                    data={data1}
                    columns={[{
                        name: 'ID',
                        width: '120px',
                        formatter: (cell) => _(<a href="/#" className="fw-medium"> {cell} </a>)
                    }, "Name", "Date", "Total", "Status",
                    {
                        name: 'Actions',
                        width: '100px',
                        formatter: (cell) => _(<button type='button' className='btn btn-sm btn-light'> Details </button>)
                    },
                    ]}
                    pagination={{ enabled: true, limit: 5, }}
                />
            </React.Fragment>
        </React.Fragment>
    );
};

// Search
const SearchExample = () => {
    return (
        <React.Fragment>
            <Grid
                data={data2}
                columns={["Name", "Email", "Position", "Company", "Country"]}
                search={true}
                pagination={{ enabled: true, limit: 5, }}
            />
        </React.Fragment>
    );
};

// Sorting
const SortingExample = () => {
    return (
        <React.Fragment>
            <Grid
                data={data2}
                columns={["Name", "Email", "Position", "Company", "Country"]}
                sort={true}
                pagination={{ enabled: true, limit: 5, }}
            />
        </React.Fragment>
    );
};

// Loading State
const LoadingStateExample = () => {
    return (
        <React.Fragment>
            <Grid
                data={function () {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve(data2);
                        }, 2000);
                    });
                }}
                columns={[
                    "Name", "Email", "Position", "Company", "Country"]}
                sort={true}
                pagination={{ enabled: true, limit: 5, }}
            />            
        </React.Fragment>
    );
};

// Fixed Header
const FixedHeaderExample = () => {
    return (
        <React.Fragment>
            <Grid
                data={data2}
                columns={[
                    "Name", "Email", "Position", "Company", "Country"]}
                sort={true}
                pagination={{ enabled: true, limit: 10, }}
                fixedHeader={true}
                height={'400px'}
            />
        </React.Fragment>
    );
};

// Hidden Columns
const HiddenColumnsExample = () => {
    return (
        <React.Fragment>
            <Grid
                data={data}
                columns={[
                    {
                        name: 'ID',
                        hidden: true
                    },
                    "Name", "Email", "Position", "Company", {
                        name: 'Country',
                        hidden: true
                    }
                ]}
                sort={true}
                pagination={{ enabled: true, limit: 5, }}
            />
        </React.Fragment>
    );
};



export { BaseExample, CardTableExample, PaginationExample, SearchExample, SortingExample, LoadingStateExample, FixedHeaderExample, HiddenColumnsExample };
