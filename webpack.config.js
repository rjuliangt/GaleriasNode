const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMOde = process.env.NODE_ENV !== 'production'
module.exports ={
    entry:'./Frontend/app.js',
    output:{
        path: path.join(__dirname,'Backend/public'),
        filename: 'js/bundle.js'
    },
    mode: 'development',
    module:{
        rules: [
           {
                test:/\.css$/,
                use:[
                   devMOde? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
       //crea un index.html  en el backend
        new HtmlWebpackPlugin({
            template: './Frontend/index.html',
            minify:{ //aca es para minimisar el codigo
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename:'css/bundel.css'
        })
    ],
    devtool: 'source-map'
};