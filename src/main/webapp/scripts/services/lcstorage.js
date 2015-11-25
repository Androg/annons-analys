'use strict';


	AA.Services.Browser = function () {
		
	    saveInLocalStorage: function(key, value) {
	        if (Modernizr.localstorage) {
	            localStorage.setItem(key, JSON.stringify(value));
	        }
	    },

	    getFromLocalStorage: function(key) {
	        if (Modernizr.localstorage) {
	            return JSON.parse(localStorage.getItem(key));
	        }
	    },

	    removeFromLocalStorage: function(key) {
	        if (Modernizr.localstorage) {
	            localStorage.removeItem(key);
	        }
	    },
});
}