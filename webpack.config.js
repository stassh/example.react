module.exports = {
    entry: "./ts/client/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/static"
    },
    mode: "development",
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx$/, loader: "awesome-typescript-loader",
                include: [
                    __dirname + "/ts/client"
                ],
                options: {
                    configFileName: 'tsconfig.client.json'
                },
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre", test: /\.js$/, loader: "source-map-loader",
                include: [
                    __dirname + "/ts/client"
                ]
            },

        ]
    },

    // devServer: {
    //     contentBase: path.join(__dirname, "static/"),
    //     port: 3400,
    //     publicPath: "http://localhost:3400/app/",
    //     hotOnly: true
    // },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        // "react": "React",
        // "react-dom": "ReactDOM"
    }
};