import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cooking = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then((articles) => {
            setArticles(articles)
        })
    }, []);
    
    return (
        <main className="articles">
        <ul>
            {articles.map((article) => {
                if (article.topic === 'cooking')
                return (
                    <ul>
                            <Link to={`/articles/${article.article_id}`}>
                            <h4 className="articleTitle">
                            {article.title}
                            </h4>
                            </Link>
                            
                            <h5 className="articleTopic">
                               Topic: {article.topic}
                            </h5>
                            <p className="articleBody">
                                {article.body}
                            </p>
                            <p className="commentCount"> Comments: {article.comment_count}</p>
                      
                    </ul>
                )
            })}
        </ul>
    </main>
    )

}

export default Cooking;