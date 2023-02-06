import { shoppingCart } from "../../../common/data/ecommerce";

import classnames from "classnames";
import TableContainer from "../../../Components/Common/TableContainer";

// import { columnsData, dataList } from './TestData'


import React, { useEffect, useState, useMemo } from "react";
// import MetaTags from 'react-meta-tags';
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









//treeview
import TreeView, { flattenTree } from "react-accessible-treeview";
import { IoMdArrowDropright } from "react-icons/io";
import cx from "classnames";











const EcommerceProducts = (props) => {
  // Border Top Nav Justified Tabs
  const [topBorderjustifyTab, settopBorderjustifyTab] = useState("1");
  const topBorderJustifytoggle = (tab) => {
    if (topBorderjustifyTab !== tab) {
      settopBorderjustifyTab(tab);
    }
  };
  // product cart
  const [productLists, setproductLists] = useState(shoppingCart);
  // const columns = useMemo(() => columnsData, []);


  //product detail
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [request, setRequest] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [price, setPrice] = useState("");
  //modal
  const [modal_togFirst, setmodal_togFirst] = useState(false);

  function tog_togFirst(value) {
    setTitle(value.name);
    setDate(value.id);
    setRequest(value.name);
    setDescription(value.name);
    setRate(value.name);
    setPrice(value.name);
    setmodal_togFirst(!modal_togFirst);
  }

  const [modal_togSecond, setmodal_togSecond] = useState(false);

  function tog_togSecond() {
    setmodal_togSecond(!modal_togSecond);
  }















  //treeview
  const folder = {
    name: "",
    children: [
      {
        name: "Fruits",
        children: [
          { name: "Avocados" },
          { name: "Bananas" },
          { name: "Berries" },
          { name: "Oranges" },
          { name: "Pears" },
        ],
      },
      {
        name: "Drinks",
        children: [
          { name: "Apple Juice" },
          { name: "Chocolate" },
          { name: "Coffee" },
          {
            name: "Tea",
            children: [
              { name: "Black Tea" },
              { name: "Green Tea" },
              { name: "Red Tea" },
              { name: "Matcha" },
            ],
          },
        ],
      },
      {
        name: "Vegetables",
        children: [
          { name: "Beets" },
          { name: "Carrots" },
          { name: "Celery" },
          { name: "Lettuce" },
          { name: "Onions" },
        ],
      },
    ],
  };
  const data = flattenTree(folder);

  const ArrowIcon = ({ isOpen, className }) => {
    const baseClass = "arrow";
    const classes = cx(
      baseClass,
      { [`${baseClass}--closed`]: !isOpen },
      { [`${baseClass}--open`]: isOpen },
      className
    );
    return <IoMdArrowDropright className={classes} />;
  };


  const [expandedIds, setExpandedIds] = useState();









  return (
    <div className="page-content">


      <Modal
        isOpen={modal_togFirst}
        toggle={() => {
          tog_togFirst();
        }}
        id="firstmodal"
        centered
      >
        <ModalHeader>


        </ModalHeader>
        <ModalBody className="text-center p-2">


          <CardBody>
            <Row className="gy-3">
              <div className="col-sm-5">
                <div className="avatar-lg bg-light rounded p-1">
                  <img
                    src={product10}
                    alt=""
                    className="img-fluid d-block"
                  />
                </div>
              </div>
              <div className="col-sm-7">
                <div className="row">
                  <div className="col-sm-4">
                    <h5 className="fs-13">
                      Title :
                    </h5>
                  </div>
                  <div className="col-sm-8">
                    <h5 className="fs-15">
                      {title}
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <h5 className="fs-13">
                      Date :
                    </h5>
                  </div>
                  <div className="col-sm-8">
                    <h5 className="fs-13">
                      {date}
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <h5 className="fs-13">
                      Request:
                    </h5>
                  </div>
                  <div className="col-sm-8">
                    <h5 className="fs-13">
                      {request}                    </h5>
                  </div>
                </div>
              </div>



            </Row>
            <Row className="pt-3">
              <div className="col-sm-3">
                <h5 className="fs-12">
                  Description :
                </h5>
              </div>
              <div className="col-sm-9">
                <h5 className="fs-12">
                  {description}                </h5>
              </div>
            </Row>
            <Row>
              <div className="col-sm-1"></div>
              <div className="col-sm-5 text-center">
                Rate : {rate}
              </div>
              <div className="col-sm-5">
                Price : {price}
              </div>
              <div className="col-sm-1"></div>
            </Row>
            <Row>
              <div className="col-sm-6 text-center">
                <Button color="light" onClick={() => { tog_togSecond(); tog_togFirst(false); }}>Buy</Button>
              </div>
              <div className="col-sm-6 text-center">
                <Button color="primary">Download</Button>
              </div>
            </Row>
          </CardBody>

        </ModalBody>
      </Modal>

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
              setmodal_togFirst(false);
            }}
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
                    <span>pay: </span><p>100 Won</p>
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
                    <span>pay: </span><p>100 Won</p>
                  </div><br /><hr />
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>free valance: </span><p>none</p>
                  </div><br /><hr /><br />
                </div>
              </TabPane>
            </TabContent>
            <div className='purchase-button-group mb-5'>
              <Button color="primary" onClick={() => { tog_togSecond(false); }} style={{ float: "left" }}>
                buy
              </Button>
              <Button color="primary" onClick={() => { }} style={{ float: "right" }}>
                charging score
              </Button>
            </div><br /><br />
          </div>
        </div>
      </Modal>



      <Container fluid>
        <BreadCrumb title="Software" pageTitle="Ecommerce" />

        <Row>
          <Col xl={3} lg={4}>
            <Card>



              {/* <div>
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
                  </div> */}
              <div className="accordion accordion-flush ">
                <div className="card-body border-bottom">
                  <div>
                    <p className="text-muted text-uppercase fs-12 fw-medium mb-3 pt-3 border-bottom">
                    Categories
                    </p>
                    <TreeView
                      data={data}
                      className="basic p-2"
                      aria-label="Controlled expanded node tree"
                      expandedIds={expandedIds}
                      defaultExpandedIds={[1]}
                      nodeRenderer={({
                        element,
                        isBranch,
                        isExpanded,
                        isDisabled,
                        getNodeProps,
                        level,
                        handleExpand,
                      }) => {
                        return (
                          <div
                            {...getNodeProps({ onClick: handleExpand })}
                            style={{
                              marginLeft: 20 * (level - 1),
                              opacity: isDisabled ? 0.5 : 1,
                            }}
                          >
                            {isBranch && <ArrowIcon isOpen={isExpanded} />}
                            <span className="name">
                              {element.name}-{element.id}
                            </span>
                          </div>
                        );
                      }}
                    />

                  </div>
                </div>





                <div className="card-body border-bottom">
                  {/* <p className="text-muted text-uppercase text-center fs-12 fw-medium mt-2 mb-2">
                    Fashion Software
                  </p> */}
                  <p className="text-muted text-uppercase fs-12 fw-medium mb-3 pt-3 border-bottom">
                    Fashion Software
                  </p>
                  {/* <div className="p-3"> <img src={product10}></img></div> */}
                  <div className="p-3">{productLists.map((cartItem, key) => (
                    <React.Fragment key={cartItem.id}>
                      
                        <Card className="product" onClick={() => tog_togFirst(cartItem)}>
                          <Link

                            className="text-dark"
                          >
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

                                    {cartItem.name}

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
                          </Link>
                          <div className="card-footer">
                            <div className="row align-items-center gy-3">

                              <div className="col-sm-6">
                                <div className="d-flex align-items-center gap-2 text-muted">
                                  <div>Price:</div>
                                  <h5 className="fs-12 mb-0">

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
                                  <h5 className="fs-12 mb-0">

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
                     
                    </React.Fragment>
                  ))}</div>



                </div>

              </div>
            </Card>
          </Col>
          <div className="col-xl-9 col-lg-8">

            <div className="card">
              <CardHeader >

                <Row>
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <div className="filter-choices-input">
                      <Input placeholder={"Search..."} />
                    </div>
                  </div>
                </Row>

              </CardHeader>
              <Row className="p-3">


                {productLists.map((cartItem, key) => (
                  <React.Fragment key={cartItem.id}>
                    <Col lg={4}>
                      <Card className="product" onClick={() => tog_togFirst(cartItem)}>
                        <Link

                          className="text-dark"
                        >
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

                                  {cartItem.name}

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
                        </Link>
                        <div className="card-footer">
                          <div className="row align-items-center gy-3">

                            <div className="col-sm-6">
                              <div className="d-flex align-items-center gap-2 text-muted">
                                <div>Price:</div>
                                <h5 className="fs-12 mb-0">

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
                                <h5 className="fs-12 mb-0">

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



              {/* Page ntion */}
              {/* <TabPane tabId="2" id="v-pills-browser">
                  <TableContainer
                    columns={columns}
                    data={shoppingCart}

                  />
                </TabPane> */}
            </div>
          </div>


        </Row>

      </Container>
    </div>
  );
};

export default EcommerceProducts;











{/* <Modal
    isOpen={modal_togFirst}
    toggle={() => {
        tog_togFirst();
    }}
    id="firstmodal"
    centered
>
    <ModalHeader>
            Modal 1
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
    <ModalBody className="text-center p-5">
        <lord-icon
            src="https://cdn.lordicon.com/tdrtiskw.json"
            trigger="loop"
            colors="primary:#ffbe0b,secondary:#4b38b3"
            style={{ width: "130px", height: "130px" }}>
        </lord-icon>
        <div className="mt-4 pt-4">
            <h4>Uh oh, something went wrong!</h4>
            <p className="text-muted"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
            <Button className="btn btn-warning" onClick={() => { tog_togSecond(); tog_togFirst(false); }}>
                Continue
            </Button>
        </div>
    </ModalBody>
</Modal>
<Modal
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