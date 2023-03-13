import React, { useEffect, useState, useMemo } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Card, CardBody, Col, Container, CardHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane, Input, Label, Modal, ModalHeader, Button } from "reactstrap";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import MetaTags from 'react-meta-tags';

// Import React FilePond
import { registerPlugin } from "react-filepond";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { addNewShipData, getShipData, updateShipData } from "../../../helpers/fakebackend_helper";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddShipData = (props) => {

  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);

  const [modal_backdrop, setmodal_backdrop] = useState(false);
  function tog_backdrop() {
    setmodal_backdrop(!modal_backdrop);
  }

  const [modal_center, setmodal_center] = useState(false);
  function tog_center() {
    setmodal_center(!modal_center);
  }

  const [ShipData, setShipData] = useState({
    name: '',
    file_url: null,
    cost: '',

  });

  useEffect(() => {
    if (id) {
      getShipData(id).then(res => {
        setShipData(res);
      })
    }
  }, []);

  document.title = id ? "Edit ShipData" : "Add ShipData";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit ShipData" : "Add ShipData"} pageTitle="Admin ShipData" />

        {/* Static Backdrop Modal */}
        <Modal
          isOpen={modal_backdrop}
          toggle={() => {
            tog_backdrop();
          }}
          backdrop={'static'}
          id="staticBackdrop"
          centered
        >
          <ModalHeader>
            Modal title
            <Button type="button" className="btn-close"
              onClick={() => {
                setmodal_backdrop(false);
              }} aria-label="Close"></Button>
          </ModalHeader>
          <div className="modal-body text-center p-5">
            <lord-icon
              src="https://cdn.lordicon.com/lupuorrc.json"
              trigger="loop"
              colors="primary:#121331,secondary:#08a88a"
              style={{ width: "120px", height: "120px" }}>
            </lord-icon>

            <div className="mt-4">
              <h4 className="mb-3">You've made it!</h4>
              <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
              <div className="hstack gap-2 justify-content-center">
                <Link to="#" className="btn btn-link shadow-none link-success fw-medium" onClick={() => setmodal_backdrop(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                <Link to="/admin-shipDatas" className="btn btn-success" onClick={() => setmodal_backdrop(true)}>Completed</Link>
              </div>
            </div>
          </div>
        </Modal>

        {/* Vertically Centered */}
        <Modal
          isOpen={modal_center}
          toggle={() => {
            tog_center();
          }}
          centered
        >
          <ModalHeader>
            Center Modal
            <Button
              type="button"
              onClick={() => {
                setmodal_center(false);
              }}
              className="btn-close"
              aria-label="Close"
            >

            </Button>
          </ModalHeader>
          <div className="modal-body text-center p-5">
            <lord-icon src="https://cdn.lordicon.com/hrqwmuhr.json"
              trigger="loop" colors="primary:#121331,secondary:#08a88a" style={{ width: "120px", height: "120px" }}>
            </lord-icon>
            <div className="mt-4">
              <h4 className="mb-3">Oops something went wrong!</h4>
              <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
              <div className="hstack gap-2 justify-content-center">
                <Button color="light" onClick={() => setmodal_center(false)}>Close</Button>
                {/* <Link to="#" className="btn btn-danger">Try Again</Link> */}
              </div>
            </div>
          </div>
        </Modal>

        <Row>
          <Col lg={8}>
            <form>
              <Card>
                <CardBody>

                  <div className="mb-3">
                    <Label className="form-label" htmlFor="validationDefaultUsername">
                      Name
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="validationDefaultUsername"
                      placeholder="Enter name"
                      required={true}
                      value={ShipData.name}
                      onChange={e => {
                        setShipData({ ...ShipData, ...{ name: e.target.value } })
                      }}
                    />
                  </div>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          File_url
                        </label>
                        <input
                          className="form-control"
                          id="product-image-input"
                          type="file"
                          required={true}
                          accept="image/png, image/gif, image/jpeg, image/jpg, image/bmp"
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ file_url: e.target.files[0] } })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Cost
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter cost"
                          required={true}
                          value={ShipData.cost}
                          onChange={e => {
                            setShipData({ ...ShipData, ...{ cost: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" id="add-shipData-button" className="btn btn-success w-sm" onClick={e => {
                  e.preventDefault();
                  const formData = new FormData();
                  formData.append("cost", ShipData.cost);
                  formData.append("name", ShipData.name);
                  formData.append("file", ShipData.file_url);
                  if ((ShipData.cost !== null) && (ShipData.name !== null) && (ShipData.file_url !== null)) {
                    console.log(e);

                    if (id) {
                      updateShipData(id, formData).then(res => {
                        console.log(res);
                      })
                    } else {
                      addNewShipData(formData).then(res => {
                        console.log(res);
                      })
                    }
                    setmodal_backdrop(true)
                  }
                  else {
                    setmodal_center(true);
                  }

                }}>
                  {id ? "Update ShipData" : "Add ShipData"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddShipData;