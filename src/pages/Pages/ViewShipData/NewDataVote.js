import React, { useState } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Input,
  Label,
  Button,
  Modal,
  ModalHeader,
} from "reactstrap";


import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import MetaTags from 'react-meta-tags';

// Import React FilePond
import { registerPlugin } from "react-filepond";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const NewDataVote = (props) => {

  
    // Modal
    const [modal_togFirst, setmodal_togFirst] = useState(false);
    function tog_togFirst() {
        setmodal_togFirst(!modal_togFirst);
    }

    const [modal_togSecond, setmodal_togSecond] = useState(false);
    function tog_togSecond() {
        setmodal_togSecond(!modal_togSecond);
    }

    
    // Border Top Nav Justified Tabs
    const [topBorderjustifyTab, settopBorderjustifyTab] = useState("1");
    const topBorderJustifytoggle = (tab) => {
        if (topBorderjustifyTab !== tab) {
            settopBorderjustifyTab(tab);
        }
    };
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  const [selectedFiles, setselectedFiles] = useState([]);
  const [selectedGroup, setselectedGroup] = useState(null);
  const [selectedStatus, setselectedStatus] = useState(null);
  const [sortData, setsortData] = useState(null);


  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }

  function handleSelectStatus(selectedStatus) {
    setselectedStatus(selectedStatus);
  }

  function handleSelectVisibility(sortData) {
    setsortData(sortData);
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  <TabPane tabId="1" id="v-pills-purchase"></TabPane>


  const sortDataOption = [
    {
      options: [
        { label: "About Ship", value: "About Ship" },
        { label: "Load Data", value: "Load Data" },
        { label: "Product Data", value: "Product Data" },
        { label: "Goods Data", value: "Goods Data" },
      ],
    },
  ];
  const sortShipOption = [
    {
      options: [
        { label: "Ship1", value: "Ship1" },
        { label: "Ship2", value: "Ship2" },
        { label: "Ship3", value: "Ship3" },
        { label: "Ship4", value: "Ship4" },
      ],
    },
  ];
  document.title = "New Data Vote";
  return (

    <div className="page-content">

      <Container>
        <BreadCrumb title="Create Product" pageTitle="Ecommerce" />
        <form>
          <div style={{width: '30%'}}>
            <Row>
              <Col sm={4}>
                <Label
                  htmlFor="choices-publish-visibility-input"
                  className="form-label"
                >
                  Sort
                </Label>
              </Col>
              <Col sm={8}>
                <Select
                  value={sortData}
                  onChange={() => {
                    handleSelectVisibility();
                  }}
                  options={sortDataOption}
                  name="choices-publish-visibility-input"
                  classNamePrefix="select2-selection form-select"
                />
              </Col>
            </Row>

          </div>
          
          <h5 className="fs-24 mb-1 my-3">Fill in the below gaps with your data</h5>

          <Row>
            <Col lg={6}>
              <div className="mb-3">
                <Row>
                  <Col sm={4}>                    
                    <Label className="form-label" htmlFor="ship-name-input">
                      1. Ship Name
                    </Label>
                  </Col>
                  <Col sm={8}>
                    <Input
                      type="text"
                      className="form-control"
                      id="ship-name-input"
                      placeholder="Enter ship name"
                    />
                  </Col>
                </Row>
              </div>
              
              <div className="mb-3">
                <Row>
                  <Col sm={4}>  
                    <label
                      htmlFor="plan-date-input"
                      className="form-label"
                    >
                     3. Plan date
                    </label>
                  </Col>
                  <Col sm={8}>
                    <Flatpickr
                      className="form-control"
                      id="plan-date-input"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        mode: "multiple",
                        dateFormat: "d.m.y",
                      }}
                    />
                  </Col>
                </Row>
              </div>
              <div className="mb-3">
                <Row>
                  <Col sm={4}>                    
                    <Label className="form-label" htmlFor="ship-type-input">
                      5. Type of Ship
                    </Label>
                  </Col>
                  <Col sm={8}>
                    <Select
                      value={sortData}
                      onChange={() => {
                        handleSelectVisibility();
                      }}
                      options={sortShipOption}
                      name="choices-publish-visibility-input"
                      classNamePrefix="select2-selection form-select"
                    />
                  </Col>
                </Row>
              </div>
              <div className="mb-3">
                <Row>
                  <Col sm={4}>                    
                    <Label className="form-label" htmlFor="ship-owner-input">
                      7. Ship owner
                    </Label>
                  </Col>
                  <Col sm={8}>
                    <Input
                      type="text"
                      className="form-control"
                      id="Ship-owner-input"
                      placeholder="Enter product title"
                    />
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={6}>
              <div className="mb-3">
                <Row>
                  <Col sm={4}>                    
                    <Label className="form-label" htmlFor="ship-image-input">
                      2. Ship image
                    </Label>
                  </Col>
                  <Col sm={8}>
                    <input
                      className="form-control"
                      id="ship-image-input"
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                    />
                  </Col>
                </Row>
              </div>
              <div className="mb-3">
                <Row>
                  <Col sm={4}>                    
                    <Label className="form-label" htmlFor="plan-ship-input">
                      4. Plan Ship
                    </Label>
                  </Col>
                  <Col sm={8}>
                    <Input
                      type="text"
                      className="form-control"
                      id="plan-ship-input"
                      placeholder="Enter plan port"
                    />
                  </Col>
                </Row>
              </div>
              <div className="mb-3">
                <Row>
                  <Col sm={4}>                    
                    <Label className="form-label" htmlFor="default-price-input">
                      6. Default Price
                    </Label>
                  </Col>
                  <Col sm={8}>
                    <Input
                      type="text"
                      className="form-control"
                      id="default-price-input"
                      placeholder="Enter plan port"
                    />
                  </Col>
                </Row>
              </div>
              <div className="mb-3">
                <Row>
                  <Col sm={4}>                    
                    <Label className="form-label" htmlFor="ship-runner-input">
                      8. Ship Runner
                    </Label>
                  </Col>
                  <Col sm={8}>
                    <Input
                      type="text"
                      className="form-control"
                      id="ship-runner-input"
                      placeholder="Enter plan port"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <div className="mb-3">
            <Label className="form-label" htmlFor="tech-properties-input">
              9. Tech Properties
            </Label>
              
            <Row className="mt-4 mx-5">
              <Col lg={6}>
                <div className="mb-1">
                  <Row>
                    <Col sm={4}>                    
                      <Label className="form-label" htmlFor="total-weight-input">
                        Total Weight
                      </Label>
                    </Col>
                    <Col sm={8}>
                      <Input
                        type="text"
                        className="form-control"
                        id="total-weight-input"
                        placeholder="Enter Total Weight"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="mb-1">
                  <Row>
                    <Col sm={4}>                    
                      <Label className="form-label" htmlFor="load-weight-input">
                        Load Weight
                      </Label>
                    </Col>
                    <Col sm={8}>
                      <Input
                        type="text"
                        className="form-control"
                        id="load-weight-input"
                        placeholder="Enter Load Weight"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="mb-1">
                  <Row>
                    <Col sm={4}>                    
                      <Label className="form-label" htmlFor="Ship-weight-input">
                        Ship Weight
                      </Label>
                    </Col>
                    <Col sm={8}>
                      <Input
                        type="text"
                        className="form-control"
                        id="Ship-weight-input"
                        placeholder="Enter  Ship Weight"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="mb-1">
                  <Row>
                    <Col sm={4}>                    
                      <Label className="form-label" htmlFor="ship-length-input">
                        Ship Lenght
                      </Label>
                    </Col>
                    <Col sm={8}>
                      <Input
                        type="text"
                        className="form-control"
                        id="ship-length-input"
                        placeholder="Enter Ship Lenght"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="mb-1">
                  <Row>
                    <Col sm={4}>                    
                      <Label className="form-label" htmlFor="ship-width-input">
                        Ship width
                      </Label>
                    </Col>
                    <Col sm={8}>
                      <Input
                        type="text"
                        className="form-control"
                        id="ship-width-input"
                        placeholder="Enter Ship width"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="mb-1">
                  <Row>
                    <Col sm={4}>                    
                      <Label className="form-label" htmlFor="current-height-input">
                        Current Height
                      </Label>
                    </Col>
                    <Col sm={8}>
                      <Input
                        type="text"
                        className="form-control"
                        id="current-height-input"
                        placeholder="Enter Current Height"
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-1">
                  <Row>
                    <Col sm={4}>                    
                      <Label className="form-label" htmlFor="full-load-input">
                        Full Load
                      </Label>
                    </Col>
                    <Col sm={8}>
                      <Input
                        type="text"
                        className="form-control"
                        id="full-load-input"
                        placeholder="Enter Full Load"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="mb-1">
                  <Row>
                    <Col sm={4}>                    
                      <Label className="form-label" htmlFor="ship-engine-input">
                        Ship Engine
                      </Label>
                    </Col>
                    <Col sm={8}>
                      <Input
                        type="text"
                        className="form-control"
                        id="ship-engine-input"
                        placeholder="Enter Ship Engine"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="mb-1">
                  <Row>
                    <Col sm={4}>                    
                      <Label className="form-label" htmlFor="build-date-input">
                        Build Date
                      </Label>
                    </Col>
                    <Col sm={8}>
                      <Flatpickr
                        className="form-control"
                        id="build-date-input"
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          mode: "multiple",
                          dateFormat: "d.m.y",
                        }}
                      />
                    </Col>
                  </Row>
                </div>
                <div className="mb-1">
                  <Row>
                    <Col sm={4}>                    
                      <Label className="form-label" htmlFor="factory-input">
                        Factory
                      </Label>
                    </Col>
                    <Col sm={8}>
                      <Input
                        type="text"
                        className="form-control"
                        id="factory-input"
                        placeholder="Enter Factory"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="mb-1">
                  <Row>
                    <Col sm={4}>                    
                      <Label className="form-label" htmlFor="current-location-input">
                        Current Location
                      </Label>
                    </Col>
                    <Col sm={8}>
                      <Input
                        type="text"
                        className="form-control"
                        id="current-location-input"
                        placeholder="Enter Current Location"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="mb-1">
                  <Row>
                    <Col sm={4}>                    
                      <Label className="form-label" htmlFor="current-status-input">
                        Current Status
                      </Label>
                    </Col>
                    <Col sm={8}>
                      <Input
                        type="text"
                        className="form-control"
                        id="current-status-input"
                        placeholder="Enter Current Status"
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <div className="text-end mb-3" style={{display: 'inline-block', float: 'right'}}>
            <Link
            to="/view-ship-data"
            className="btn btn-success me-5"
            >
              Back
            </Link>
            <Button className="btn-success shadow-none me-4" onClick={() => tog_togFirst()}>vote</Button>
          </div>

        </form>
      </Container>
      <Modal
          isOpen={modal_togFirst}
          toggle={() => {
              tog_togFirst();
          }}
          id="firstmodal"
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
                  <h4  className="mb-4">You can purchase with real or free score</h4>
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
                              </div><br/><hr/>
                              <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                  <span>pay: </span><p>100 Won</p>
                              </div><br/><hr/>
                              <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                  <span>real valance: </span><p>none</p>
                              </div><br/><hr/><br/>
                          </div>
                      </TabPane>

                      <TabPane tabId="2" id="nav-border-top-home">
                          <div className="d-block purchase-pro-setting mt-5">
                              <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                  <span>current: </span><p>100 Won</p>
                              </div><br/><hr/>
                              <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                  <span>pay: </span><p>100 Won</p>
                              </div><br/><hr/>
                              <div className="flex-grow-1 ms-2 purchase-border-bottom">
                                  <span>free valance: </span><p>none</p>
                              </div><br/><hr/><br/>
                          </div>
                      </TabPane>
                  </TabContent>
                  <div className='purchase-button-group mb-5'>
                      <Button color="primary" onClick={() => { tog_togSecond(); tog_togFirst(false); }} style={{float: "left"}}>
                          pay
                      </Button>
                      <Button color="primary" onClick={() => { }} style={{float: "right"}}>
                          charging score
                      </Button>
                  </div><br/><br/>
              </div>
          </div>
      </Modal>

      <Modal
          isOpen={modal_togSecond}
          toggle={() => {
              tog_togSecond();
          }}
          id="secondmodal"
          centered
      >
          <div className="modal-body text-center p-3">
              <div className="mt-4 pt-3 pb-3">
                  <h4 className="mb-3">Do you purchase really?</h4>
                  <div className="hstack gap-2 justify-content-center">
                      <Button color="primary" className="ms-3 me-3" onClick={() => { tog_togFirst(); tog_togSecond(false); }}>
                          Confirm again
                      </Button>

                      <NavLink href="view-ship-data" className=' d-inline'>
                          <Button color="primary" className="ms-3" onClick={() => tog_togSecond(false)}>Yes</Button>
                      </NavLink>
                      <Button color="primary" className="me-3" onClick={() => tog_togSecond(false)}>No</Button>
                  </div>
              </div>
          </div>

      </Modal>
    </div>
  );
};

export default NewDataVote;