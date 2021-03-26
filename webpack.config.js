const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { webpack, DefinePlugin } = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// set env files config for testing and develpment
if(process.env.NODE_ENV === 'test'){
    require('dotenv').config({path: '.env.test'}); // dotenv lib to manage easyly env config files
}else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({path: '.env.development'});
}

module.exports = (env) => { // transform en fonction car accées paramètre
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css'); // set nom fichier a crée après extract

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public' , 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader', //configure une rule qui dit ici d'utiliser babel
                test: /\.js$/, // pour chaque fichier js présent dans le projet
                exclude: /node_modules/ // sauf pour node_modules
            },
            {
                test: /\.s?css$/,
                use: CSSExtract.extract({ // ajoute les lib dans le new fichier style.css
                    use: [
                        { // paramètre webpack pour le debug des css en dev (permet de voir les vrai classes css des éléments et pas style.css)
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
        }]
    },
        plugins: [
            CSSExtract,// use style.css
            new DefinePlugin({ // define env var for client side
                'process.env.FIREBASE_API_KEY':JSON.stringify(process.env.FIREBASE_API_KEY), // JSON.stringify is safe tips to automaticly put var into quotes 
                'process.env.FIREBASE_AUTH_DOMAIN':JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL':JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID':JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET':JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID':JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID':JSON.stringify(process.env.FIREBASE_APP_ID)
            })

        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', // permet de renvoyer précisement à la source si erreur
            devServer: {
        contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
    }
}
}