import { getIn } from "formik";

/** Returns boolean values for form fields */
const formBoolValue = {
  /** Check simple values
   * @param {Array} valuesArr - array of values
   * @returns {boolean}
   */
  simple: (valuesArr) => valuesArr.every((item) => Boolean(item)),
  /** Check deep values
   * @param {Array} valuesArr - array of values
   * @param {String} deepField - name of deep field
   * @returns {boolean}
   */
  deep: (valuesArr, deepField) => valuesArr.every((item) => Boolean(getIn(item, deepField))),
};

export default formBoolValue;
