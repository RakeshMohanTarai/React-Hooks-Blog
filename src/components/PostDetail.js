import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import { useParams } from "react-router-dom"; // this will help me to get the ID of a perticular post
import { Link } from "react-router-dom";

function PostDetail() {

  const [post, setPost] = useState([]); // use the empty Object by default
  const { postId } = useParams(); // useParams will give me an Object

  useEffect(() => {
    // Fetch the specific post using postId
    const unsubscribe = onSnapshot(collection(db, "posts"), (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log('Posts Data', data);

      // Find the post with the matching postId
      const selectedPost = data.find((item) => item.id === postId);

      if (selectedPost) {
        setPost(selectedPost);
      } else {
        // Handle the case where the post with postId is not found
        // You can set an error state or perform any other necessary action
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [postId]); // Use postId as a dependency to fetch the post when it changes

  if (!post) {
    // Optionally, you can show a loading indicator while the data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div className="post-detail">
      <h1> {post.title} </h1>
      <p>{post.content}</p>

      <Link to="/" className="back-button">Back to Home</Link>

    </div>
  );
}

export default PostDetail;
