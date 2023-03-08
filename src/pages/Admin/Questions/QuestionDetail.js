import React, { useEffect, useState, useMemo } from "react";
import { Card, CardBody, Col, Container, ListGroup, Button, CardHeader, ListGroupItem, Input, Label, Tooltip, Nav, NavItem, NavLink, Row, TabContent, TabPane, Modal, ModalBody, ModalFooter, } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
//Import Flatepicker
import Flatpickr from "react-flatpickr";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { addNewQuestion, getQuestion, updateOneQuestion } from "../../../helpers/fakebackend_helper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { FadeRightExample } from "../../AdvanceUi/UiAnimation/UiAnimationCode";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

const QuestionReview = (props) => {
};

const PricingWidgetList = (props) => {
};


function QuestionDetail(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ttop, setttop] = useState(false);

  const [customActiveTab, setcustomActiveTab] = useState("1");
  let { id } = useParams();
  const [question, setQuestion] = useState({
    degreeId: '',
    level: '',
    description: '',
  });

  const [modal_list, setmodal_list] = useState(false);
  function tog_list() {
      setmodal_list(!modal_list);
  }

  const [modal_delete, setmodal_delete] = useState(false);
  function tog_delete() {
      setmodal_delete(!modal_delete);
  }

  useEffect(() => {
    if (id) {
      getQuestion(id).then(res => {
        setQuestion(res);
      })
    }
  }, []);
  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  document.title = "Question Details | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>

          <BreadCrumb title="Question Details" pageTitle="Ecommerce" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Row className="gx-lg-5">
                    <Col xl={8}>
                      <div className="mt-xl-0 mt-5">
                        <div className="d-flex">
                          <h5 className="fs-14 mb-3">{question.degreeId} {question.level} Level</h5>
                        </div>

                        <div className="table-responsive">
                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <th scope="row"> description :</th>
                                <td>{question.description}</td>
                                <td>                            <Tooltip
                                  placement="top"
                                  isOpen={ttop}
                                  target="TooltipTop"
                                  toggle={() => {
                                    setttop(!ttop);
                                  }}
                                >
                                  <Link
                                    to="/admin-add-question"
                                    className="btn btn-success"
                                  >
                                    <i className="ri-add-line align-bottom me-1"></i> Edit Question
                                  </Link>
                                </Tooltip>
                                  <a
                                    href={"/admin-add-question/" + id}
                                    id="TooltipTop"
                                    className="btn btn-light"
                                  >
                                    <i className="ri-pencil-fill align-bottom"></i>
                                  </a>
                                </td>
                                <td>
                                  <div className="d-flex gap-1" >
                                    <Button color="success" className="add-btn" onClick={() => tog_list()} id="create-btn"><i className="ri-add-line align-bottom me-1"></i> Add</Button>
                                    <Button color="soft-danger"><i className="ri-delete-bin-2-line"></i></Button>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                  <Row>
                    <div className="table-responsive table-card mt-3 mb-1">
                      <table className="table align-middle table-nowrap" id="customerTable">
                        <thead className="table-light">
                          <tr>
                            <th scope="col" style={{ width: "50px" }}>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="checkAll" value="option" />
                              </div>
                            </th>
                            <th className="sort" data-sort="customer_name">Customer</th>
                            <th className="sort" data-sort="email">Email</th>
                            <th className="sort" data-sort="phone">Phone</th>
                            <th className="sort" data-sort="date">Joining Date</th>
                            <th className="sort" data-sort="status">Delivery Status</th>
                            <th className="sort" data-sort="action">Action</th>
                          </tr>
                        </thead>
                        <tbody className="list form-check-all">
                          <tr>
                            <th scope="row">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="checkAll" value="option1" />
                              </div>
                            </th>
                            <td className="id" style={{ display: "none" }}><Link to="#" className="fw-medium link-primary">#VZ2101</Link></td>
                            <td className="customer_name">Mary Cousar</td>
                            <td className="email">marycousar@velzon.com</td>
                            <td className="phone">580-464-4694</td>
                            <td className="date">06 Apr, 2021</td>
                            <td className="status"><span className="badge badge-soft-success text-uppercase">Active</span></td>
                            <td>
                              <div className="d-flex gap-2">
                                <div className="edit">
                                  <button className="btn btn-sm btn-success edit-item-btn"
                                    data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                </div>
                                <div className="remove">
                                  <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="pagination-wrap hstack gap-2">
                        <Link className="page-item pagination-prev disabled" to="#">
                          Previous
                        </Link>
                        <ul className="pagination listjs-pagination mb-0"></ul>
                        <Link className="page-item pagination-next" to="#">
                          Next
                        </Link>
                      </div>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Add Modal */}
      <Modal isOpen={modal_list} toggle={() => { tog_list(); }} centered >
        <div className="modal-header bg-light p-3">
          Add Customer
          <Button type="button" onClick={() => { setmodal_list(false); }} className="btn-close" aria-label="Close" >
          </Button>
        </div>
        <form>
          <ModalBody>
            <div className="mb-3" id="modal-id" style={{ display: "none" }}>
              <label htmlFor="id-field" className="form-label">ID</label>
              <input type="text" id="id-field" className="form-control" placeholder="ID" readOnly />
            </div>

            <div className="mb-3">
              <label htmlFor="customername-field" className="form-label">Customer Name</label>
              <input type="text" id="customername-field" className="form-control" placeholder="Enter Name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email-field" className="form-label">Email</label>
              <input type="email" id="email-field" className="form-control" placeholder="Enter Email" required />
            </div>

            <div className="mb-3">
              <label htmlFor="phone-field" className="form-label">Phone</label>
              <input type="text" id="phone-field" className="form-control" placeholder="Enter Phone no." required />
            </div>

            <div className="mb-3">
              <label htmlFor="date-field" className="form-label">Joining Date</label>
              <Flatpickr
                className="form-control"
                options={{
                  dateFormat: "d M, Y"
                }}
                placeholder="Select Date"
              />
            </div>

            <div>
              <label htmlFor="status-field" className="form-label">Status</label>
              <select className="form-control" data-trigger name="status-field" id="status-field" >
                <option value="">Status</option>
                <option value="Active">Active</option>
                <option value="Block">Block</option>
              </select>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="hstack gap-2 justify-content-end">
              <button type="button" className="btn btn-light" onClick={() => setmodal_list(false)}>Close</button>
              <button type="submit" className="btn btn-success" id="add-btn">Add Customer</button>
              <button type="button" className="btn btn-success" id="edit-btn">Update</button>
            </div>
          </ModalFooter>
        </form>
      </Modal>
      {/* Remove Modal */}
      <Modal isOpen={modal_delete} toggle={() => { tog_delete(); }} className="modal fade zoomIn" id="deleteRecordModal" centered >
        <div className="modal-header">
          <Button type="button" onClick={() => setmodal_delete(false)} className="btn-close" aria-label="Close"> </Button>
        </div>
        <ModalBody>
          <div className="mt-2 text-center">
            <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop"
              colors="primary:#ffbe0b,secondary:#f06548" style={{ width: "100px", height: "100px" }}></lord-icon>
            <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
              <h4>Are you Sure ?</h4>
              <p className="text-muted mx-4 mb-0">Are you Sure You want to Remove this Record ?</p>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
            <button type="button" className="btn w-sm btn-light" onClick={() => setmodal_delete(false)}>Close</button>
            <button type="button" className="btn w-sm btn-danger " id="delete-record">Yes, Delete It!</button>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default QuestionDetail;