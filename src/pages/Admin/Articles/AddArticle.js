import React, { useEffect, useState, useMemo } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Card, CardBody, Col, Container, CardHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane, Input, Label, } from "reactstrap";

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
import { addNewArticle, getArticle, updateOneArticle } from "../../../helpers/fakebackend_helper";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AddArticle = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);

  const [Article, setArticle] = useState({
    name: '',
    description: '',
    contact_number: '',
    articleCategoryId: 'politics',
    attach_url: '',
    recommends: '',
    source: '',
    oppositions: '',
    browingcount: '',
    date: '',
  });

  useEffect(() => {
    if (id) {
      getArticle(id).then(res => {
        setArticle(res);
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

  const articleCategoryId = [
    {
      options: [
        { label: "politics", value: "1" },
        { label: "culture", value: "2" },
        { label: "artist", value: "3" },
        { label: "sport", value: "4" },

      ],
    },
  ];

  document.title = id ? "Edit Article" : "Add Article";

  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit Article" : "Add Article"} pageTitle="Admin Article" />

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
                      value={Article.name}
                      onChange={e => {
                        setArticle({ ...Article, ...{ name: e.target.value } })
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                      Description
                    </Label>
                    <Input
                      type="textarea"
                      className="form-control"
                      id="product-title-input"
                      placeholder="Enter description"
                      value={Article.description}
                      onChange={e => {
                        setArticle({ ...Article, ...{ description: e.target.value } })
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
                          Contact_number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter contact_number"
                          value={Article.contact_number}
                          onChange={e => {
                            setArticle({ ...Article, ...{ contact_number: e.target.value } })
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
                          Attach_url
                        </label>
                        <input
                          type="url"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter attach_url"
                          value={Article.attach_url}
                          onChange={e => {
                            setArticle({ ...Article, ...{ attach_url: e.target.value } })
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
                          Source
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter source"
                          value={Article.source}
                          onChange={e => {
                            setArticle({ ...Article, ...{ source: e.target.value } })
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
                          type="number"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter recommends"
                          value={Article.recommends}
                          onChange={e => {
                            setArticle({ ...Article, ...{ recommends: e.target.value } })
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
                          Oppositions
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter oppositions"
                          value={Article.oppositions}
                          onChange={e => {
                            setArticle({ ...Article, ...{ oppositions: e.target.value } })
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
                          Browingcount
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter browingcount"
                          value={Article.browingcount}
                          onChange={e => {
                            setArticle({ ...Article, ...{ browingcount: e.target.value } })
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
                          ArticleCategoryId
                        </Label>

                        <Select
                          value={{ value: Article.articleCategoryId, label: Article.articleCategoryId }}
                          onChange={(e) => {
                            console.log(e);
                            setArticle({ ...Article, ...{ articleCategoryId: e.value } })
                          }}
                          options={articleCategoryId}
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
                          Date
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
                    updateOneArticle(id, Article).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewArticle(Article).then(res => {
                      console.log(res);
                    })
                  }
                }}>
                  {id ? "Update Article" : "Add Article"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddArticle;
