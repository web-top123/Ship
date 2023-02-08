import React from 'react';
import { CardBody, TabPane } from "reactstrap";
import { BaseExample } from '../../Tables/GridTables/GridTablesData';
import TableContainer from "../../../Components/Common/TableContainer";


import { Link } from "react-router-dom";
import { columnsData, datasList } from './TestData'
import { useMemo } from "react";

const MyBrowser = () => {
    const columns = useMemo(() => columnsData, []);
    return (
        <React.Fragment>
            <TabPane tabId="5" id="v-pills-browser">
                <TableContainer
                    columns={columns}
                    data={datasList}
                    isGlobalFilter={false}
                    isGlobalSearch = {true}
                    isAddUserList={false}
                    customPageSize={10}
                    divClass="table-responsive mb-1"
                    tableClass="mb-0 table-borderless overflow-hidden"
                    theadClass=" text-muted"
                    tbodyClass=" text-muted tbody-style"
                />
            </TabPane>
        </React.Fragment>
    )
}

export default MyBrowser;