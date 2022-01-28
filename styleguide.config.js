const parserOptions = {}
module.exports = {
    title: "E2E Styleguide",
    version: "0.0.1",
    components: "./components/**/*.tsx",
    propsParser: require("react-docgen-typescript").withDefaultConfig([
        parserOptions,
    ]).parse,
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
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        }
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