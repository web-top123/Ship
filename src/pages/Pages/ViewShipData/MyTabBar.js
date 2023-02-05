import React, { useState } from 'react';
import classnames from "classnames";
import { Button, Label, Card, CardBody, Col, Input, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table, CardHeader } from "reactstrap";
import { FormGrid, Gutters, VerticalForm, HorizontalForm, HorizontalFormLabelSizing, ColumnSizing, AutoSizing, InlineForms, FloatingLabels } from '../../Forms/FormLayouts/FormlayoutsCode';
import { BaseExample, CardTableExample, PaginationExample, SearchExample, SortingExample, LoadingStateExample, FixedHeaderExample, HiddenColumnsExample } from '../../Tables/GridTables/GridTablesData';

import Flatpickr from "react-flatpickr";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const MyTabBar = ({ cardHeaderTab, cardHeaderToggle }) => {
    // Vertical Nav Tabs
    return (
        <React.Fragment>
            <div className="col-sm-auto">
            <div>
                <Link
                to="/new-data-vote"
                className="btn btn-success"
                >
                    <i className="ri-add-line align-bottom me-1"></i> Add Product
                </Link>
            </div>
            </div>  
            <div className="mb-2 d-flex justify-content-end">
                <div className="d-flex align-items-center">
                    <label className="mb-0 pe-2">Sort:</label>
                    <select className="form-select" aria-label=".form-select-sm" style={{ width: "100px" }}>
                        <option defaultValue="1">One</option>
                        <option Value="2">Two</option>
                        <option Value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className="card-header align-items-center d-flex">
                <div className="flex-shrink-0 ms-2">
                    <Nav tabs className="nav justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0">
                        <NavItem>
                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: cardHeaderTab === "1", })} onClick={() => { cardHeaderToggle("1"); }} >
                                About Ship
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: cardHeaderTab === "2", })} onClick={() => { cardHeaderToggle("2"); }} >
                                Load Data
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: cardHeaderTab === "3", })} onClick={() => { cardHeaderToggle("3"); }} >
                                Product Data
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: cardHeaderTab === "4", })} onClick={() => { cardHeaderToggle("4"); }} >
                                Goods Data
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: cardHeaderTab === "5", })} onClick={() => { cardHeaderToggle("5"); }} >
                                My Trace VIew
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        </React.Fragment>
    )
};

export default MyTabBar;