import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import { Link } from 'react-router-dom';
const columnsBlogData = [
    {
        Header: "Reply message",
        accessor: "content",
        filterable: false,
        Cell: (article) => (
        <>
            <div className="blog-content-wrapper">
                <div>
                    <Link to = {"/pages-blog-service/article-man"} style={{"display":"inline-block"}}><img className="author-img" alt="Img" src={article.row.original.userId} /></Link>
                    <span className="author-name">{article.row.original.userId}</span>
                    <span className="publish-date ms-1">{article.row.original.ago}</span>
                </div>
                <div className="pt-3 d-flex justify-content-between">

                    <Link to={"/pages-blog-service/detail/" + article.row.original.id}>
                        <div className="blog-content">
                            <h3 className="blog-title" style={{width:800}}>{article.row.original.name}</h3>                            
                        </div>
                    </Link>

                    <div className="blog-detail-img-wrap">
                        <img className="blog-detail-img" alt="" src={article.row.original.attach_url} />
                    </div>

                </div>
                <div>
                    <Link to="/pages-blog-service/article-kind" className="rounded-pill btn btn-light tags me-4">{article.row.original.articleCategoryId}</Link>
                    <i className="bx bx-like pe-1"></i><span className="pe-3">{article.row.original.recommends}</span>
                    <i className="bx bx-message pe-1"></i><span className="pe-3">{article.row.original.oppositions}</span>
                </div>

            </div>

        </>)
    },
]
// {article.row.original.content[0]}
const BlogDataList = [
    {
        id: "1",
        content: [avatar1, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar2, 'programming', "30", "40", "50"],
        type: "dating"
    },
    {
        id: "2",
        content: [avatar2, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar3, 'programming', "30", "40", "50"],
        type: "dating"
    },
    {
        id: "3",
        content: [avatar3, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar2, 'programming', "30", "40", "50"],
        type: "nopublished"
    },
    {
        id: "4",
        content: [avatar3, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar2, 'programming', "30", "40", "50"],
        type: "nopublished"
    },
    {
        id: "5",
        content: [avatar1, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar2, 'programming', "30", "40", "50"],
        type: "nopublished"
    },
    {
        id: "6",
        content: [avatar3, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar1, 'programming', "30", "40", "50"],
        type: "dating"
    },
    {
        id: "7",
        content: [avatar2, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar2, 'programming', "30", "40", "50"],
        type: "dating"
    },
    {
        id: "8",
        content: [avatar1, "Mohamed Aboelez", "2", "Functional Programming Is Great. But It Ain’t Magic",
            "It’s not magic, folks. It’s just code. An increasing annoyance in my day-to-day job as a coach and trainer is what I call FPF, or “Functional Programming Fanaticism”. Typically, it emanates from people who’ve",
            avatar2, 'programming', "30", "40", "50"],
        type: "nopublished"
    },

]
export { columnsBlogData, BlogDataList }