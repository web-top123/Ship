import React, { useEffect, useState, useMemo } from "react";
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
import MetaTags from 'react-meta-tags';

// Import React FilePond
import { registerPlugin } from "react-filepond";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { addNewNotification, getNotification, updateOneNotification } from "../../../helpers/fakebackend_helper";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddNotification = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);

  const [user, setNotification] = useState({
    username: '',
    name: '',
    email: '',
    gender: 'male',
    birthday: '',
    password: '',
  });

  useEffect(() => {
    if (id) {
      getNotification(id).then(res => {
        setNotification(res);
      })
    }
  }, []);


  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
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

  const gender = [
    {
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
      ],
    },
  ];
  document.title = id ? "Edit Notification" : "Add Notification";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit Notification" : "Add Notification"} pageTitle="Admin Notification" />

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
                        setNotification({ ...user, ...{ name: e.target.value } })
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
                          Notificationname
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter Notificationname"
                          value={user.username}
                          onChange={e => {
                            setNotification({ ...user, ...{ username: e.target.value } })
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
                            setNotification({ ...user, ...{ email: e.target.value } })
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
                            setNotification({ ...user, ...{ gender: e.value } })
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
                  if (id) {
                    updateOneNotification(id, user).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewNotification(user).then(res => {
                      console.log(res);
                    })
                  }
                }}>
                  {id ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddNotification;
