const path = require("path");
const webpack = require("webpack");

const projectRoot = path.resolve(__dirname, '..')
console.log(path.resolve(projectRoot, 'styles/globals.scss'))
module.exports = {
    title: "E2E Styleguide",
    version: "0.0.1",
    components: path.resolve(projectRoot, "components/**/*.tsx"),
    contextDependencies: [path.resolve(projectRoot, 'components/')],
    propsParser: require("react-docgen-typescript").withCustomConfig(
        path.resolve(projectRoot, 'tsconfig.json'),
        {}
    ).parse,
    require: [
        path.resolve(projectRoot, 'styles/test.css'),
        path.resolve(projectRoot, 'styles/globals.scss'),
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
    moduleAliases: {
        react: path.resolve('./node_modules/react')
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
                    use: ['style-loader', 'css-loader']
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
            content: path.resolve(projectRoot, 'docs/introduction.md')
        },
        {
            name: 'Atoms',
            components: path.resolve(projectRoot, 'components/Atoms/**/*.tsx'),
            sectionDepth: 2
        },
        {
            name: 'Molecules',
            components: path.resolve(projectRoot, 'components/Molecules/**/*.tsx'),
            sectionDepth: 2
        },
    ]
};

new webpack.DefinePlugin({
    process: { env: {} },
})