import {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import Editor from "../../components/Post/Editor";
export default function EditPost() {
    const [content,setContent] = useState('');
    return (
        <form >
            <h1>Edit post</h1>
            <input type="title"
                   placeholder={'Title'}
                   // value={title}
                   // onChange={ev => setTitle(ev.target.value)}
            />
            <input type="summary"
                   placeholder={'Summary'}
                   // value={summary}
                   // onChange={ev => setSummary(ev.target.value)}
            />
            <input type="file"
                   // onChange={ev => setFiles(ev.target.files)}
            />
            <Editor onChange={setContent} value={content} />
            <button style={{marginTop:'5px'}}>Update post</button>
        </form>
    );
}