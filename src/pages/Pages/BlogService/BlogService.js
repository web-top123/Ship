import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  TabContent,
  Nav,
  NavItem,
  NavLink,
  CardHeader,
  TabPane,
  Button,
  Modal,
  ModalHeader,
  Label,
  Input,
  Form,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { columnsBlogData, BlogDataList } from "./TestBlogData";
import { useMemo } from "react";
import TableContainer from "../../../Components/Common/TableContainer";
import classnames from "classnames";
import {
  getArticles,
  getArticleCategories,
  getArticleFindTopUser,
} from "../../../helpers/fakebackend_helper";
import {
    addNewArticle
  } from "../../../helpers/fakebackend_helper";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import { Link } from "react-router-dom";
import Select from "react-select";
import { useQuill } from "react-quilljs";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "quill/dist/quill.snow.css";

const BlogService = () => {
  const { quillRef } = useQuill();
  document.title = "Blog Service";
  const columnsBlog = useMemo(() => columnsBlogData, []);
  const [articles, setArticles] = useState([]);
  const [articleCategories, setArticleCategories] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [articleTopWriter, setArticleTopWriter] = useState([]);
  const [BlogDataPublisedFilter, setBlogDataPublisedFilter] = useState([]);
  const [BlogDataDraftFilter, setBlogDataDraftFilter] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [articleCategory, setArticleCategory] = useState({});
  const [article, setArticle] = useState({
    name: "",
    description: "",
    contact_number: "",
    articleCategoryId: "",
    articleCategory: {
      title: "",
    },
    attach_url: "",
    recommends: "",
    source: "",
    oppositions: "",
    browingcount: "",
  });

  const toggleTab = (tab, type) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      let filteredBlogs = BlogDataList;
      if (type !== "trending") {
        filteredBlogs.map((product) => console.log(product));
        filteredBlogs = BlogDataList.filter((product) => product.type === type);
      }
      if (type === "date") {
        setBlogDataPublisedFilter(filteredBlogs);
        setArticles(filteredBlogs);
      }
      if (type === "trending") {
        setArticles(filteredBlogs);
      }
      if (type === "draft") {
        setBlogDataDraftFilter(BlogDataDraftFilter);
        setArticles(filteredBlogs);
      }
      // setBlogDataList(filteredBlogs);
    }
  };

  const getAgoString = (difference) => {
    let dayDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    let hourDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    let minDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    if (dayDifference > 0) {
      return dayDifference + (dayDifference === 1 ? " day ago" : " days ago");
    }
    if (hourDifference > 0) {
      return hourDifference + " hours ago";
    }
    return minDifference + " mins ago";
  };

  useEffect(() => {
    getArticles().then((articles) => {
      let today = new Date();
      for (const article of articles) {
        console.log("yyyyy", article);
        let createdDate = new Date(article.createdAt);
        let difference = Math.abs(today - createdDate);
        article.ago = getAgoString(difference);
      }
      setArticles(articles);
    });
    getArticleCategories().then((categories) => {
      console.log("Article Categories:", categories);
      setArticleCategories(categories);
    });
    getArticleFindTopUser().then((topUser) => {
      console.log("top user;", topUser);
      setArticleTopWriter(topUser);
    });
  }, []);
  ///////////
  useEffect(() => {
    getArticleCategories().then((categories) => {
      console.log(categories);
      for (const category of categories) {
        category.label = category.title;
        category.value = category.id;
      }
      setCategoryList(categories);
    });
  }, []);

  const [modal_large, setmodal_large] = useState(false);
  function tog_large() {
    setmodal_large(!modal_large);
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Blog Service" />
          <Row>
            <Col xl={9} lg={8}>
              <Card>
                <CardHeader className="d-flex justify-content-between">
                  <Nav
                    className="nav-tabs-custom card-header-tabs border-bottom-0"
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={classnames(
                          { active: activeTab === "1" },
                          "fw-semibold"
                        )}
                        onClick={() => {
                          toggleTab("1", "trending");
                        }}
                        href="/pages-blog-service"
                      >
                        Trending{" "}
                        <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                          {articles.length}
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames(
                          { active: activeTab === "2" },
                          "fw-semibold"
                        )}
                        onClick={() => {
                          toggleTab("2", "date");
                        }}
                        href="#"
                      >
                        Date{" "}
                        <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                          {BlogDataPublisedFilter.length}
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames(
                          { active: activeTab === "3" },
                          "fw-semibold"
                        )}
                        onClick={() => {
                          toggleTab("3", "draft");
                        }}
                        href="#"
                      >
                        Draft{" "}
                        <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                          {BlogDataDraftFilter.length}
                        </span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <Button
                    color="primary"
                    className="new-article-add-btn"
                    onClick={() => tog_large(true)}
                  >
                    New Article Add
                  </Button>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-muted blog-table-content">
                    <TabPane>
                      <div
                        id="table-product-list-all"
                        className="table-card gridjs-border-none pb-2"
                      >
                        <TableContainer
                          columns={columnsBlog}
                          data={articles}
                          isGlobalFilter={false}
                          isGlobalSearch={true}
                          isAddUserList={false}
                          customPageSize={10}
                          divClass="table-responsive mb-1"
                          tableClass="mb-0 table-borderless"
                          theadClass="table-light text-muted"
                        />
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} lg={4}>
              <Row>
                <Card>
                  <CardBody>
                    <h4 className="mb-sm-0">Related Topics</h4>
                    <div className="realted-topic d-flex flex-wrap">
                      {articleCategories.map((articleCategory, key) => (
                        <React.Fragment key={key}>
                          <Link
                            className="rounded-pill btn btn-light tags me-4"
                            to={
                              "/pages-blog-service/article-kind/" +
                              articleCategory.id
                            }
                          >
                            {articleCategory.title}
                          </Link>
                        </React.Fragment>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </Row>
              <Row>
                <Card className="my-5 pb-4">
                  <CardBody>
                    <h4 className="mb-sm-0 pb-4">Top Writers</h4>
                    <div className="top-writers d-flex align-items-center pt-4">
                      <div className="d-flex me-2">
                        <div className="me-2">
                          <img
                            style={{
                              width: "32px",
                              height: "auto",
                              borderRadius: "50%",
                            }} alt="Img"
                            src={avatar1}
                          />
                        </div>
                        <div>
                          {articleTopWriter.map((findTopWirter) => ( 
                            findTopWirter.map((oneWriter, key) => (
                                <React.Fragment key={key}>                    
                                <Link
                                    className="rounded-pill btn btn-light tags me-4"
                                    to={
                                    "/pages-blog-service/detail/" + findTopWirter.id
                                    }
                                >
                                    {oneWriter.username }
                                </Link>
                                </React.Fragment>
                            ))                           
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Large Modal */}
      <Modal
        size="lg"
        isOpen={modal_large}
        toggle={() => {
          tog_large();
        }}
      >
        <ModalHeader>
          New Article Add
          <Button
            onClick={() => {
              setmodal_large(false);
            }}
            type="button"
            className="btn-close"
            aria-label="Close"
          ></Button>
        </ModalHeader>
        <div className="modal-body">
          <div className="mb-3">
            <Label htmlFor="id-field-sort" className="form-label">
              Sort
            </Label>
            {/* <Select name="sort" id="id-field-sort" options={sort}>
                        </Select> */}
            <Select
              value={articleCategory}
              onChange={(e) => {
                setArticleCategory(e);
                setArticle({
                  ...article,
                  ...{ articleCategoryId: e.id },
                });
                console.log("Add Article", articleCategories);
              }}
              options={categoryList}
              name="choices-publish-visibility-input"
              classNamePrefix="select2-selection form-select"
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="id-field-title" className="form-label">
              Title
            </Label>
            <Input
              name="title"
              id="id-field"
              className="form-control"
              placeholder="Enter Article Title"
              type="text"
              value={article.name}
              onChange={(e) => {
                setArticle({ ...article, ...{ name: e.target.value } });
              }}
            />
          </div>
          <div className="mb-3">
            <Label>Article Content</Label>
            <Form method="post">
              <CKEditor
                editor={ClassicEditor}
                data=""
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setArticle({ ...article, ...{ description: data } });
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </Form>
          </div>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <span className="pe-3">Contact Information</span>
              <Input
                name="contactinfo"
                id="id-field-contactinfo"
                className="form-control"
                placeholder="129122312"
                type="text"
                value={article.contact_number}
                onChange={(e) => {
                  setArticle({
                    ...article,
                    ...{ contact_number: e.target.value },
                  });
                }}
              />
            </div>
            <div>
              <span className="pe-3">Attach File</span>
              <input
                className="form-control"
                id="product-image-input"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                value={article.attach_url}
                onChange={(e) => {
                  setArticle({
                    ...article,
                    ...{ attach_url: e.target.files[0] },
                  });
                }}
              />
            </div>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <span className="pe-3">Source</span>
            <Input
              name="source"
              id="id-field-source"
              className="form-control"
              placeholder="Title Book"
              type="text"
              value={article.source}
              onChange={(e) => {
                setArticle({
                  ...article,
                  ...{ source: e.target.value },
                });
              }}
            />
          </div>
          <div className="pt-2 d-flex justify-content-between align-items-center">
            <Button
              color="primary"
              data-bs-toggle="button"
              aria-pressed="false"
              className="me-2"
            >
              Grammar Checking
            </Button>
            <Button
              type="submit"
              color="primary"
              data-bs-toggle="button"
              aria-pressed="false"
              onClick={(e) => {
                e.preventDefault();
                const formData = new FormData();
                formData.append("name", article.name);
                formData.append("description", article.description);
                formData.append("contact_number", article.contact_number);
                formData.append("articleCategoryId", article.articleCategoryId);
                formData.append("attach_url", article.attach_url);
                formData.append("recommends", article.recommends);
                formData.append("source", article.source);
                formData.append("oppositions", article.oppositions);
                formData.append("browingcount", article.browingcount);

                addNewArticle(article).then((res) => {
                    console.log(res);
                  });
                }}
            >
              Add
            </Button>

            {/* <button
                  type="submit"
                  className="btn btn-success w-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    const formData = new FormData();
                    formData.append("name", article.name);
                    formData.append("description", article.description);
                    formData.append("contact_number", article.contact_number);
                    formData.append("articleCategoryId", article.articleCategoryId);
                    formData.append("attach_url", article.attach_url);
                    formData.append("recommends", article.recommends);
                    formData.append("source", article.source);
                    formData.append("oppositions", article.oppositions);
                    formData.append("browingcount", article.browingcount);
                    if (id) {
                      updateOneArticle(id, article).then((res) => {
                        console.log(res);
                      });
                    } else {
                      addNewArticle(article).then((res) => {
                        console.log(res);
                      });
                    }
                  }}
                >
                  {id ? "Update Article" : "Add Article"}
                </button> */}

          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default BlogService;
