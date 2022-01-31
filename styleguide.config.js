const path = require("path");
const webpack = require("webpack");
console.log(path.join(__dirname, '/styles/globals.scss'))
module.exports = {
    title: "E2E Styleguide",
    version: "0.0.1",
    components: "./components/**/*.{tsx,scss}",
    contextDependencies: [path.resolve(__dirname, 'components/')],
    propsParser: require("react-docgen-typescript").withCustomConfig(
        './tsconfig.json',
        {}
    ).parse,
    require: [
        path.join(__dirname, '/styles/test.css'),
        path.join(__dirname, '/styles/globals.scss'),
    ],
    styles: {
        StyleGuide: {
            '@global body': {
                fontFamily: 'Helvetica',
                color: 'red'
            }
        }
    },
    theme: {
        // TODO: Dark mode
    },
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.tsx/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
                },
                {
                    test: /\.css$/,
                    use: ['style-loader']
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".jsx", ".scss"],
        },
        plugins: [
            new webpack.DefinePlugin({
                process: {env: {}},
            }),
        ],
    },
    sections: [
        {
            name: 'Introduction',
            content: './docs/introduction.md'
        },
        {
            name: 'Atoms',
            components: './components/Atoms/**/*.tsx',
            sectionDepth: 2
        },
        {
            name: 'Molecules',
            components: './components/Molecules/**/*.tsx',
            sectionDepth: 2
        },
    ]
};

new webpack.DefinePlugin({
    process: { env: {} },
})