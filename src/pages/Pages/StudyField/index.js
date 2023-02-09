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
import { getAllStudyByCategory, getAllStudy, getCampusCategories,getTopSoftwares } from '../../../helpers/fakebackend_helper';
const Study  = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const fetchData = async () => {
    if (selectedCategoryId === 1) {
      getTopSoftwares().then(res => {
        setTopsoftwareData(res);
      });
      getAllStudy().then(sofwareList => {
        setstudyData(sofwareList);
      });
    } else {
      getAllStudyByCategory(selectedCategoryId).then(categoryData => {
        setstudyData(categoryData.campuses);
      });
    }
  };

  const [studyData, setstudyData] = useState([]);
  const [TopsoftwareData, setTopsoftwareData] = useState([]);
  const [originalCategoryList, setOriginalCategoryList] = useState([]);
    useEffect(() => {
      getCategoryList();
      fetchData();
    }, []);

    useEffect(() => {
      fetchData();
    }, [selectedCategoryId])
  function getCategoryList() {
    getCampusCategories().then(categoryList => {
      let nodes = [];
      let categoryNodes = [];
      let lookupList = {};
      categoryList = categoryList.sort((a, b) => a.parentId - b.parentId);
      setOriginalCategoryList(categoryList);

      for (const category of categoryList) {
        let item = {
          id: category.id,
          category_id: category.id,
          name: category.title,
          parent_id: ((category.parentId === 0) ? null : category.parentId),
          children: []
        };
        lookupList[item.id] = item;
        nodes.push(item);
        if (item.parent_id == null) {
          categoryNodes.push(item);
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        let n = nodes[i];
        if (!(n.parent_id == null)) {
          lookupList[n.parent_id].children = lookupList[n.parent_id].children.concat([n]);
        }
      }

      let folder = {
        name: "",
        children: categoryNodes,
      };

      setCategory(folder);
    });
  }
  //selection category
  const [selectedSingle, setSelectedSingle] = useState(null);
  function handleSelectSingle(value) {
    if (selectedSingle !== value) {
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
    setDescription(value.description);
    setPrice(value.cost);
    setmodal_togFirst(!modal_togFirst);
  }
  //modal second
  const [modal_togSecond, setmodal_togSecond] = useState(false);

  function tog_togSecond() {
   // setPrice(value.cost);
    setmodal_togSecond(!modal_togSecond);
  }

  //treeview

  //data folder
  const [category, setCategory] = useState([]);

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
                  {title}     </h5>
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

        <div className="modal-body text-center">
          <div className=" ">
            <h3 className="mb-5">Purchase</h3>
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
                    <span>pay: </span><p>{price}</p>
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

              <Button color="primary" onClick={() => { }} style={{ float: "right" }} href="pages-profile-settings">
                charge score
              </Button>
            </div><br /><br />
          </div>
        </div>
      </Modal>
      <Container fluid>
        <BreadCrumb title="Study" pageTitle="Study" />

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
                          <span className="name" onClick={() => {
                            // tog_togFirst(element)
                            }}>
                            {element.name}
                          </span>
                          <button style={{border:"none", backgroundColor:"lightblue", width:"40px", height:"19px", borderRadius:"8px"}} onClick={() => {
                            console.log(originalCategoryList);
                            let selectedCategory = originalCategoryList.find(category => {
                              return category.title === element.name;
                            })
                            setSelectedCategoryId(selectedCategory.id);
                          }} className=""><i className="las la-angle-right fs-10" ></i>
                          </button>
                        </div>
                      );
                    }}
                  />
                </div>
                <div className="card-body border-bottom">
                  <p className="text-muted text-uppercase fs-12 fw-medium mb-3 pt-3 border-bottom">
                    Top reader
                  </p>

                  <div className="p-3">{TopsoftwareData.map((softwareItem, key) => (
                    <React.Fragment key={softwareItem.id}>
                      <Card className="product" onClick={() => tog_togFirst(softwareItem)}>
                        <Link to='#'
                          className="text-dark"
                        >
                          <CardBody>
                            <div className="d-flex align-items-center text-muted  ">
                              <div className="flex-shrink-0 me-3">
                                <img src={softwareItem.image_url} className="avatar-xxs rounded-circle shadow bg-light" alt="..."></img>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="fs-14">{softwareItem.name}</h5>
                                <h5 className="fs-14">{softwareItem.recommends}</h5>
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
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Browses</th>
                        <th scope="col">Recommends</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studyData.map((study, key) => (
                        <React.Fragment key={study.id}>
                          <tr >
                            <td className="text-truncate" style={{ "border": "none", "width": "25%" }} onClick={() => tog_togFirst(study)}><Link to="#"><div>{study.name}</div></Link></td>
                            <td className="text-truncate" style={{ "border": "none", "width": "45%" }} onClick={() => tog_togFirst(study)}><Link to="#"><div>{study.description}</div></Link></td>
                            <td style={{ border: "none" }}>{study.cost}</td>
                            <td style={{ border: "none" }}>{study.browses}</td>
                            <td style={{ border: "none" }}>{study.recommends}</td>

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

export default Study  ;









