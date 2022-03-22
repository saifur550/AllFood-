function $(selector){
    return document.querySelector(selector)
}


const nav = $('#mainNav');
// console.log(nav);
const toggle = $('.toggle');
// console.log(toggle);

toggle.addEventListener('click', function(){
	console.log("click");
});