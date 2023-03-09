import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Formik } from "formik";
import PropTypes from "prop-types";

import Loader from "shared/ui/Loader";
import TextInput from "shared/ui/TextInput";
import searchSchema from "./schema";

function SearchWithUrlParam({ onChangeCallback, isFetching }) {
  const [searchParams, setSearchParams] = useSearchParams(
    window.location.search ? window.location.search : { query: "" },
  );

  const debounceRef = useRef(null);

  useEffect(() => {
    onChangeCallback(searchParams.get("query"));
  }, [searchParams]);

  const handleFormSubmit = (values) => {
    clearTimeout(debounceRef.current);

    let { query } = values;
    if (query.length <= 2) query = "";

    debounceRef.current = setTimeout(setSearchParams, 500, { query });
  };

  return (
    <Formik
      initialValues={{ query: searchParams.get("query") || "" }}
      validationSchema={searchSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        values, errors, touched, handleBlur, handleChange, handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <TextInput
            fullWidth
            name="query"
            value={values.query}
            onBlur={handleBlur}
            onChange={(e) => {
              handleChange(e);
              handleSubmit();
            }}
            error={Boolean(touched.query) && Boolean(errors.query)}
            helperText={touched.query && errors.query}
            placeholder="enter the query..."
            InputProps={{ endAdornment: isFetching && <Loader /> }}
          />
        </form>
      )}
    </Formik>
  );
}

SearchWithUrlParam.propTypes = {
  onChangeCallback: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default SearchWithUrlParam;
