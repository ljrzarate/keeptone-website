$(window).load(function() {

	//------- Google Maps ---------//
	
      var marker;
      var latlng = new google.maps.LatLng(11.01077,-74.796531);
      var markerpos = new google.maps.LatLng(11.010875288596294,-74.79506134986877);

         var options = {
          zoom: 17,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('map_div'), options);

        marker = new google.maps.Marker({
          map:map,
          position: markerpos,
          icon: "http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png"
        });
        

	// Add listener for a click on the pin
	google.maps.event.addListener(marker, 'click', function() {
		infowindow1.open(map, marker);
	});
		
	// Add information window
	var infowindow1 = new google.maps.InfoWindow({  
		content:  createInfo('Keeptone S.A.S', 'Calle 75A No. 71 - 46')
	}); 
	
	// Create information window
	function createInfo(title, content) {
		return '<div class="infowindow"><strong>'+ title +'</strong><br />'+content+'</div>';
	} 

});