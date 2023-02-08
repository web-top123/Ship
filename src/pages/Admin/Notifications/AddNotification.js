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


  const [notification, setNotification] = useState({
    date: '',
    description: '',
    type: '',
    
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

  const type = [
    {
      options: [
        { label: "select1", value: "select1" },
        { label: "select2", value: "select2" },
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
                  
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Date
                        </label>
                        <Flatpickr
                          className="form-control"
                          id="datepicker-publish-input"
                          options={{
                            // altInput: true,
                            // altFormat: "F j, Y",
                            mode: "single",
                            dateFormat: "Y-m-d",
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
                          description
                        </label>
                        <textarea
                        rows="3"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter description"
                          value={notification.description}
                          onChange={e => {
                            setNotification({ ...notification, ...{ description: e.target.value } })
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
                          Select type
                        </Label>

                        <Select
                          value={{ value: notification.type, label: notification.type == 'select1' ? 'select1' : 'select2' }}
                          onChange={(e) => {
                            console.log(e);
                            setNotification({ ...notification, ...{ type: e.value } })
                          }}
                          options={type}
                          name="choices-publish-visibility-input"
                          classNamePrefix="select2-selection form-select"
                        />
                      </div>
                    </Col>
                    {/* <Col lg={6}>
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
                    </Col> */}
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
                    updateOneNotification(id, notification).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewNotification(notification).then(res => {
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
