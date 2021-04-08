import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function DropzoneComponent(props) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    {props.handleImageUrl(acceptedFiles)}
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png'
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);


  const thumbs = files.map(file => (
    <div key={file.name}>
    <img
        style={{
            maxWidth:"300px",
            maxHeight:"300px"}}
            src={file.preview}
            alt={file.name}
            /> 
        }
    </div>
  ));
  
  // clean up
  useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview))
    }, [files]);

  return (
    <section>
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <div className="text-center">
            {props.imageUrl === null ? "" : <img src= {`https://student-info-feathers.herokuapp.com/${props.imageUrl}`} height="100px" width="100px" />}
            <p className="mt-3">
                Drag and drop your images here.
            </p>

        </div>
      </div>
      <aside>
        {thumbs}
      </aside>
    </section>
  )
}

export default DropzoneComponent;