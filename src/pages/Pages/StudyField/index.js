import classnames from "classnames";
import React, { useState, useEffect } from "react";

import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Modal, ModalBody, ModalHeader,
  Row,
  Card,
  CardHeader,
  Col,
  Input,
  Button,
  CardBody,
  Table,
  Label,
} from "reactstrap";

//Title
import BreadCrumb from "../../../Components/Common/BreadCrumb";

//data
import { sellersList } from "../../../common/data/ecommerce";
import { productsData } from "../../../common/data/ecommerce";

//redux
import { Link } from "react-router-dom";

//treeview
import TreeView, { flattenTree } from "react-accessible-treeview";
import { IoMdArrowDropright } from "react-icons/io";
import cx from "classnames";
//selection category
import Select from "react-select";

import { getStudy } from '../../../helpers/fakebackend_helper';

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
// import { getFindBrowseHistoriesById, getAuthenticatedUser } from '../../../../helpers/fakebackend_helper';






const Software = () => {


  const [studyData, setstudyData] = useState([]);


  //  useEffect(() => {
  //   fetch(`http://10.10.12.75:8080/api/data/findAll`)
  //     .then((response) => response.json())
  //     .then((actualData) => setstudyData(actualData));
  // }, []);




  useEffect(() => {
    const fetchData = async () => {
      const result = await getStudy();
      setstudyData(result);
    var nodes = [];
    var toplevelNodes = [];
    var lookupList = {};
    console.log("dsssssssssssss",result.length);
    for (var i = 0; i < result.length; i++) {
        var n = {
            id: result[i].id,
            name: result[i].title,
            parent_id: ((result[i].parentId == 0) ? null : result[i].parentId),
            children: []
            };
        lookupList[n.id] = n;
        nodes.push(n);
        if (n.parent_id == null) {
            toplevelNodes.push(n);
        }
    }
    
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (!(n.parent_id == null)) {
          lookupList[n.parent_id].children = lookupList[n.parent_id].children.concat([n]);
      }
    }
    
    var folder = {
      name: "",
      children: toplevelNodes,
    };


    setCategory(folder);

  

    };

    //Run data fetching function.
    fetchData();
  }, []);
  //   useEffect(() => {

  //  console.log("aaaaaaaaaaaaaa");
  // }, []);





  //selection category
  const [selectedSingle, setSelectedSingle] = useState(null);
  function handleSelectSingle(value) {
    if (selectedSingle != value) {
      setCategory(value);
    }
    setSelectedSingle(value);

    // setCategory(selectedSingle);

  }
  const SingleOptions = [
    { value: 'folder1', label: 'Choices 1' },
    { value: 'folder2', label: 'Choices 2' },
    { value: 'folder3', label: 'Choices 3' },
    { value: 'folder4', label: 'Choices 4' }
  ];

  // Data
  const [productLists, setproductLists] = useState(sellersList);


  //product detail
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [request, setRequest] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");


  //modal
  // Border Top Nav Justified Tabs
  const [topBorderjustifyTab, settopBorderjustifyTab] = useState("1");
  const topBorderJustifytoggle = (tab) => {
    if (topBorderjustifyTab !== tab) {
      settopBorderjustifyTab(tab);
    }
  };

  //modal first
  const [modal_togFirst, setmodal_togFirst] = useState(false);
  function tog_togFirst(value) {
    setTitle(value.name);
    setDate(value.id);
    setRequest(value.name);
    setDescription(value.name);
    setRate(value.name);
    setPrice(value.name);
    setImg(value.img);
    setmodal_togFirst(!modal_togFirst);

  }

  //modal second
  const [modal_togSecond, setmodal_togSecond] = useState(false);

  function tog_togSecond() {
    setmodal_togSecond(!modal_togSecond);
  }

  //treeview
  const folder1 = {
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
  const folder2 = {
    name: "",
    children: [
      {
        name: "Fruits",
        children: [
          {
            name: "Avocados",
            children: [
              { name: "Black Tea" },
              { name: "Green Tea" },
              { name: "Red Tea" },
              { name: "Matcha" },
            ]
          },
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
  const folder3 = {
    name: "",
    children: [
      {
        name: "Fruits",
        children: [
          {
            name: "Avocados",
            children: [
              { name: "Black Tea" },
              { name: "Green Tea" },
              { name: "Red Tea" },
              { name: "Matcha" },
            ]
          },
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
  const folder4 = {
    name: "",
    children: [
      {
        name: "Fruits",
        children: [
          {
            name: "Avocados",
            children: [
              { name: "Black Tea" },
              { name: "Green Tea" },
              { name: "Red Tea" },
              { name: "Matcha" },
            ]
          },
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

  //data folder
  const [category, setCategory] = useState([]);
  // const changeFolder=()=>{
  //   setCategory(folder2)
  // }

  const data = flattenTree(category);
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

        <Row>

        </Row>
        <ModalBody className=" p-2">
          <CardBody>

            <Row className="pt-3">
              <div className="col-sm-3">
                <h5 className="fs-15">
                  Title :
                </h5>
              </div>
              <div className="col-sm-9">
                <h5 className="fs-15">
                  {description}     </h5>
              </div>
            </Row>
            <Row className="pt-3">
              <div className="col-sm-3">
                <h5 className="fs-15">
                  Description :
                </h5>
              </div>
              <div className="col-sm-9">
                <h5 className="fs-15">
                  {description}     </h5>
              </div>
            </Row>



            <Row className="pt-4">
              <div className="col-sm-6 text-center">
                <Button color="light" onClick={() => { tog_togSecond(); tog_togFirst(false); }} >Buy</Button>
              </div>
              <div className="col-sm-6 text-center">
                <Button color="primary" onClick={() => {
                  setmodal_togFirst(false);
                }}>Close</Button>
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
              <Button color="primary" onClick={() => { tog_togSecond(false); }} style={{ float: "left" }} href="pages-study-detail">
                Buy
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
            <CardHeader className="border-bottom" >
              <Select
                value={selectedSingle}
                onChange={() => {
                  handleSelectSingle();
                }}
                options={SingleOptions}
              />
            </CardHeader>
            <Card>
              <div className="accordion accordion-flush ">
                <div className="card-body border-bottom">
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
                          <span className="name" onClick={() => tog_togFirst(element)}>
                            {element.name}-{element.id}
                          </span>
                        </div>
                      );
                    }}
                  />
                </div>

                <div className="card-body border-bottom">
                  <p className="text-muted text-uppercase fs-12 fw-medium mb-3 pt-3 border-bottom">
                    Top reader
                  </p>

                  <div className="p-3">{productLists.map((cartItem, key) => (
                    <React.Fragment key={cartItem.id}>
                      <Card className="product" onClick={() => tog_togFirst(cartItem)}>
                        <Link
                          className="text-dark"
                        >
                          <CardBody>
                            <div className="d-flex align-items-center text-muted  ">
                              <div className="flex-shrink-0 me-3">
                                <img src={cartItem.img} className="avatar-xxs rounded-circle shadow bg-light" alt="..."></img>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="fs-14">{cartItem.color}</h5>
                              </div>
                            </div>
                          </CardBody>
                        </Link>
                      </Card>
                    </React.Fragment>
                  ))}
                  </div>
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


















              <Row>



                <div className="table-responsive mt-4 mt-xl-0  p-4 pt-1">
                  <Table className="table-hover  align-middle table-nowrap mb-0 ">
                    <thead className="bg-light">
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Score</th>
                        <th scope="col">Visit</th>
                        <th scope="col">Rate</th>

                      </tr>
                    </thead>
                    <tbody>
                      {studyData.map((cartItem, key) => (
                        <React.Fragment key={cartItem.id}>
                          <tr >
                            <td className="fw-medium" style={{ border: "none" }}>{cartItem.id}</td>
                            <td className="text-truncate" style={{ "border": "none", "width": "65%" }} onClick={() => tog_togFirst(cartItem)}><Link><div>{cartItem.title}</div></Link></td>
                            <td style={{ border: "none" }}>{cartItem.id}</td>
                            <td style={{ border: "none" }}>{cartItem.id}</td>
                            <td style={{ border: "none" }}>{cartItem.id}</td>

                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </Table>
                </div>

              </Row>


































            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Software;









