import React from 'react';
import { TabPane, Table } from "reactstrap";
import { Link } from 'react-router-dom';

const MyTest = () => {
    return (
        <React.Fragment>
            <TabPane tabId="3" id="v-pill-test">
                <div className="table-responsive">
                    <b>Passed Test</b>
                    <Table className="align-middle table-nowrap mb-0">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Sort</th>
                                <th scope="col">Level</th>
                                <th scope="col">Testing Problem Counter</th>
                                <th scope="col">Passed Counter</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><Link to="#" className="fw-medium">1</Link></th>
                                <td>Electric</td>
                                <td>1 Level</td>
                                <td>20</td>
                                <td>16</td>
                            </tr>
                            <tr>
                                <th scope="row"><Link to="#" className="fw-medium">2</Link></th>
                                <td>Ship</td>
                                <td>2 Level</td>
                                <td>30</td>
                                <td>15</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
                <div className="table-responsive pt-5">
                    <b>Progressing Test</b>
                    <Table className="align-middle table-nowrap mb-0">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Sort</th>
                                <th scope="col">Level</th>
                                <th scope="col">Last Testing Problem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><Link to="#" className="fw-medium">1</Link></th>
                                <td>Electric</td>
                                <td>1 Level</td>
                                <td>Control method of Ship</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </TabPane>
        </React.Fragment>
    )
}

export default MyTest;