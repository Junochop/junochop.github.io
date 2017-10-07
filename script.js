
// const blog = [

// {name: "Blog1", color: "Green", url: "https://cdn2.iconfinder.com/data/icons/mobile-suit-gundam/48/Paul-21-512.png"},
// {name: "Blog2", color: "White", url: "https://cdn2.iconfinder.com/data/icons/mobile-suit-gundam/48/Paul-13-512.png"},
// {name: "Blog3", color: "Red", url: "https://cdn2.iconfinder.com/data/icons/mobile-suit-gundam/48/Paul-32-512.png"}


// ];





let blogHold = document.getElementById('blog-holder');

let newdomStrings = [];
const domWrite = (array) => {
	
	console.log(array);
    for (let i = 0; i < array.length; i++) {
	   let domStrings = "";
	   domStrings += 
	  `<div class="blogCard">
	   <div>${array[i].name}</div>
	   <div>${array[i].date}</div>
	   <div>${array[i].content}</div>
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

  

//domWrite(blog);


// var blog1 = {
// 	title: "",
// 	date: "",
// 	pic: "",
// 	description: " "
// };

// var blog2 = {
// 	title: "",
// 	date: "",
// 	pic: "",
// 	description: " "
// };

// var blog3 = {
// 	title: "",
// 	date: "",
// 	pic: "",
// 	description: " "
// };

// var blog4 = {
// 	title: "",
// 	date: "",
// 	pic: "",
// 	description: " "
// };

// var blog5 = {
// 	title: "",
// 	date: "",
// 	pic: "",
// 	description: " "
// };