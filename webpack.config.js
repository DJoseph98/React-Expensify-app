const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => { // transform en fonction car accées paramètre
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css'); // set nom fichier a crée après extract

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
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
        plugins: [ // utilise style.css
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', // permet de renvoyer précisement à la source si erreur
            devServer: {
        contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
    }
}
}