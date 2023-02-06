import React, { useState } from 'react';
import { TabPane, Table, Nav, NavItem, NavLink} from "reactstrap";
import { Link } from 'react-router-dom';
import { columnsShipData, ShipDataList, columnsLoadData, LoadDataList, columnsProductData, ProductDataList, columnsGoodsData, GoodsDataList } from './TestData'
import TableContainer from "../../../Components/Common/TableContainer";
import { useMemo } from "react";
import classnames from "classnames";

const MyPurchase = () => {
    const columnsLoad = useMemo(() => columnsLoadData, []);
    const columnsShip = useMemo(() => columnsShipData, []);
    const columnsProduct = useMemo(() => columnsProductData, []);
    const columnsGoods = useMemo(() => columnsGoodsData, []);
    
    // Card Header Tabs
    const [cardHeaderTab, setcardHeaderTab] = useState("1");
    const cardHeaderToggle = (tab) => {
        if (cardHeaderTab !== tab) {
            setcardHeaderTab(tab);
        }
    };

    return (
        <React.Fragment>
            <TabPane tabId="1" id="v-pills-purchase">
                <div className="all-data-list" >
                    <TableContainer
                            columns={columnsShip}
                            data={ShipDataList}
                            isGlobalFilter={false}
                            isGlobalSearch = {true}
                            isAddUserList={false}
                            customPageSize={10}
                            divClass="table-responsive mb-1"
                            tableClass="mb-0 table-borderless overflow-hidden"
                            theadClass="text-muted"
                        />
                </div>
            </TabPane>
            <TabPane tabId="2" id="v-pills-purchase">
                <div className="all-data-list" >
                    <TableContainer
                            columns={columnsLoad}
                            data={LoadDataList}
                            isGlobalFilter={false}
                            isGlobalSearch = {true}
                            isAddUserList={false}
                            customPageSize={10}
                            divClass="table-responsive mb-1"
                            tableClass="mb-0 table-borderless overflow-hidden"
                            theadClass="text-muted"
                        />
                </div>
            </TabPane>
            <TabPane tabId="3" id="v-pills-purchase">
                <div className="all-data-list" >
                    <TableContainer
                            columns={columnsProduct}
                            data={ProductDataList}
                            isGlobalFilter={false}
                            isGlobalSearch = {true}
                            isAddUserList={false}
                            customPageSize={10}
                            divClass="table-responsive mb-1"
                            tableClass="mb-0 table-borderless overflow-hidden"
                            theadClass="text-muted"
                        />
                </div>
            </TabPane>
            <TabPane tabId="4" id="v-pills-purchase">
                <div className="all-data-list" >
                    <TableContainer
                            columns={columnsGoods}
                            data={GoodsDataList}
                            isGlobalFilter={false}
                            isGlobalSearch = {true}
                            isAddUserList={false}
                            customPageSize={10}
                            divClass="table-responsive mb-1"
                            tableClass="mb-0 table-borderless overflow-hidden"
                            theadClass="text-muted"
                            tbodyClass="mt-5 text-muted"
                        />
                </div>
            </TabPane>
        </React.Fragment>
    )
}

export default MyPurchase;