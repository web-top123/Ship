import { shoppingCart } from "../../../common/data/ecommerce";


import TableContainer from "../../../Components/Common/TableContainer";

import { columnsData, dataList } from './TestData'


import React, { useEffect, useState, useMemo } from "react";
import MetaTags from 'react-meta-tags';
import product10 from "./assets/images2.jpeg";
import {
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  UncontrolledCollapse,
  Modal, ModalBody, ModalHeader,
  Row,
  Card,
  CardHeader,
  Col,
  Input,
  Button,
  CardBody,

} from "reactstrap";



import "nouislider/distribute/nouislider.css";

import BreadCrumb from "../../../Components/Common/BreadCrumb";

//Import data
// import { productsData } from "./Data";


// import Select from "react-select";

//redux
import { Link } from "react-router-dom";


const EcommerceProducts = (props) => {






  // product cart
  const [productLists, setproductLists] = useState(shoppingCart);





  const columns = useMemo(() => columnsData, []);








  return (
    <div className="page-content">


      <Container fluid>
        <BreadCrumb title="Software" pageTitle="Ecommerce" />

        <Row>
          <Col xl={3} lg={4}>
            <Card>
              <CardHeader >


                <div className="filter-choices-input">
                  <Input placeholder={"Search..."} />
                </div>
              </CardHeader>

              <div className="accordion accordion-flush">
                <div className="card-body border-bottom">
                  <div>
                    <p className="text-muted text-uppercase fs-12 fw-medium mb-2">
                      Products
                    </p>
                    <ul className="list-unstyled mb-0">

                      <li>
                        <a
                          className="d-flex py-1"
                          data-bs-toggle="collapse"
                          href="#filterlist-mobiles_software"
                          role="button"
                          aria-expanded="true"
                          aria-controls="filterlist-mobiles_software"
                        >
                          <div className="flex-grow-1">
                            <h5 className="fs-13 mb-0">Mobiles Software</h5>
                          </div>
                          <div className="flex-shrink-0 ms-2">
                            <span className="badge bg-light text-muted">5</span>
                          </div>
                        </a>

                        <div className="collapse show" id="filterlist-mobiles_software">
                          <ul className="ps-4">
                            <li>
                              <Link to="#" className="d-block py-1 text-muted">
                                Study
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="d-block py-1 text-muted">
                                Common sense
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="d-block py-1 text-muted">
                                Game
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="d-block py-1 text-muted">
                                Tool
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="d-block py-1 text-muted">
                                Service
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>


                      <li>
                        <a
                          className="d-flex py-1"
                          data-bs-toggle="collapse"
                          href="#filterlist-computer"
                          role="button"
                          aria-expanded="false"
                          aria-controls="filterlist-computer"
                        >
                          <div className="flex-grow-1">
                            <h5 className="fs-13 mb-0">Computer</h5>
                          </div>
                          <div className="flex-shrink-0 ms-2">
                            <span className="badge bg-light text-muted">5</span>
                          </div>
                        </a>

                        <div className="collapse show" id="filterlist-computer">
                          <ul className="ps-4">
                            <li>
                              <Link to="#" className="d-block py-1 text-muted">
                                Video
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="d-block py-1 text-muted">
                                Audio
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="d-block py-1 text-muted">
                                Image
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="d-block py-1 text-muted">
                                Gaming
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="d-block py-1 text-muted">
                                Tablets
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>


                    </ul>
                  </div>
                </div>

                <div className="card-body border-bottom">
                  <p className="text-muted text-uppercase text-center fs-12 fw-medium mb-5">
                    Fashion Software
                  </p>
                  <img src={product10}></img>


                </div>

              </div>
            </Card>
          </Col>
          <div className="col-xl-9 col-lg-8">
            <div>
              <div className="card">
                <Row>


                  {productLists.map((cartItem, key) => (
                    <React.Fragment key={cartItem.id}>
                      <Col lg={4}>
                        <Card className="product">
                          <CardBody>
                            <Row className="gy-3">
                              <div className="col-sm-6">
                                <div className="avatar-lg bg-light rounded p-1">
                                  <img
                                    src={cartItem.img}
                                    alt=""
                                    className="img-fluid d-block"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <h5 className="pt-4 fs-20 text-truncate">
                                  <Link
                                    to="/ecommerce-product-detail"
                                    className="text-dark"
                                  >
                                    {cartItem.name}
                                  </Link>
                                </h5>
                                {/* <ul className="list-inline text-muted">
                                  <li className="list-inline-item">
                                    Color :{" "}
                                    <span className="fw-medium">
                                      {cartItem.color}
                                    </span>
                                  </li>
                                  <li className="list-inline-item">
                                    Size :{" "}
                                    <span className="fw-medium">{cartItem.size}</span>
                                  </li>
                                </ul> */}


                              </div>
                              {/* <div className="col-sm-auto">
                                <div className="text-lg-end">
                                  <p className="text-muted mb-1">Item Price:</p>
                                  <h5 className="fs-14">
                                    $
                                    <span id="ticket_price" className="product-price">
                                      {cartItem.price}
                                    </span>
                                  </h5>
                                </div>
                              </div> */}
                            </Row>
                          </CardBody>

                          <div className="card-footer">
                            <div className="row align-items-center gy-3">

                              <div className="col-sm-6">
                                <div className="d-flex align-items-center gap-2 text-muted">
                                  <div>Buy :</div>
                                  <h5 className="fs-14 mb-0">
                                    $
                                    <span className="product-line-price">
                                      {" "}
                                      {cartItem.total}
                                    </span>
                                  </h5>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="d-flex align-items-center gap-2 text-muted">
                                  <div>Rate:</div>
                                  <h5 className="fs-14 mb-0">
                                   
                                    <span className="product-line-price">
                                      {" "}
                                      {cartItem.total}
                                    </span>
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </React.Fragment>
                  ))}
                </Row>
                <TabPane tabId="2" id="v-pills-browser">
                    <TableContainer
                        columns={columns}
                        data={shoppingCart}
                     
                    />
            </TabPane>
              </div>
            </div>
          </div>

        </Row>

      </Container>
    </div>
  );
};

export default EcommerceProducts;
