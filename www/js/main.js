var $ms,
	musicstalker = {

		defaults: {
			bandSearchVal: "",
			welcometxt: "<h1>Let's get Stalkin'!</h1>",
			errormsgs: {
				no-text: "Come on, type SOMETHING ya knob.",
				unknown-artist: "Whoa, I guess you liked this band before WE even liked them.",
				api-error: "BORK BORK BORK. What the hell did you do? If you keep pushing the buttons like that you're gonna break it!"
			},
			apiQueue: function() {
				jQuery.each($ms.apiInfo.api, function(index, val) {
				  console.log("Index: "+index+" Value: "+val);
				});
			}
		},		
		authCall:  function(apiAuthURL, authConfig){
			$.getJSON(apiAuthURL, {
				authConfig,
				format: "json"
			})
			.done(function(data) {
				 $.each( data.items, function( i, item ) {
				 }
			});
		},
		apiCall: function(apiURL, callConfig){
			$.getJSON(apiURL, {
				callConfig,
				format: "json"
			})
			.done(function(data) {
				 $.each( data.items, function( i, item ) {
				 }
			});
		},
		apiInfo: {
			api: {
				name: "lastfm",
				apiRootURL: "http://ws.audioscrobbler.com/2.0/",
				auth: {
					authURL: "http://www.last.fm/api/auth/",
					api_key: "544a185692323d7eee21be6681a8dea6",
					secret: "95dbff2495e668fc4e8e4e62b8a41e15"
				}
			}
		},
		init: function() {
   			 // kick things off
    		$ms = this.defaults;
		}

		musicstalker.init();

};

$(document).ready(function() {

	// Grab band name from form
	$("form").submit(function() {
		var bandSearchVal = $("input:first").val();
	 	return bandSearchVal;
	});
	
});
