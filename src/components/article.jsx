import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleID } from "../utils/api";
import { getComments } from "../utils/api";

const Article = () => {
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState([])
    const [com, newCom] = useState([]);
    const { article_id } = useParams();
    useEffect(() => {
        getArticleID(article_id).then((apiArticle) => {
            setArticle(apiArticle.article);   
            setLoading(false)     
        })
    } ,[article_id])
    
    useEffect(() => {
        getComments(article_id).then((apiArticle) => {
            newCom(apiArticle)
        })
    }, [article_id]);

    console.log(com)

  if (loading) return <p>Loading...</p>
    return(
    <main className="articles">
         <ul>
                        
                <h4 className="articleTitle">
                {article.title}
                </h4>
                <h5 className="articleTopic">
                    Topic: {article.topic}
                </h5>
                <p className="articleBody">
                    {article.body}
                </p>
                <p className="commentCount"> Comments: {article.comment_count}</p>
                <p>{com.body}</p>
                </ul>
    </main>
 )
}

export default Article;