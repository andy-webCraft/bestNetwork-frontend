import { Formik } from "formik";
import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";

import TextInput from "shared/ui/TextInput";
import { postApi } from "entities/post";

function AddCommentInPost({ postId }) {
  const [addComment, { isLoading }] = postApi.useAddCommentMutation();

  const handleFormSubmit = (values, onSubmitProps) => {
    addComment({ postId, description: values.description })
      .unwrap()
      .then(() => {
        onSubmitProps.resetForm();
      });
  };

  return (
    <Box sx={{ "& form": { display: "flex", gap: "1rem", alignItems: "center" } }}>
      <Formik initialValues={{ description: "" }} onSubmit={handleFormSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextInput
              multiline
              maxRows={5}
              name="description"
              value={values.description}
              onChange={handleChange}
              placeholder="enter your comment..."
              sx={{ width: "100%" }}
            />

            <Button type="submit" variant="contained" disabled={!values.description || isLoading}>
              SEND
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
}

AddCommentInPost.propTypes = { postId: PropTypes.string.isRequired };

export default AddCommentInPost;
