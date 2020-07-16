import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

import { Container } from "./styles";

interface Props {
  onFileUpload: (file: File) => void;
}

function Dropzone({ onFileUpload }: Props) {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUpload(file);
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Point Thumbnail" />
      ) : (
        <span>
          <FiUpload />
          Property image
        </span>
      )}
    </Container>
  );
}

export default Dropzone;
