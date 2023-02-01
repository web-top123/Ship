import React, { useState } from 'react';
import classnames from "classnames";
import { Button, Label, Card, CardBody, Col, Input, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table, CardHeader } from "reactstrap";
import { FormGrid, Gutters, VerticalForm, HorizontalForm, HorizontalFormLabelSizing, ColumnSizing, AutoSizing, InlineForms, FloatingLabels } from '../../Forms/FormLayouts/FormlayoutsCode';
import { BaseExample, CardTableExample, PaginationExample, SearchExample, SortingExample, LoadingStateExample, FixedHeaderExample, HiddenColumnsExample } from '../../Tables/GridTables/GridTablesData';

import Flatpickr from "react-flatpickr";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const MySidebar = ({ toggleVertical, verticalTab }) => {
    // Vertical Nav Tabs
    return (
        <React.Fragment>
            <div className="card p-0 card-body">
                <div className="rounded-top alert-solid border-0 rounded-0 m-0 d-flex align-items-center justify-content-center alert alert-danger fade show text-center">
                    <span>Article Sort Selection</span>
                </div>
                <div className="question-article-sel d-flex align-items-center flex-column pt-3">
                    <a href="#">Total </a>
                    <a href="#">Notification </a>
                    <a href="#">Question </a>
                    <a href="#">Genral </a>
                    <a href="#">Software </a>
                    <a href="#">Foreign </a>
                    <a href="#">Other </a>
                </div>
            </div>
            <div className="card mt-3 p-0 card-body">
                <div className="rounded-top alert-solid border-0 rounded-0 m-0 d-flex align-items-center justify-content-center alert alert-danger fade show text-center">
                    <span>Best Voter</span>
                </div>
                <div className="question-vot-sel d-flex align-items-center flex-column pt-3">
                    <a href="#">id123 Robert</a>
                    <a href="#">id123 Robert </a>
                    <a href="#">id123 Robert </a>
                    <a href="#">id123 Robert </a>
                    <a href="#">id123 Weston </a>
                    <a href="#">id123 Robert </a>
                    <a href="#">id123 Robert </a>
                </div>
            </div>
            <div className="card ribbon-box border shadow-none mb-lg-0">
                <div className="card-body text-muted">
                    <span className="ribbon-three ribbon-three-success"><span>News</span></span><br/><br/><br/>
                    <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MySidebar;