import React, { useEffect, useState, useMemo } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Card, CardBody, Col, Container, CardHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane, Input, Label } from "reactstrap";

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
import { addNewCampusCategory, getCampusCategory, getCampusCategories, updateOneCampusCategory } from "../../../helpers/fakebackend_helper";

import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddCampusCategory = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);
  const [cateList, setCateList] = useState([]);
  const [campusCate, setCampusCate] = useState([]);

  const [CampusCategory, setCampusCategory] = useState({
    title: '',
    description: '',
    parentId: '',

  });

  var cateTree = [];
  useEffect(() => {
    if (id) {
      getCampusCategory(id).then(res => {
        setCampusCategory(res);
      })
    }

    getCampusCategories().then(res => {
      setCampusCate(res);
    })
  }, []);

  useEffect(() => {
    cateTree = [{
      label: 'Categories',
      value: 0,
      checked: CampusCategory.parentId == 0,
      children: [],
    }];
    refreshTree(cateTree[0].children, 0);
    setCateList(cateTree);
  }, [CampusCategory, campusCate]);

  const refreshTree = (obj, pid) => {
    campusCate.filter(e => e.parentId == pid).map(e => {
      var ch = {};
      ch = { label: e.title, value: e.id, expanded: true, checked: CampusCategory.parentId == e.id, children: [] };
      // ch = { label: e.title, value: e.id, expanded: true, children: [] };
      obj.push(ch);
      if (e.id != id) {
        refreshTree(ch.children, e.id);
      }
    })
  }

  const onChange = (currentNode, selectedNodes) => {
    console.log('onChange::', currentNode, selectedNodes)
    if (selectedNodes.length) {
      setCampusCategory({ ...CampusCategory, ...{ parentId: selectedNodes[0]['value'] } })
    }
  }
  const onAction = (node, action) => {
    console.log('onAction::', action, node)
  }
  const onNodeToggle = currentNode => {
    console.log('onNodeToggle::', currentNode)
  }

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

  const campusCategoryId = [
    {
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
      ],
    },
  ];
  document.title = id ? "Edit CampusCategory" : "Add CampusCategory";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit CampusCategory" : "Add CampusCategory"} pageTitle="Admin CampusCategory" />

        <Row>
          <Col lg={8}>
            <form>
              <Card>
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                      Title
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="product-title-input"
                      placeholder="Enter title"
                      value={CampusCategory.title}
                      onChange={e => {
                        setCampusCategory({ ...CampusCategory, ...{ title: e.target.value } })
                      }}
                    />
                  </div>
                  <Row>
                    <Col lg={8}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter description"
                          value={CampusCategory.description}
                          onChange={e => {
                            setCampusCategory({ ...CampusCategory, ...{ description: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          ParentId
                        </label>
                        <DropdownTreeSelect data={cateList} onChange={onChange} onAction={onAction} onNodeToggle={onNodeToggle} mode="radioSelect" />
                        {/* <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter parentId"
                          value={CampusCategory.parentId}
                          onChange={e => {
                            setCampusCategory({ ...CampusCategory, ...{ parentId: e.target.value } })
                          }}
                        /> */}
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
                    updateOneCampusCategory(id, CampusCategory).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewCampusCategory(CampusCategory).then(res => {
                      console.log(res);
                    })
                  }
                }}>
                  {id ? "Update CampusCategory" : "Add CampusCategory"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddCampusCategory;
