const data = require('./data.json')

/**
 * Just an example of public API
*/
const mainExport = { 

	all: function() {
		return data
	},

	random: function() {
		return data[0]
	}

}

export default mainExport

// for CommonJS compatibility
module.exports = mainExport 