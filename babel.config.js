module.exports = {
    presets: [
        ['next/babel'],
        ['@babel/preset-env', {targets: {node: true}}],
        '@babel/preset-typescript',
    ]
};
