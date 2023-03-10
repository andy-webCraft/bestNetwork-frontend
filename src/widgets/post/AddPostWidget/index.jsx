import { useState } from "react";
import { Formik } from "formik";
import { Button, IconButton } from "@mui/material";

import { postApi } from "entities/post";
import TextInput from "shared/ui/TextInput";
import WidgetWrapper from "shared/ui/WidgetWrapper";
import FlexBetween from "shared/ui/FlexBetween";
import ImageDropbox from "shared/ui/ImageDropbox";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import serializeFormData from "shared/lib/serializeFormData";

function AddPostWidget() {
  const [openDropbox, setOpenDropbox] = useState(false);

  const [createPost, { isLoading }] = postApi.useCreatePostMutation();

  const handleFormSubmit = (values, onSubmitProps) => {
    const formData = serializeFormData(values);

    createPost({ formData })
      .unwrap()
      .then(() => {
        onSubmitProps.resetForm();
        if (openDropbox) setOpenDropbox(false);
      });
  };

  return (
    <WidgetWrapper sx={{ "& form": { maxWidth: "460px", m: "auto" } }}>
      <Formik initialValues={{ description: "", picture: "" }} onSubmit={handleFormSubmit}>
        {({
          values, handleChange, handleSubmit, setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextInput
              name="description"
              multiline
              value={values.description}
              onChange={handleChange}
              placeholder="tell us what you think..."
              sx={{ width: "100%", mb: openDropbox ? "0.75rem" : undefined }}
            />

            {openDropbox && (
            <ImageDropbox
              imageValue={values.picture}
              setImageValue={(imageValue) => {
                setFieldValue("picture", imageValue);
              }}
            />
            )}

            <FlexBetween p="0.75rem 0.75rem 0">
              <IconButton
                onClick={() => {
                  setFieldValue("picture", "");
                  setOpenDropbox(!openDropbox);
                }}
              >
                <AddAPhotoIcon />
              </IconButton>

              <Button type="submit" variant="contained" disabled={!values.description || isLoading}>
                SEND
              </Button>
            </FlexBetween>
          </form>
        )}
      </Formik>
    </WidgetWrapper>
  );
}

export default AddPostWidget;
