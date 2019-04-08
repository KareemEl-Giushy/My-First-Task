var text = document.getElementById("text"),
    email = document.getElementById("email");
text.onfocus = function (){
  text.setAttribute("data", text.getAttribute("placeholder"));
  text.setAttribute("placeholder", "");
};
text.onblur = function (){
  text.setAttribute("placeholder", text.getAttribute("data"));
  text.setAttribute("data", "");
};
email.onfocus = function (){
  email.setAttribute("data", email.getAttribute("placeholder"));
  email.setAttribute("placeholder", "");
};
email.onblur = function (){
  email.setAttribute("placeholder", email.getAttribute("data"));
};
