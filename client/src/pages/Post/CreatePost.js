import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import Editor from "../../components/Post/Editor";
export default function CreatePost() {
    const [content,setContent] = useState('');
    return (
        <form>
            <h1>Create post</h1>
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
            <Editor value={content} onChange={setContent} />
            <button style={{marginTop:'5px'}}>Create post</button>
        </form>
    );
}