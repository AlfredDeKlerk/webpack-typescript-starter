const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimize: true,
    },
    entry: './src/index.ts',
    devServer: {
        static: './',
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },        
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },    
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
    ],
};

