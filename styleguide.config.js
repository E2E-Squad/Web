const parserOptions = {

}
module.exports = {
    components: "./components/**/*.tsx",
    propsParser: require("react-docgen-typescript").withDefaultConfig([
        parserOptions,
    ]).parse,
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
    }
};