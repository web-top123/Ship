import React, { useEffect, useState, useMemo } from 'react';
import { TabPane, Table, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from 'react-router-dom';
import { columnsShipData, ShipDataList, columnsLoadData, LoadDataList, columnsProductData, ProductDataList, columnsGoodsData, GoodsDataList } from './TestData'
import TableContainer from "../../../Components/Common/TableContainer";
import classnames from "classnames";

import { getDatas, deleteData } from "../../../helpers/fakebackend_helper";


const MyPurchase = () => {
    const columnsLoad = useMemo(() => columnsLoadData, []);
    const columnsShip = useMemo(() => columnsShipData, []);
    const columnsProduct = useMemo(() => columnsProductData, []);
    const columnsGoods = useMemo(() => columnsGoodsData, []);


    // dataList = dataList.sort((a, b) => a.Id - b.Id);
    // setOriginaldataList(dataList);

    const [dataList, setDataList] = useState([]);
    useEffect(() => {
        getDataList();
    }, []);

    const getDataList = () => {
        getDatas().then(data => {
            setDataList(data);
        })
    }

    //delete order
    const [deleteModal, setDeleteModal] = useState(false);
    const [currentID, setCurrentID] = useState(false);

    const onClickDelete = (data) => {
        setCurrentID(data.id);
        // setData(data);
        setDeleteModal(true);
    };

    const handleDeleteData = () => {
        if (currentID) {
            deleteData(currentID).then(res => {
                if (res == 1) {
                    getDataList();
                    setDeleteModal(false);
                } else {
                    setDeleteModal(false);
                }
            })
        }
    };

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
                        data={dataList}
                        isGlobalFilter={false}
                        isGlobalSearch={true}
                        isAddUserList={false}
                        customPageSize={10}
                        divClass="table-responsive mb-1"
                        tableClass="mb-0 table-borderless overflow-hidden"
                        theadClass="text-muted"
                    />
                </div>
            </TabPane>
            <TabPane tabId="2" id="v-pills-purchase">
                <div
                    id="table-product-list-all"
                    className="all-data-list"
                >
                    {dataList && dataList !== "" ? (
                        <TableContainer
                            columns={columnsLoad}
                            data={dataList}
                            isGlobalFilter={false}
                            isGlobalSearch={true}
                            isAddUserList={false}
                            customPageSize={10}
                            divClass="table-responsive mb-1"
                            tableClass="mb-0 table-borderless overflow-hidden"
                            theadClass="text-muted"
                        />
                    ) : (
                        <div className="py-4 text-center">
                            <div>
                                <lord-icon
                                    src="https://cdn.lordicon.com/msoeawqm.json"
                                    trigger="loop"
                                    colors="primary:#405189,secondary:#0ab39c"
                                    style={{ width: "72px", height: "72px" }}
                                ></lord-icon>
                            </div>

                            <div className="mt-4">
                                <h5>Sorry! No Result Found</h5>
                            </div>
                        </div>
                    )}
                </div>
            </TabPane>
            <TabPane tabId="3" id="v-pills-purchase">
                <div className="all-data-list" >
                    <TableContainer
                        columns={columnsProduct}
                        data={dataList}
                        isGlobalFilter={false}
                        isGlobalSearch={true}
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
                        data={dataList}
                        isGlobalFilter={false}
                        isGlobalSearch={true}
                        isAddUserList={false}
                        customPageSize={10}
                        divClass="table-responsive mb-1"
                        tableClass="mb-0 table-borderless overflow-hidden"
                        theadClass="text-muted"
                        tbodyClass="mt-5"
                    />
                </div>
            </TabPane>
        </React.Fragment>
    )
}

export default MyPurchase;