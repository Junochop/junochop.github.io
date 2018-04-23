let blogHold = document.getElementById('blog-holder');

let newdomStrings = [];
const domWrite = (array) => {

	console.log(array);
    for (let i = 0; i < array.length; i++) {
	   let domStrings = "";
	   domStrings +=
	  `<div class="blogCard">
	   <div>${array[i].title}</div>
	   <div>${array[i].date}</div>
	   <div>${array[i].post}</div>
	   </div>`;
	  console.log("hi", domStrings);
	   newdomStrings += domStrings;

	}


	writeToDom(newdomStrings);


}

const writeToDom = (strang) => {
	blogHold.innerHTML = strang;
}

function executeThisCodeAfterFileLoads() {
  //console.log("this", this.responseText);
  var data = JSON.parse(this.responseText);
  domWrite(data.blogs); //data

}

function executeThisCodeAfterFileErrors() {
  console.log("Shit broke");

}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeAfterFileErrors);
myRequest.open("GET", "blogs.json");//type request, get file
myRequest.send();



