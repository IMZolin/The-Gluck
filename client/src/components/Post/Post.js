import { Link } from "react-router-dom";
import {formatISO9075} from "date-fns";
import "./post.css";

export default function Post({img}) {
    return (
        <div className="post">
            <div className="image">
                <Link to="/post/abc" className="link">
                    <img
                        className="postImg"
                        src={img}
                        alt=""
                    />
                </Link>
            </div>
            <div className="texts">
                <Link to={`/post/abc`}>
                    <h2>Lorem ipsum dolor sit amet</h2>
                </Link>
                <p className="info">
                    <a className="author">@author123</a>
                    <time>{formatISO9075(new Date(2022-12-12))}</time>
                </p>
                <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
                    <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
                </div>
                <span className="postTitle">
        </span>
                <p className="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                    officia architecto deserunt deleniti? </p>
            </div>
        </div>
    );
}