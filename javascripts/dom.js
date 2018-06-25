const domString = (messageArray, whereToPrint) => {
  let strang = '';
  messageArray.forEach((message) => {
    strang += `<div class="thumbnail message" data-firebaseid = '${message.id}' >`;
    strang += `<p class="messageContent">${message.title}</p>`;
    strang += `<p class="messageContent">${message.date}</p>`;
    strang += `<p class="messageTimestamp">${message.post}</p>`;
    strang += `<p><a class="btn btn-primary edit hide" role="button">Edit</a></p>`;
    strang += `<p><a class="btn btn-danger delete hide" role="button">delete</a></p>`;
    strang += `<p><a class="btn btn-warning save hide" role="button">save</a></p>`;
    strang += `</div>`;
  });
  printToDom(whereToPrint, strang);
};

const printToDom = (whereToPrint, stringz) => {
  $(`${whereToPrint}`).html(stringz);
};

module.exports = {
  domString,
};
