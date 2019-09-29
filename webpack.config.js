const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/App.vue",
    output: {
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.vue$/, exclude: /node_modules/, loader: "vue-loader"},
					  {
					        test: /\.css$/,
					        use: [
					          'vue-style-loader',
					          'css-loader'
					        ]
					  }
        ]
    },
		plugins: [
		    // make sure to include the plugin!
		    new VueLoaderPlugin()
		  ]
};