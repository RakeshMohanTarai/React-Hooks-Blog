//import { useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Import Firestore functions
import { useFormInput } from '../config/hooks';

function CreatePost() {
  // const [title, setTitle] = useState();
  // const [subTitle, setSubTitle] = useState();
  // const [content, setContent] = useState();

  // Here now we are using customs hooks so instead of array now we are using Object
  const title = useFormInput(' ');
  const subTitle = useFormInput(' ');
  const content = useFormInput(' ');

  async function handleSubmit(e) {
    e.preventDefault();

    console.log('title', title);
    console.log('subtitle', subTitle);
    console.log('content', content);

    // Use addDoc to add a document to the "posts" collection
    try {
      // const docRef = await addDoc(collection(db, "posts"), { // here in this "post" mention the collection  
      // title, 
      // subTitle,
      // content,
      // createdAt: serverTimestamp(), // serverTimestamp will recored that when your collection or document is created in the fireStore
      // });

      // cause we are using custom hooks now we have to use '.value' to get the value
      const docRef = await addDoc(collection(db, "posts"), { // here in this "post" mention the collection  
        title: title.value,
        subTitle: subTitle.value,
        content: content.value,
        createdAt: serverTimestamp(), // serverTimestamp will recored that when your collection or document is created in the fireStore
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          {/* <input value={title} onChange={(e) => setTitle(e.target.value)} /> */}

          {/* This allows the <input> element to inherit the behavior and state management defined in the title object, which is created by a custom hook.  */}
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          {/* <input value={subTitle} onChange={(e) => setSubTitle(e.target.value)} /> */}

          {/* This allows the <input> element to inherit the behavior and state management defined in the title object, which is created by a custom hook.  */}

          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          {/* <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea> */}

          {/* This allows the <input> element to inherit the behavior and state management defined in the title object, which is created by a custom hook.  */}

          <textarea {...content} />
        </div>

        <button className="create-post-btn">Create Post</button>

      </form>
    </div>
  );
}

export default CreatePost;
