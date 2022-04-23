import React, { useRef, useState } from 'react';
import axios from 'axios';
import "./styles.css";

function UploadBtn(props) {

    const el = useRef(); // accesing input element
    const handleChange = (e) => {
        const file = e.target.files[0]; // accesing file
        // console.log(file);
        props.setFile(file); // storing file
    }
    const uploadFile = () => {
        const formData = new FormData();
        formData.append('imagefile', props.file); // appending file
        props.setRecipes({});
        props.setUp(true);
        axios.post('http://localhost:5000/', formData, {
            'Content-Type': 'application/json',
        }).then(res => {
            // console.log(res.data);
            props.setUp(false);
            props.setRecipes(res.data);
            // console.log("test");

        }).catch(err => console.log(err))}
    return (

            <div className="file-upload">
              <label className="buton custom-upload">
                <input className="disappear" type="file" ref={el} onChange={handleChange} />
                Choose file
              </label>

                <button onClick={uploadFile} className="buton upbutton">
                    Upload
                </button>
            </div>

    );
}
export default UploadBtn;
