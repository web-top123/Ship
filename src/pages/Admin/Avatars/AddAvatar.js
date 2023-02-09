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
import { addNewAvatar, getAvatar, updateOneAvatar } from "../../../helpers/fakebackend_helper";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddAvatar = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);

  const [Avatar, setAvatar] = useState({
    name: '',
    file_url: null,
    cost: '',

  });

  useEffect(() => {
    if (id) {
      getAvatar(id).then(res => {
        setAvatar(res);
      })
    }
  }, []);

  document.title = id ? "Edit Avatar" : "Add Avatar";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit Avatar" : "Add Avatar"} pageTitle="Admin Avatar" />

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
                      value={Avatar.name}
                      onChange={e => {
                        setAvatar({ ...Avatar, ...{ name: e.target.value } })
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
                          accept="image/png, image/gif, image/jpeg"
                          onChange={e=>{
                            setAvatar({ ...Avatar, ...{ file_url: e.target.files[0] } })
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
                          value={Avatar.cost}
                          onChange={e => {
                            setAvatar({ ...Avatar, ...{ cost: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>


                </CardBody>
              </Card>

              {/* <Card>
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
              </Card> */}

              <div className="text-end mb-3">
                <button type="submit" className="btn btn-success w-sm" onClick={e => {
                  e.preventDefault();
                  const formData = new FormData();
                  formData.append("cost", Avatar.cost);
                  formData.append("name", Avatar.name);
                  formData.append("file", Avatar.file_url);
                  if (id) {
                    updateOneAvatar(id, formData).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewAvatar(formData).then(res => {
                      console.log(res);
                    })
                  }
                }}>
                  {id ? "Update Avatar" : "Add Avatar"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddAvatar;