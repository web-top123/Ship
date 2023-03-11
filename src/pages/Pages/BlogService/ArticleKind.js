import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Card, CardBody, TabContent,CardHeader, TabPane } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { columnsBlogData, BlogDataList } from './TestBlogData';
import { useMemo } from "react";
import TableContainer from "../../../Components/Common/TableContainer";
import ArticleSideBar from './ArticleSideBar';
import { getArticleCategory,getArticleByCategoryId, getArticles, getArticle } from "../../../helpers/fakebackend_helper";
import { Link, useParams  } from "react-router-dom";

const ArticleKind = () => {
    document.title = "Blog Service";
    const columnsBlog = useMemo(() => columnsBlogData, []);
    const [BlogDataListFilter, setBlogDataList] = useState(BlogDataList);
    const [articleCategory, setArticleCategory] = useState({
        title: "",
        description: "",       
    });
    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState({
        name: "",
        description: "",
        contact_number: "",
        articleCategoryId: "",
        categoryTitle: "",
        attach_url: "",
        recommends: "",
        source: "",
        oppositions: "",
        browingcount: "",
      });
     
    let { id } = useParams();
   
    useEffect(() => {
      if (id) {
        getArticleCategory(id).then(category => {
            console.log("Category:", category);
            setArticleCategory(category);          
        });

        getArticleByCategoryId(id).then(categoryData => {            
            setArticles(categoryData.articles);
            console.log("articleList: ", categoryData.articles);
        });
      }
    }, [id]);

    useEffect(() => {
        for (const article of articles) {
          article.categoryTitle = articles[article.articleCategoryId-1].title;
        }
        console.log("xxx", articles);
      }, [articles]);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Blog Service" />
                    <Row>
                        <Col xl={9} lg={8}>
                            <Card>
                                <CardHeader className='text-center'>
                                    <h4>{articleCategory.title}</h4>
                                </CardHeader>
                                <CardBody className=''>
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
                            <ArticleSideBar />                       
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ArticleKind;