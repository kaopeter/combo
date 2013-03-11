require(["lib/jquery-1.7.2"], function($) {
	$;
	console.log($);
	
	var collection = (function () {
	    var keys = [], values = [];

	    return {
	        get: function (key) {
	            var at = keys.indexOf(key);
	            if (at >= 0) {
	                return values[at];
	            }
	        },
	        set: function (key, value) {
	            var at = keys.indexOf(key);
	            if (at < 0) {
	                at = keys.length;
	            }
	            keys[at] = key;
	            values[at] = value;
	        },
	        remove: function (key) {
	            var at = keys.indexOf(key);
	            if (at >= 0) {
	                keys.splice(at, 1);
	                values.splice(at, 1);
	            }
	        }
	    };
	}());
	
	
	
});


function inherit(p) {
if (p == null) throw TypeError(); 
if (Object.create)
	return Object.create(p);
	var t = typeof p;
	if (t !== "object" && t !== "function") throw TypeError();
	function f() {};
	f.prototype = p;
	return new f();
}

(function(){
	console.log("this is"+ this);
	
})(this);