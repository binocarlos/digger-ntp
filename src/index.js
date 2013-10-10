/*

	(The MIT License)

	Copyright (C) 2005-2013 Kai Davenport

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

var Supplier = require('digger-supplier');
var Sntp = require('sntp');

// All options are optional

var ntp_options = {
    //host: 'nist1-sj.ustiming.org',  // Defaults to pool.ntp.org
    //port: 123,                      // Defaults to 123 (NTP)
    //resolveReference: true,         // Default to false (not resolving)
    timeout: 1000                   // Defaults to zero (no timeout)
};


var async = require('async');

module.exports = function(options){

	options = options || {};

	var supplier = Supplier(options);

	supplier.on('select', function(req, reply){

		/*
		Sntp.time(options, function (err, time) {

	    if (err) {
        console.log('Failed: ' + err.message);
        process.exit(1);
	    }

	    console.log('Local clock is off by: ' + time.t + ' milliseconds');
	    process.exit(0);
		});
		*/
		reply(null, []);
	})

	return supplier;
}