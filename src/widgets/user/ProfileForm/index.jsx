import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Formik, getIn } from "formik";
import {
  Avatar, Button, Grid, Typography,
} from "@mui/material";

import { authModel } from "entities/auth";
import { userApi } from "entities/user";
import serializeFormData from "shared/lib/serializeFormData";
import FlexColumn from "shared/ui/FlexColumn";
import ImageDropbox from "shared/ui/ImageDropbox";
import TextInput from "shared/ui/TextInput";
import formBoolValue from "shared/lib/formBoolValue";
import { getInitialValuesProfile, profileSchema } from "./schema";

function ProfileForm() {
  const [openDropbox, setOpenDropbox] = useState(false);

  const { user } = useSelector(authModel.getState);
  const [updateUser, { isLoading }] = userApi.useUpdateUserMutation();

  const handleFormSubmit = (values) => {
    const formData = serializeFormData(values);

    updateUser({ formData });
  };

  const initialValues = useMemo(() => getInitialValuesProfile(user), [user]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={profileSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <FlexColumn alignItems="center" gap="1rem">
            <Avatar
              src={user.picturePath}
              alt={user.firstName}
              sx={{ width: "80px", height: "80px" }}
            />

            {openDropbox && (
            <ImageDropbox
              imageValue={values.picture}
              setImageValue={(imageValue) => {
                setFieldValue("picture", imageValue);
              }}
            />
            )}

            <Button
              onClick={() => {
                setFieldValue("picture", "");
                setOpenDropbox(!openDropbox);
              }}
            >
              Change Image
            </Button>

            <Grid container columnSpacing="1rem" rowSpacing="1rem">
              <Grid item sm={6} xs={12}>
                <TextInput
                  label="First Name"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  error={formBoolValue.simple([touched.firstName, errors.firstName])}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextInput
                  label="Last Name"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  error={formBoolValue.simple([touched.lastName, errors.lastName])}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
            </Grid>

            <Grid container columnSpacing="1rem" rowSpacing="1rem">
              <Grid item sm={6} xs={12}>
                <TextInput
                  label="Location"
                  name="location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.location}
                  error={formBoolValue.simple([touched.location, errors.location])}
                  helperText={touched.location && errors.location}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextInput
                  label="Occupation"
                  name="occupation"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.occupation}
                />
              </Grid>
            </Grid>

            <Typography>Links:</Typography>

            <Grid container columnSpacing="1rem" rowSpacing="1rem">
              <Grid item sm={6} xs={12}>
                <TextInput
                  label="Github"
                  name="links.github"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.links.github}
                  error={formBoolValue.deep([touched, errors], "links.github")}
                  helperText={getIn(touched, "links.github") && getIn(errors, "links.github")}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextInput
                  label="Facebook"
                  name="links.facebook"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.links.facebook}
                  error={formBoolValue.deep([touched, errors], "links.facebook")}
                  helperText={getIn(touched, "links.facebook") && getIn(errors, "links.facebook")}
                />
              </Grid>
            </Grid>

            <Grid container columnSpacing="1rem" rowSpacing="1rem">
              <Grid item sm={6} xs={12}>
                <TextInput
                  label="Twitter"
                  name="links.twitter"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.links.twitter}
                  error={formBoolValue.deep([touched, errors], "links.twitter")}
                  helperText={getIn(touched, "links.twitter") && getIn(errors, "links.twitter")}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextInput
                  label="LinkedIn"
                  name="links.linkedin"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.links.linkedin}
                  error={formBoolValue.deep([touched, errors], "links.linkedin")}
                  helperText={getIn(touched, "links.linkedin") && getIn(errors, "links.linkedin")}
                />
              </Grid>
            </Grid>

            <Button type="submit" variant="contained" disabled={isLoading}>
              Update
            </Button>
          </FlexColumn>
        </form>
      )}
    </Formik>
  );
}

export default ProfileForm;
