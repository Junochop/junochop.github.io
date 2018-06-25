const { getAllMessages, } = require('../javascripts/firebaseApi.js');
const { domString, } = require('../javascripts/dom.js');

const getAllMessagesEvent = () => {
  getAllMessages()
    .then((messageArray) => {
      console.log('hi', messageArray);
      domString(messageArray, '#blog-holder');
    })
    .catch((error) => {
      console.error('error in get all messages', error);
    });
};

module.exports = {
  getAllMessagesEvent,
};
