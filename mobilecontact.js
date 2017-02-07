document.getElementsByClassName("mobile-contact-menu")[0].addEventListener("click", contactMenuShow);

var clicked = false;

function contactMenuShow(){
	if(clicked == false){
		document.getElementById("mobile-contact-menu").style.display = "flex";
		document.getElementsByClassName("mobile-contact-menu")[0].style.background = "#FEFEFE";
		clicked = true;
	};
	if(clicked == true){
		document.getElementById("mobile-contact-menu").style.display = "none";
		document.getElementsByClassName("mobile-contact-menu")[0].style.background = "#95F2C3";
		clicked = false;
	}
}