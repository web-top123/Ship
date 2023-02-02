import React, {useState, useEffect} from 'react';
import { CardBody, TabPane } from "reactstrap";
import TableContainer from "../../../../Components/Common/TableContainer";
import { getFindBrowseHistoriesById, getAuthenticatedUser } from '../../../../helpers/fakebackend_helper';

import { Link } from "react-router-dom";
import { columnsData, dataList } from './TestData'
import { useMemo } from "react";

// const userId = getAuthenticatedUser().id;


const MyBrowser = () => {
    const columns = useMemo(() => columnsData, []);

    // const [myInformation, setmyInformation] = useState([])
    // useEffect(() => {
    //     // Create function inside useEffect so that the function is only
    //     // created everytime the useEffect runs and not every render.
    //     const fetchData = async () => {
    //         const result = await getFindBrowseHistoriesById(userId);
    
    //         console.log(result);
    //     };
    
    //     //Run data fetching function.
    //     fetchData();
    // }, []);

    return (
        <React.Fragment>
            <TabPane tabId="2" id="v-pills-browser">
                    <TableContainer
                        columns={columns}
                        data={dataList}
                        isGlobalFilter={false}
                        isGlobalSearch = {true}
                        isAddUserList={false}
                        customPageSize={10}
                        divClass="table-responsive mb-1"
                        tableClass="mb-0 table-borderless"
                        theadClass="text-muted"
                    />
            </TabPane>
        </React.Fragment>
    )
}

export default MyBrowser;