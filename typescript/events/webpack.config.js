const path = require("path")

module.exports = {
    mode: "development",
    target: ["web", "es5"],
    // entry: ["core-js/stable", "./src/js/index.ts"], // gera mais de 10 mil linhas
    entry: ["./src/js/index.ts"],
    output: {
        path: path.resolve(__dirname, "dist", "js"),
        filename: "index.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.ts(x?)$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            ["@babel/plugin-transform-runtime"]
                        ]
                    }
                }, {
                    loader: "ts-loader"
                }]
            },
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            ["@babel/plugin-transform-runtime"]
                        ]
                    }
                }
            }
        ]
    }
}
