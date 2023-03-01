import { useLocation, useParams } from "react-router-dom";
import PostList from "./childs/PostList";
import PostDetail from "./childs/PostDetail";
import PostService from "../../services/post.service";
import { useEffect, useState } from "react";

const Post = () => {
  const { prev, path, parentPath, childPath } = useParams();
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState({});
  const [subCategory, setSubCategory] = useState({});

  const { search } = useLocation();

  const parameters = new URLSearchParams(search);

  const searchData = parameters.get("searchTerm");

  // console.log(searchData);
  // console.log(prev, path, parentPath, childPath);

  const getByPath = () => {
    PostService.getByPath({
      prev: prev,
      path: path,
      parentPath: parentPath,
      childPath: childPath,
    })
      .then((res) => {
        setPosts(res.data.posts);
        if (res.data.category) setCategory(res.data.category);
        if (res.data.subCategory) setSubCategory(res.data.subCategory);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPosts = () => {
    PostService.search({ searchData: searchData })
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setPosts([]);
    setCategory({});
    setSubCategory({});
    getByPath();
  }, [prev, path, parentPath, childPath]);

  useEffect(() => {
    getPosts();
  }, [searchData]);

  return (
    <>
      {prev || searchData ? (
        <PostList
          posts={posts}
          searchData={searchData}
          category={category}
          subCategory={subCategory}
        />
      ) : (
        <PostDetail posts={posts} />
      )}
      {/* <div className="row mt-50">
          <div className="col-12">
            <div
              className="pagination-area mb-30 wow fadeInUp animated"
              style="visibility: hidden; animation-name: none;"
            >
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="elegant-icon arrow_left"></i>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      01
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      04
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="elegant-icon arrow_right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div> */}
    </>
  );
};

export default Post;
