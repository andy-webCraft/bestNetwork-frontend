import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Dropzone from "react-dropzone";
import PropTypes from "prop-types";

import FlexBetween from "shared/ui/FlexBetween";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

function ImageDropbox({ imageValue, setImageValue, previewSize = "60px" }) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!imageValue) {
      setPreview(null);
      return undefined;
    }

    const objectUrl = URL.createObjectURL(imageValue);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [imageValue]);

  const handleOnDrop = (acceptedFiles) => {
    setImageValue(acceptedFiles[0]);
  };

  return (
    <Dropzone acceptedFiles=".jpg,.jpeg,.png" multiple={false} onDrop={handleOnDrop}>
      {({ getRootProps, getInputProps }) => (
        <Box
          {...getRootProps()}
          border="2px dashed #222"
          borderRadius="0.75rem"
          p="1rem"
          sx={{ "&:hover": { cursor: "pointer" } }}
        >
          <input {...getInputProps()} />

          {!imageValue ? (
            <Typography textAlign="center" marginY="1rem">
              Drop a picture or click here to add it
            </Typography>
          ) : (
            <FlexBetween>
              <Box display="flex" alignItems="center">
                <img width={previewSize} height="auto" src={preview} alt={imageValue.name} />
                <Typography component="span" ml="1.5rem" sx={{ wordBreak: "break-word" }}>
                  {imageValue.name}
                </Typography>
              </Box>

              <EditOutlinedIcon />
            </FlexBetween>
          )}
        </Box>
      )}
    </Dropzone>
  );
}

ImageDropbox.propTypes = {
  imageValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
  setImageValue: PropTypes.func.isRequired,
  previewSize: PropTypes.string,
};

ImageDropbox.defaultProps = {
  imageValue: null,
  previewSize: "60px",
};

export default ImageDropbox;
