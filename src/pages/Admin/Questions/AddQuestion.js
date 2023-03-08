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
import MetaTags from "react-meta-tags";

// Import React FilePond
import { registerPlugin } from "react-filepond";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import {
  addNewQuestion,
  getQuestion,
  updateOneQuestion,
} from "../../../helpers/fakebackend_helper";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const SingleOptions = [
  { value: '1', label: 'Caption' },
  { value: '2', label: 'Engineer manager' },
  { value: '3', label: 'Vice-caption' },
  { value: '4', label: 'Bosun' },
  { value: '5', label: 'Vice-E.manager' },
  { value: '6', label: 'Sailor' },
  { value: '7', label: 'Communicator' },
  { value: '8', label: 'Bosun member' },
  { value: '9', label: 'Engineer' },
  { value: '10', label: 'Electircian' },
  { value: '11', label: '2nd Engineer' },
];

const AddQuestion = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);
  const [selectedSingle, setSelectedSingle] = useState(null);
  const [question, setQuestion] = useState({
    level:"",
    degreeId: "",
    description: "",

  });

  useEffect(() => {
    if (id) {
      getQuestion(id).then((res) => {
        setQuestion(res);
      });
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

  function handleSelectSingle(selectedSingle) {
    setSelectedSingle(selectedSingle);
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

  document.title = id ? "Edit Question" : "Add Question";
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb
          title={id ? "Edit Question" : "Add Question"}
          pageTitle="Admin Question"
        />

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
                          degree
                        </label>
                        <input
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter degree"
                          value={question.degreeId}
                          onChange={(e) => {
                            setQuestion({
                              ...question,
                              ...{ degreeId: e.target.value },
                            });
                          }}
                        />

                       </div>
                    </Col>
                                              {/* <div className="mb-3">
                            <Select
                              value={selectedSingle}
                              onChange={() => {
                                handleSelectSingle();
                              }}
                              options={SingleOptions}
                            />
                          </div> */}
                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          level
                        </label>
                        <input
                          className="form-control"
                          id="manufacturer-brand-input"
                          placeholder="Enter level"
                          value={question.level}
                          onChange={(e) => {
                            setQuestion({
                              ...question,
                              ...{ level: e.target.value },
                            });
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
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
                      value={question.description}
                      onChange={(e) => {
                        setQuestion({
                          ...question,
                          ...{ description: e.target.value },
                        });
                      }}
                    />
                  </div>


                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button
                  type="submit"
                  className="btn btn-success w-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    if (id) {
                      updateOneQuestion(id, question).then((res) => {
                        console.log(res);
                      });
                    } else {
                      addNewQuestion(question).then((res) => {
                        console.log(res);
                      });
                    }
                  }}
                >
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

export default AddQuestion;
