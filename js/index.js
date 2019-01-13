var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();
var today = year+"-"+month+"-"+day;
var url = 'https://newsapi.org/v2/everything?q=cricket&from='+today+'&to='+today+'&apiKey=9e32519c216c44fdbd894c162382cdb6';
var req = new Request(url);
$(document).ready(function(){
  let a;
  fetch(req)
      .then(function(response) {
          a = response.json();
          a.then(function(obj){
            // console.log(obj.articles[0]);
            for(var i=0;i<20;i++){
                $("#box").append("<div class='box'><div class='columns'><div class='column'><img src=" + obj.articles[i].urlToImage +"></div><div class='column'><a href='" + obj.articles[i].url + "'><h1 class='title is-4'>" + obj.articles[i].title + "</h1></a><p>" + obj.articles[i].description+ "</p></div></div></div>");
                // console.log(obj['articles'][i]);
              }
            });
      })
})
