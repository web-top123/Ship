
import { Grid, _ } from 'gridjs-react';
import React, { useEffect, useState } from 'react';
import { Col, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabPane, TabContent, UncontrolledDropdown, UncontrolledTooltip, UncontrolledCollapse, ButtonGroup, Button, UncontrolledButtonDropdown, Modal, ModalBody, ModalHeader, Input, Progress, Card, CardHeader, CardBody, Alert } from 'reactstrap';
import classnames from "classnames";
import { createRoot } from "react-dom/client";
const data = [
    ["01", "Composition and Characteristics of Ship Power Grid", "Free", "50th", "10", "40"],
    ["02", "Default value of ship power grid", "Free", "50th", "10", "40"],
    ["03", "Composition and classification of ship power grids", "Free", "50th", "", "40"],
    ["04", "Composition and Characteristics of Ship Power Grid", "Free", "50th", "10", "40"],
    ["05", "Default value of ship power grid", "Free", "50th", "10", "40"],
    ["06", "Default value of ship power grid", "Free", "50th", "10", "40"],
    ["07", "Engineer", "Free", "50th", "", "40"],
    ["08", "Engineer", "100", "50th", "", "40"],
    ["09", "Engineer", "Free", "50th", "10", "40"],
    ["10", "Engineer", "Free", "50th", "", "40"],
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
    const [pagination, setPaginiation] = React.useState("6");

    const selectSetPaginiation = (pageValue) => {
        setPaginiation(pageValue)
    };

//aaa
const ref = React.useRef(null);
    //Modal
    const [modal_togFirst, setmodal_togFirst] = useState(false);
    function tog_togFirst() {
        setmodal_togFirst(!modal_togFirst);
        setTitle("dddd")
        console.log("aaaaaaa",ref.current);
    }
    const [modal_togSecond, setmodal_togSecond] = useState(false);
    function tog_togSecond() {
        setmodal_togSecond(!modal_togSecond);
    }


    // Border Top Nav Justified Tabs
    const [topBorderjustifyTab, settopBorderjustifyTab] = useState("1");
    const topBorderJustifytoggle = (tab) => {
        if (topBorderjustifyTab !== tab) {
            settopBorderjustifyTab(tab);
        }
    };



    //title and description
    const [title, setTitle] = useState("Composition and Characteristics of Ship Power Grid");

    const [description, setDescription] = useState("Composition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power Grid");



    
  

   
    
  












    return (
        <React.Fragment>
            <select className="form-select table-per-page" onChange={(e) => selectSetPaginiation(e.target.value)}>
                <option value="6">6</option>
                <option value="10">10</option>
            </select>
            <Grid
                data={data}
                columns={[{
                    name: 'ID',
                    width: 40,
                    formatter: (cell) => _(<span className="fw-semibold">{cell}</span>),
                },

                {
                    name: "Title",
                    width: 900,
                    formatter: (cell) => _(<span className="fw-semibold" onClick={() => tog_togFirst()}><div ref={ref} > {cell}</div> </span>),
                },
                {
                    name: "Score",
                    width: 60
                },
                {
                    name: "View",
                    width: 60
                },
                {
                    name: "Rate",
                    width: 60
                }
                ]}
                search={true}
                sort={true}
                resizable={true}
                pagination={{ enabled: true, limit: pagination, }}
            />



            <Modal
                isOpen={modal_togFirst}
                toggle={() => {
                    tog_togFirst();
                }}
                id="firstmodal"
                centered
            >
                <ModalHeader>
                   
                    <Button
                        type="button"
                        className="btn-close"
                        onClick={() => {
                            setmodal_togFirst(false);
                        }}
                        aria-label="Close"
                    >
                    </Button>
                </ModalHeader>
                <ModalBody className="text-center">

                    <div className=" pt-4">
                        <Row>
                            <Col lg={3}>Title:</Col>
                            <Col lg={9}> <h4>{title}</h4></Col>
                        </Row>
                        <Row>
                            <Col lg={3}>Description</Col>
                            <Col lg={9}> <p className="text-muted"> {description}</p></Col>
                        </Row>
                       
                       

                        <Button className="btn btn-warning m-3" onClick={() => { tog_togSecond(); tog_togFirst(false); }}>
                            Buy
                        </Button>
                        <Button className="btn btn-success m-3" onClick={() => { tog_togSecond(); tog_togFirst(false); }}>
                            Charge
                        </Button>
                        <Button className="btn btn-light m-3" onClick={() => { tog_togSecond(); tog_togFirst(false); }}>
                            History
                        </Button>

                    </div>
                </ModalBody>
            </Modal>
            {/* <Modal
    isOpen={modal_togSecond}
    toggle={() => {
        tog_togSecond();
    }}
    id="secondmodal"
    centered
>
    <ModalHeader>
        Modal 2
        <Button
            type="button"
            className="btn-close"
            onClick={() => {
                setmodal_togSecond(false);
            }}
            aria-label="Close"
        ></Button>
    </ModalHeader>
    <ModalBody className="text-center p-5">
        <lord-icon
            src="https://cdn.lordicon.com/zpxybbhl.json"
            trigger="loop"
            colors="primary:#405189,secondary:#0ab39c"
            style={{ width: "150px", height: "150px" }}>
        </lord-icon>
        <div className="mt-4 pt-3">
            <h4 className="mb-3">Follow-Up Email</h4>
            <p className="text-muted mb-4">Hide this modal and show the first with the button below Automatically Send your invitees a follow -Up email.</p>
            <div className="hstack gap-2 justify-content-center">
                <Button className="btn btn-soft-danger" onClick={() => { tog_togFirst(); tog_togSecond(false); }}>
                    Back to First
                </Button>
                <Button color="light" onClick={() => tog_togSecond(false)}>Close</Button>
            </div>
        </div>
    </ModalBody>
</Modal> */}



            <Modal
                isOpen={modal_togSecond}
                toggle={() => {
                    tog_togSecond();
                }}
                id="secondmodal"
                centered
            >
                <ModalHeader className='purchase-setting-header'>
                    Purchase
                    <Button
                        type="button"
                        className="btn-close"
                        onClick={() => {
                            setmodal_togSecond(false);
                        }}
                        aria-label="Close"

                    >

                    </Button>
                </ModalHeader>
                <div className="modal-body text-center">
                    <div className=" ">
                        <h4 className="mb-4">You can purchase with real or free score</h4>
                        <Nav tabs className="nav nav-tabs nav-border-top nav-border-top-primary mb-3">
                            <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: topBorderjustifyTab === "1", })} onClick={() => { topBorderJustifytoggle("1"); }} >
                                    Real score
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: topBorderjustifyTab === "2", })} onClick={() => { topBorderJustifytoggle("2"); }} >
                                    Free score
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={topBorderjustifyTab} className="text-muted">
                            <TabPane tabId="1" id="nav-border-top-home">
                                <div className="d-block purchase-pro-setting mt-5">
                                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                        <span>current: </span><p>100 Won</p>
                                    </div><br /><hr />
                                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                        <span>pay: </span><p style={{ position: "relative", top: "-3px" }}><Input type="number" id="basiInput purchase-input-sl" style={{ width: "30px", display: "inline", direction: "rtl", padding: "3px" }} />100 Won</p>
                                    </div><br /><hr />
                                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                        <span>real valance: </span><p>none</p>
                                    </div><br /><hr /><br />
                                </div>
                            </TabPane>

                            <TabPane tabId="2" id="nav-border-top-home">
                                <div className="d-block purchase-pro-setting mt-5">
                                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                        <span>current: </span><p>100 Won</p>
                                    </div><br /><hr />
                                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                        <span>pay: </span><p style={{ position: "relative", top: "-3px" }}><Input type="number" id="basiInput purchase-input-sl" style={{ width: "30px", display: "inline", direction: "rtl", padding: "3px" }} />100 Won</p>
                                    </div><br /><hr />
                                    <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                        <span>free valance: </span><p>none</p>
                                    </div><br /><hr /><br />
                                </div>
                            </TabPane>
                        </TabContent>
                        <div className='purchase-button-group mb-5'>
                            <Button color="warning" onClick={() => { tog_togSecond(false); }} style={{ float: "left" }}>
                                buy
                            </Button>
                            <Button color="success" onClick={() => { }} style={{ float: "right" }}>
                                charging score
                            </Button>
                        </div><br /><br />
                    </div>
                </div>
            </Modal>
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
