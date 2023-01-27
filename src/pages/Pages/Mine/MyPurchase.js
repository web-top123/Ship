import React from 'react';
import { TabPane, Table } from "reactstrap";
import { Link } from 'react-router-dom';
import { columnsPurchaseData, PurchaseDataList } from './TestData'
import TableContainer from "../../../Components/Common/TableContainer";
import { useMemo } from "react";

const MyPurchase = () => {
    const columnsPurchase = useMemo(() => columnsPurchaseData, []);
    return (
        <React.Fragment>
            <TabPane tabId="4" id="v-pills-purchase">
                <div className="mb-2 d-flex justify-content-between">
                    <h4 className="card-title flex-grow-1">Total Purchase Count: 11</h4>
                    <div className="d-flex align-items-center">
                        <label className="mb-0 pe-2">Sort:</label>
                        <select className="form-select" aria-label=".form-select-sm" style={{ width: "100px" }}>
                            <option defaultValue="1">One</option>
                            <option Value="2">Two</option>
                            <option Value="3">Three</option>
                        </select>
                    </div>
                </div>
                <TableContainer
                        columns={columnsPurchase}
                        data={PurchaseDataList}
                        isGlobalFilter={false}
                        isGlobalSearch = {true}
                        isAddUserList={false}
                        customPageSize={10}
                        divClass="table-responsive mb-1"
                        tableClass="mb-0 table-borderless"
                        theadClass="table-light text-muted"
                    />
            </TabPane>
        </React.Fragment>
    )
}

export default MyPurchase;