var exec = require('cordova/exec');

module.exports = {

    /**
     * Pings the specified url
     *
	 * @param {String} 		url       	The url to ping
     * @param {Integer} 	timeout		The number of milliseconds for the timeout
	 * @param {Function}	success		The success callback function
	 * @param {Function}	error		The error callback function
     *
     */
    ping: function(url, timeout, success, error)
	{
        /* Aligning with w3c spec */

		exec(success, error, "Ping", "ping", [url, timeout]);
    }
};
