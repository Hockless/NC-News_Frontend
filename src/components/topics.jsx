import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";


const Nav = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics().then((topicsFromApi) => {
            setTopics(topicsFromApi);
        });
    }, [])
   
    return (
        <nav className="Nav">
            {topics.map((topic) => {             
                return (
                    <li>
                    <Link key={topic.slug} to={`topics/${topic.slug}`}>
                        {topic.slug}
                    </Link>
                     
                    </li>
                    
                )

            })}
        </nav>
    );

};


export default Nav;