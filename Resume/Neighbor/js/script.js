
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview     
 
   var streetstr=$('street').val();
   var citystr=$('city').val();
   var address=streetstr+","+citystr;
 
   $greeting.text('so you want live at'+'address'+'?');
   var streetviewUrl='http://maps.googleapis.com/maps/api/streetview?size=600x400&location='+address+'';
   $(boday).append('img class="bgimg" src="'+streetviewUrl+'">');
   
    // NY time AJAX request
 
   var nytimeUrl='http://api.nytimes.com/svc/search/v2/articlesearch.json?p='+ citystr +'&sort=newest&api-key=
   $.getJSON(nytimeUrl),function(data){
       $nytHeaderElem.text('New York Times Articles About'+citystr);
       articles=data.response.docs;
       $nytElem.append('<li class="article">'+'<a href="'+article.web_url+'">'+article.headline.main+'</a>'+'       </a>''<p>'+article.snippet+'</li>');
       };
    
   // Wikipedia AJAX request
 
   var wikiUrl='http://en.wikipedia.org/w/api./php?action=opensearch&search='+ citystr +'&format=json&callback=wikiCallback';
   $.ajax({
       url:wikiUrl,
       dataType:"jasonp",
	   success: function(response){
		   var articlelist=response[1];
		   for(vari=0, i<articlelist.length, i++){
			   articlestr=articlelist[1];
			   url='http://en.wikipedia.org/wiki/'+articlestr;
			   $wikiElem.append('<li><a href="'+url+'">+ articlestr+'</a></li>');
       $nytHeaderElem.text('New York Times Articles About'+citystr);
       articles=data.response.docs;
       $nytElem.append('<li class="article">'+'<a href="'+article.web_url+'">'+article.headline.main+'</a>'+'</a>''<p>'+article.snippet+'</li>');
       };
 };
    
});

$('#form-container').submit(loadData);
