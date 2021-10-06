import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./assets/css/Crud_blog.css";
import "./assets/css/Dropzone.css"

function Dropzone(props) {
  const [selectFile, setSelectFile] = useState(null);
  const onDrop = useCallback(
    (files) => {
      const file = files[0];
      const fileURL = URL.createObjectURL(file);
      setSelectFile(fileURL);
      props.onFileUpload(file);
    },
    [props.onFileUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <>
      <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} accept="image/*" type="file" className="page_crud_blog" required/>
        {selectFile ? (
          <img src={selectFile} width="100" height="100" />
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}

export default Dropzone;
