/** Updating the last elements of the array with a portion of new elements
 * @param {array} initialArr - initial array of elements
 * @param {array} newItemsArr - array of new elements
 * @returns {array} updated array
 */
const updateLastItems = (initialArr, newItemsArr) => {
  const updatedArr = [...initialArr];
  let updateStartPos = updatedArr.length - newItemsArr.length;

  if (updateStartPos < 0) updateStartPos = 0;

  updatedArr.splice(updateStartPos, newItemsArr.length, ...newItemsArr);

  return updatedArr;
};

export default updateLastItems;
