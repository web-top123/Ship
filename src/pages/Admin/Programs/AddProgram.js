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
import { addNewProgram, getProgram, updateOneProgram, getProgramCategories } from "../../../helpers/fakebackend_helper";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

import DropdownTreeSelect from 'react-dropdown-tree-select';
import 'react-dropdown-tree-select/dist/styles.css';

const AddProgram = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);
  const [cateList, setCateList] = useState([]);
  const [programCate, setProgramCate] = useState([]);

  const [Program, setProgram] = useState({
    name: '',
    description: '',
    requirement: '',
    programCategoryId: '',
    date: '',
    recommends: '',
    purchases: '',
    file_url: null,
    image_url: '',
    cost: '',
  });

  useEffect(() => {
    if (id) {
      getProgram(id).then(res => {
        setProgram(res);
      })
    }
  }, []);

  var cateTree = [];
  useEffect(() => {
    getProgramCategories().then(res => {
      setProgramCate(res);
      if (id) {
        getProgram(id).then(e => {
          setProgram(e);
        })
      }
    })
  }, []);

  useEffect(() => {
    cateTree = [];
    refreshTree(cateTree, 0);
    setCateList(cateTree);
  }, [Program, programCate]);

  const refreshTree = (obj, pid) => {
    programCate.filter(e => e.parentId == pid).map(e => {
      var ch = {};
      ch = { label: e.title, value: e.id, expanded: true, checked: Program.programCategoryId == e.id, children: [] };
      obj.push(ch);
      refreshTree(ch.children, e.id);
    })
  }

  // useEffect(() => {
  //   if (id) {
  //     getProgram(id).then(res => {
  //       setProgram(res);
  //     })
  //   }
  // }, []);


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

  const onChange = (currentNode, selectedNodes) => {
    console.log('onChange::', currentNode, selectedNodes.title)
    if (selectedNodes.length) {
      setProgram({ ...Program, ...{ programCategoryId: selectedNodes[0]['value'] } })
    }
  }
  const onAction = (node, action) => {
    console.log('onAction::', action, node)
  }
  const onNodeToggle = currentNode => {
    console.log('onNodeToggle::', currentNode)
  }

  document.title = id ? "Edit Program" : "Add Program";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit Program" : "Add Program"} pageTitle="Admin Program" />

        <Row>
          <Col lg={8}>
            <form>
              <Card>
                <CardBody>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label className="form-label" htmlFor="product-title-input">
                          Name
                        </Label>
                        <input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          placeholder="Enter name"
                          value={Program.name}
                          onChange={e => {
                            setProgram({ ...Program, ...{ name: e.target.value } })
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Requirement
                        </label>
                        <textarea
                          rows={2}
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter requirement"
                          value={Program.requirement}
                          onChange={e => {
                            setProgram({ ...Program, ...{ requirement: e.target.value } })
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
                          Description
                        </label>
                        <textarea
                          rows={6}
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter description"
                          value={Program.description}
                          onChange={e => {
                            setProgram({ ...Program, ...{ description: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Purchases
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter purchases"
                          value={Program.purchases}
                          onChange={e => {
                            setProgram({ ...Program, ...{ purchases: e.target.value } })
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
                          Recommends
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter recommends"
                          value={Program.recommends}
                          onChange={e => {
                            setProgram({ ...Program, ...{ recommends: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                    </Row>
                    <Row>

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
                          value={Program.cost}
                          onChange={e => {
                            setProgram({ ...Program, ...{ cost: e.target.value } })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div>
                        <label
                          htmlFor="datepicker-publish-input"
                          className="form-label"
                        >
                          Date
                        </label>
                        <Flatpickr
                          className="form-control"
                          id="datepicker-publish-input"
                          value={Program.date}
                          onChange={([value]) => {
                            setProgram({ ...Program, ...{ date: value } })
                          }}
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
                 

                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          ProgramCategoryId
                        </label>
                        <DropdownTreeSelect data={cateList} onChange={onChange} onAction={onAction} onNodeToggle={onNodeToggle} mode="radioSelect" />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Program Image</h5>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-4">
                        <h5 className="fs-14 mb-1">Program Image</h5>
                        <p className="text-muted">Add Program main Image.</p>
                        <input
                          className="form-control"
                          id="product-image-input"
                          type="file"
                          accept="image/png, image/gif, image/jpeg"
                          onChange={e => {
                            setProgram({ ...Program, ...{ file_url: e.target.files[0] } })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      {/* <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          File
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter description"
                          value={Program.image_url}
                          onChange={e => {
                            setProgram({ ...Program, ...{ image_url: e.target.value } })
                          }}
                        />
                      </div> */}
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" className="btn btn-success w-sm" onClick={e => {
                  e.preventDefault();
                  const formData = new FormData();
                  formData.append("name", Program.name);
                  formData.append("description", Program.description);
                  formData.append("requirement", Program.requirement);
                  formData.append("programCategoryId", Program.programCategoryId);
                  formData.append("date", Program.date);
                  formData.append("recommends", Program.recommends);
                  formData.append("purchases", Program.purchases);
                  formData.append("file", Program.file_url);
                  formData.append("image_url", Program.image_url);
                  formData.append("cost", Program.cost);
                  console.log(formData, Program);
                  if (id) {
                    updateOneProgram(id, formData).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewProgram(formData).then(res => {
                      console.log(res);
                    })
                  }
                }}>
                  {id ? "Update Program" : "Add Program"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddProgram;
