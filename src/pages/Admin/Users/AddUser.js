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
import { addNewUser } from "../../../helpers/fakebackend_helper";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddUser = (props) => {
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  const [selectedFiles, setselectedFiles] = useState([]);
  const [selectedGroup, setselectedGroup] = useState(null);
  const [selectedStatus, setselectedStatus] = useState(null);
  const [selectedVisibility, setselectedVisibility] = useState(null);

  const [user, setUser] = useState({
    username: '',
    name: '',
    email: '',
    gender: 'male',
    birthday: '',
    password: '',
  });


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

  function handleSelectVisibility(selectedVisibility) {
    setselectedVisibility(selectedVisibility);
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

  const productCategory = [
    {
      options: [
        { label: "All", value: "All" },
        { label: "Appliances", value: "Appliances" },
        { label: "Fashion", value: "Fashion" },
        { label: "Electronics", value: "Electronics" },
        { label: "Grocery", value: "Grocery" },
        { label: "Home & Furniture", value: "Home_Furniture" },
        { label: "Kids", value: "Kids" },
        { label: "Mobiles", value: "Mobiles" },
      ],
    },
  ];

  const productStatus = [
    {
      options: [
        { label: "Draft", value: "Draft" },
        { label: "Published", value: "Published" },
        { label: "Scheduled", value: "Scheduled" },
      ],
    },
  ];

  const gender = [
    {
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
      ],
    },
  ];
  document.title = "Add User";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title="Add User" pageTitle="Ecommerce" />

        <Row>
          <Col lg={8}>
            <form>
              <Card>
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                      Name
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="product-title-input"
                      placeholder="Enter name"
                      value={user.name}
                      onChange={e => {
                        setUser({ ...user, ...{ name: e.target.value } })
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
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter Username"
                          value={user.username}
                          onChange={e => {
                            setUser({ ...user, ...{ username: e.target.value } })
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
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter Email"
                          value={user.email}
                          onChange={e => {
                            setUser({ ...user, ...{ email: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <div>
                        <Label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          Select Gender
                        </Label>

                        <Select
                          value={{ value: user.gender, label: user.gender == 'male' ? 'Male' : 'Female' }}
                          onChange={(e) => {
                            console.log(e);
                            setUser({ ...user, ...{ gender: e.value } })
                          }}
                          options={gender}
                          name="choices-publish-visibility-input"
                          classNamePrefix="select2-selection form-select"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div>
                        <label
                          htmlFor="datepicker-publish-input"
                          className="form-label"
                        >
                          Input Date Of Birth
                        </label>
                        <Flatpickr
                          className="form-control"
                          id="datepicker-publish-input"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            mode: "single",
                            dateFormat: "d.m.y",
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Product Gallery</h5>
                </CardHeader>
                <CardBody>
                  <div className="mb-4">
                    <h5 className="fs-14 mb-1">Product Image</h5>
                    <p className="text-muted">Add Product main Image.</p>
                    <input
                      className="form-control"
                      id="product-image-input"
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                    />
                  </div>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" className="btn btn-success w-sm" onClick={e => {
                  e.preventDefault();
                  addNewUser(user).then(res=>{
                    console.log(res);
                  })
                  
                }}>
                  Submit
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddUser;
