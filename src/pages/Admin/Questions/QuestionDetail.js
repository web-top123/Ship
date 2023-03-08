import React, { useEffect, useState, useMemo } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Tooltip,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { addNewQuestion, getQuestion, updateOneQuestion } from "../../../helpers/fakebackend_helper";

import product1 from "../../../assets/images/products/img-1.png";
import product6 from "../../../assets/images/products/img-6.png";
import product8 from "../../../assets/images/products/img-8.png";

import { Swiper, SwiperSlide } from "swiper/react";
import classnames from "classnames";
import MetaTags from 'react-meta-tags';

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
                              {/* <td>
                                <div className="d-flex gap-1" >
                                  <Button color="success" className="add-btn" onClick={() => tog_list()} id="create-btn"><i className="ri-add-line align-bottom me-1"></i> Add</Button>
                                  <Button color="soft-danger"><i className="ri-delete-bin-2-line"></i></Button>
                                </div>
                              </td> */}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default QuestionDetail;