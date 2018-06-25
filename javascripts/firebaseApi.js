let firebaseConfig = {};

// const setConfig = () => {
//   return new Promise((resolve, reject) => {
//     $.ajax('../db/apiKeys.json')
//       .done((config) => {
//         firebaseConfig = config.firebaseKeys;
//         resolve(config.firebaseKeys);
//       })
//       .fail((error) => {
//         reject(error);
//       });
//   });
// };

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const getAllMessages = () => {

  return new Promise((resolve, reject) => {
    const allMessagesArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/journalBlogs.json`,
    })
      .done((allMessagesObj) => {
        if (allMessagesObj !== null) {
          Object.keys(allMessagesObj).forEach((fbKey) => {
            allMessagesObj[fbKey].id = fbKey;
            allMessagesArray.push(allMessagesObj[fbKey]);
          });
        }

        resolve(allMessagesArray);

      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  getAllMessages,
  setConfig,
};
