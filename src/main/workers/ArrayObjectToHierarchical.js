module.exports = {
  async ArrayObjectToHierarchical(ArrayObject, ObjectId, ParentFolder) {
    console.log(" ObjectId ", ObjectId, "ParentFolder", ParentFolder)
    /**
     * @param {Array.<Object>} ArrayObject  > Data set from mongoDb (for example).
     * @param {String} ObjectId             > _id of Object or File (must be unique).
     * @param {String} ParentFolder         > Parent folder
     */
    ArrayObject = JSON.parse(ArrayObject); // I know we did JSON.stringify(JSON.parse()). Tried using Deep Clone but it didn't work, contribute your solution here :)

    var uniqueKey = ObjectId || "_id";
    var parent_level = ParentFolder || "parent";

    // index each item by uniqueKey
    var indexed = ArrayObject.reduce(function (result, item) {
      result[item[uniqueKey]] = item;
      return result;
    }, {});

    // retain the root items only
    var result = ArrayObject.filter(function (item) {
      // get parent
      var parent = indexed[item[parent_level]];
      // remove unnecessary keys if you need
      // delete item[parent_level];
      // delete item[isDirectory];

      // has parent?
      if (parent) {
        // add item as a child
        parent.items = (parent.items || []).concat(item);
      }
      // This part determines if the item is a root item or not
      return !parent;
    });
    return JSON.stringify(result, 0, 4);
  },
};
