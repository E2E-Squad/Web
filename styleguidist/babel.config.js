module.exports = {
    presets: [
        [
            '@babel/env',
            {
                modules: false,
                useBuiltIns: 'usage',
                corejs: "3.2",
            }
        ],
        '@babel/react',
        "@babel/preset-typescript",
    ]
}