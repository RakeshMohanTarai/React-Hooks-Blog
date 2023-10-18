import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase"

function Home() {
  const [posts, setPosts] = useState([]);  // use empty array by defult to store the data of the fireStore

  // useEffect is used to fetch the data from the fireStore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(data);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array to run the effect only once


  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Rakesh</div>

      {posts.map((post, index) => ( //For each post object in the array, it also receives an index as the second parameter.
        // The key attribute is set to a unique value that combines the index and converts it to a string.
        <div className="post" key={`${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
