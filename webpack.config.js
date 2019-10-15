const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    module: {
        rules: [
                {
                  test: /\.(js|jsx)$/,
                  exclude: /node_modules/,
                  use: [ "babel-loader", "eslint-loader"]
                  
                },
            {
                test: /\.html$/,
                use : [
                    {
                        loader: "html-loader",
                        options: {minisize: true}
                    }
                ]
            }
        ]
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}