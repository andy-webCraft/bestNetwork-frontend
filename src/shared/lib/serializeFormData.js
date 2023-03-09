/** Serialization of form data
 * @param {object} values - data object
 * @returns {FormData}
 */
function serializeFormData(values) {
  const formData = new FormData();

  const iterationFunc = (obj, parentKey = null) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (key === "picture" || typeof value !== "object") {
        formData.append(parentKey ? `${parentKey}[${key}]` : key, value);
      } else iterationFunc(value, key);
    });
  };

  iterationFunc(values);

  return formData;
}

export default serializeFormData;
