 let autorefresh = document.getElementById("autorefresh");
 
 

   autorefresh.onclick = function() {
     var timeforreload = document.getElementById("timeforreload").value;
     setInterval(function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    });
  // chrome.tabs.reload();

     },timeforreload*1000 );
 
};
