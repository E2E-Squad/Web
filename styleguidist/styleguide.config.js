const path = require("path");
const projectRoot = path.resolve(__dirname, '..')
module.exports = {
    title: "E2E Styleguide",
    version: "0.0.1",
    components: path.resolve(projectRoot, "components/**/*.tsx"),
    contextDependencies: [path.resolve(projectRoot, 'components/'), path.resolve(projectRoot, 'styles/')],
    propsParser: require("react-docgen-typescript").withCustomConfig(
        path.resolve(projectRoot, 'tsconfig.json'),
        {}
    ).parse,
    require: [
        path.resolve(projectRoot, 'styles/globals.scss'),
        path.resolve(projectRoot, 'styles/_variables.scss'),
    ],
    styleguideDir: "static",
    theme: {
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
                    include: path.resolve(projectRoot),
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader', 'postcss-loader', {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                includePaths: [path.join(projectRoot)],
                            },
                        }
                    }]
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        }
    },
    pagePerSection: true,
    sections: [
        {
            name: 'Introduction',
            content: path.resolve(projectRoot, 'docs/introduction.md')
        },
        {
            name: 'Premier composant',
            content: path.resolve(projectRoot, 'docs/component.md')
        },
        {
            name: 'Tâches',
            content: path.resolve(projectRoot, 'docs/tasks.md')
        },
        {
            name: "Catalogue",
            sections: [
                {
                    name: 'Atoms',
                    components: path.resolve(projectRoot, 'components/Atoms/**/*.tsx'),
                    sectionDepth: 0
                },
                {
                    name: 'Molecules',
                    components: path.resolve(projectRoot, 'components/Molecules/**/*.tsx'),
                    sectionDepth: 0

                },
            ],
            sectionDepth: 0
        },
    ]
};