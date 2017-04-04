alert("online guay2")
(function() {
  //fix PS home
  var q='[data-selector="aline-content-link"]';
  alert(q)
  var divs=document.querySelectorAll(q);
  for (var div of divs) {
    if (div.href.indexOf("/test/")>=1){
    }else{
      div.style.display = "none";
    }
  }
})();
