const path = require('path')

// Set module.exports and output property to an object
// Webpack will automatically pickup the config file base on its name alone and decide the settings to how to output the bundle
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.bundle.js'
	}
}