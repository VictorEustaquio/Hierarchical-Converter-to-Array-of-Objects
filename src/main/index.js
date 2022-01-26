require("dotenv").config();
require("../infra/db/mongodb");
const { schema_file_system } = require("../infra/db/mongodb/schemas");
const { ArrayObjectToHierarchical } = require("./workers/ArrayObjectToHierarchical");

const getMongoData = async (searchObj) => {
  try {
    return await schema_file_system
      .find(searchObj)
      .then((data) => {
        console.log("INPUT: ", data);
        return data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};

try {
  setTimeout(async () => {
    const FormatedData = await ArrayObjectToHierarchical(
      JSON.stringify(await getMongoData({ root: 1 }))
    );
    console.log("OUTPUT: ", FormatedData);
  }, 1000);
} catch (error) {
  console.log(error.message);
}
