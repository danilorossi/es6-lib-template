//'use strict'; // not needed with Babel

const data = require('./data.json')

const mainExport = { 

	all: function() {
		return data
	},

	random: function() {
		return data[0]
	}

}

export default mainExport
module.exports = mainExport // for CommonJS compatibility