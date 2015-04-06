function getURL(url){
	return $.ajax({
		type: "GET",
		url: url,
		cache: false,
		async: false
	}).responseText;
}

function compileMap() {
    var File
    
//    $.getJSON('sample.geojson', function(response){
//       File = response;
//       alert(File.property);
//    })
    //alert(getURL('sample.asdsad'));
    
    L.geoJson(File, {
             filter: function (feature, layer) {
                 console.log(feature.geometry.coordinates);
			 }
		});

};