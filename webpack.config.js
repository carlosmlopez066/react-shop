const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js', //punto de entrada de la app
    output: { //donde va a vivir el proyecto una vez este preparado
        path: path.resolve(__dirname, 'dist'), //path.resolve para saber donde nos encontramos, (dist) para indicar la carpeta que vamos a utilizar
        filename: 'bundle.js' //filename para ponerle un nombre al empaquetado que va a suceder
    },
    mode: 'development',
    resolve: { //para mencionar que extenciones y como vamos a trabajar nuestro proyecto
        extensions: ['.js','.jsx'],
    },
    module: { //vamos a trabajar las reglas que vamos a crear con nuestro loader y plugins
        rules: [
            {
                test: /\.(js|jsx)$/, //identificar todos los archivos con extension .js o .jsx
                exclude: /node_modules/, //excluir los archivos que queremos que no lea: node-modules
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test:/\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new  HtmlWebpackPlugin({
            template: './public/index.html', //donde esta ubicado el archivo que queresmos modificar
            filename: 'index.html' //nombre del archivo que se va a crear
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 3005,
    }
}