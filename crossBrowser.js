//
//   Simple framework fo js
//

/**
 *  @see also
 *   <a href=""></a>
 *
 *  <a href="crossBrowser.html">link</a>
 *  
 *   function <b>log</b> base function for logging can be enhanced
 *   @param	string	message to log
 */
function log(message){
	if(window.console) console.log(message)
	else alert(message)
}

/**
 *   function <b>postToast</b> base function for toasting can be enhanced
 *   @param	string	message to post
 *   @param	float	length of time
 */
function postToast(message,time){ alert(message); }

// **************************************************************
// * below here comments do not work with doxygen, so are put in
// * crossBrowserDoxygen.js
// **************************************************************

var ViewItem = new function(){
	this.element;
	//constructor function
	this.getElementById=function(elementId){   
		return new function(){
			this.element=document.getElementById(elementId);
			this.addEventListener=function(type,handler,useCapture){
			//console.Log("Added Event "+typeof this.element.addEventListener)
				//Can we do the standard...
				if(typeof this.element.addEventListener!='undefined'){
					//W3c method
					this.element.addEventListener(type,handler,useCapture)
					log("W3 Added Event")
				}else if(typeof this.element.attachEvent!='undefined') {
					//IE
					this.element.attachEvent('on'+type,handler)
					log("IE Added Event")
				}else{
					//None
					alert("Event Not Added")
				}
				return this
			}
		}
	}
}
//event1=new el();
	//e=ViewItem.getElementById("deleteAllItems")   //.addEventListener("click",event1.method,false)
//no longer in funtion 
//
	//e.addEventListener("click",event1.method,false)
/*
		//alert(e.element.innerHTML);
var ViewItem2 = function(element){
	return new function(){
		this.element=element
		//this.getElementById=function(elementId){
		//		this.element=document.getElementById(elementId);
		//	}
		this.addEventListener=function(){
			alert("Added Event")
		}
	}
}
 var e=ViewItem2("id")
e.addEventListener();
function el(){
this.method=function(){
	alert("Event") 
}
}			
*/

function $(id){
	//look for id
	foundElement=document.getElementById(id);
	//if does not exist, look for TagName 
	if(foundElement==undefined)foundElement=document.getElementsByTagName(id);
	//if does not exist, //look for class
	//todo
	
	return foundElement;
}

$.cookie=function(cookieName,value){
	if(value==undefined){
		//generic get cookie
		intCookieStart=document.cookie.indexOf(cookieName)
		intCookieStart+=cookieName.length
		intCookieStart++
 		subCookie=document.cookie.substr(intCookieStart)
  		return subCookie.substr(0,subCookie.indexOf(";"))
	  }
}
