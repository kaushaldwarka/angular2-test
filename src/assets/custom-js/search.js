// search bar 



function myFunctionClose(){
        var x = document.getElementById("ppt");
        x.style.display = "none";
    }
function HideContent(d) {
document.getElementById(d).style.display = "none";
document.getElementById("main-menu").classList.add('slideInRight');
document.getElementById("main-menu").classList.remove('slideInLeft');
document.getElementById("main-menu").style.display = "block";
document.getElementById("overlay").classList.remove('is-visible');
document.getElementById("mob-nav").style.position = "static";


}
function ShowContent(d) {
document.getElementById(d).style.display = "block";
document.getElementById("main-menu").classList.add('slideInLeft');
document.getElementById("main-menu").classList.remove('slideInRight');
document.getElementById("overlay").classList.add('is-visible');
document.getElementById("mob-nav").style.position = "fixed";


}
function ReverseDisplay(d) {
if(document.getElementById(d).style.display == "none")     
	{ 
      document.getElementById(d).style.display = "block";
      document.getElementById("main-menu").classList.remove('slideInLeft');
      document.getElementById("shedulepickup").classList.add('slideInDown');
      
      //document.getElementByClass("overlay-screen").classList.remove('is-visible');
     }
else { document.getElementById(d).style.display = "none";
       document.getElementById("main-menu").classList.add('slideInRight');
       //document.getElementById("shedulepickup").classList.remove('slideInUp');
       document.getElementById("shedulepickup").classList.add('slideInDown');
      //document.getElementByClass("overlay-screen").classList.add('is-visible');

 }
}


/*
function clareportFun(){
        var myBox = document.querySelector('.promo-sub-box');
        var myBox2 = document.querySelector('.view-bt');
        myBox.classList.toggle('viewhide');
        myBox2.classList.toggle('div2');

       if( myBox2.className.match('div2') ) { 
          myBox2.classList.add('slideInDown');
          myBox2.classList.remove('slideInUp');
      }
      else{
        myBox2.classList.add('slideInUp');
        myBox2.classList.remove('slideInDown');
      }
    }
*/

function toggleHeight(e, maxHeight) {
    e = document.getElementById("s"); // e = the gray div
    var myBox2 = document.querySelector('#iconchange');
    myBox2.classList.toggle('fa-angle-up');
    var myBox3 = document.querySelector('#view-close');

    
    if(e.style.height != '300px' ||  myBox2.className.match('div2')) {
        e.style.height = '300px';
         myBox2.classList.remove('fa-angle-down');
         myBox3.innerHTML = "Close full report";

         // height of one line: 20px
    } else {
        e.style.height = maxHeight + 'px';
        myBox2.classList.add('fa-angle-down');
        myBox3.innerHTML = "View full report";
    }
}


// Get the button, and when the user clicks on it, execute myFunction

//document.getElementById("menu-button") = function() {overLay()};
/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
//function overLay() {
  //  document.getElementByid("overlay").classList.toggle("is-visible");
    
//}



(function(){
    
    
window.onscroll = function() {myFunction()};
var classList = classList;
function myFunction() {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        //document.getElementById("ppt").className = "slideInDown";
        document.getElementById("ppt").classList.add('slideInDown');
        document.getElementById("home-sticky").classList.add('home-stickyup');
         //document.getElementById("dd").classList="";
        document.getElementById("home-sticky").classList.add('slideInDown');

         
    } else {
        document.getElementById("ppt").classList.add('slideInUp');
        document.getElementById("ppt").classList.remove('slideInDown');
        document.getElementById("home-sticky").classList.remove('home-stickyup');
        document.getElementById("home-sticky").classList.remove('slideInDown');

    }
}

})();


