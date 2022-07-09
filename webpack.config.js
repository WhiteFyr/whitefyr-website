const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: 'http://localhost:8080/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(tsx)$/,
                exclude: /node_module/,
                loader: 'ts-loader'
            },
            {
                test: /\.(jpg|jpeg|gif|eot|otf|webp|mp4|webm|wav|mp3|m4a|aac|oga|ico|svg|woff|woff2|png|ttf)$/,
                use: [{
                    loader:'file-loader'
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    }
}