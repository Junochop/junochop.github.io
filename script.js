//const menuButton = document.querySelectorAll('#navbar'.li);

//menuButton.addEventListener = ('click', () => {
	//menuButton.style.display = 'padding: 40px;'

	
//});
const blog = [

{name: "Blog1", color: "Green", url: "http://static.boredpanda.com/blog/wp-content/uploads/2014/12/green-cat-varna-bulgaria-11.jpg"},
{name: "Blog2", color: "White", url: "http://www.petsworld.in/blog/wp-content/uploads/2014/09/Ragdoll1.jpg"},
{name: "Blog3", color: "Red", url: "http://static2.businessinsider.com/image/5723622"}


];

console.log("blog", blog, blog[0].url);

let blogHold = document.getElementById('blog-holder');


const domWrite = (array) => {
	let newdomStrings = [];
	console.log(array);
    for (let i = 0; i < array.length; i++) {
	   let domStrings = "";
	   domStrings += 
	  `<div>
	   ${array[i].name}
	   ${array[i].color}
	   <img src=${array[i].url}>
	   </div>`;
	  console.log("hi", domStrings);
	   newdomStrings += domStrings;

	}
	
	
	writeToDom(newdomStrings);

    
}

const writeToDom = (strang) => {
	blogHold.innerHTML = strang;
}

  

domWrite(blog);


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