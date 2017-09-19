//const menuButton = document.querySelectorAll('#navbar'.li);

//menuButton.addEventListener = ('click', () => {
	//menuButton.style.display = 'padding: 40px;'

	
//});
const blog = [

{name: "Blog1", color: "Green", url: "http://static.boredpanda.com/blog/wp-content/uploads/2014/12/green-cat-varna-bulgaria-11.jpg"},
{name: "Blog2", color: "White", url: "http://www.petsworld.in/blog/wp-content/uploads/2014/09/Ragdoll1.jpg"},
{name: "Blog3", color: "Red", url: "http://static2.businessinsider.com/image/5723622"}


];

console.log("blog", blog, blog.length);


 domString = () => {
	let domStrings = '';
	console.log("hi");
    for (let i = 0; i < blog.length; i++) {
	   domStrings += `<div class="crap">`;
	   domStrings += `<div class="name">"${blog[i].name}"</div>`;
	   domStrings += `<div>${blog[i].color}" </div>`;
	   domStrings += `<img src="${blog[i].url}">`;
	   domStrings += `</div>`;
	   return domStrings;
	}
	
	

	
	writeToDom(array);
debugger;
	}



writeToDom = (strang) => {
	document.getElementById('blog-holder').innerHTML = strang;
}

  

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