"use strict";

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

const commonConfig = nodeEnv => {
  return {
    resolve: {
      modules: [path.resolve("src"), "node_modules"],
      extensions: [".js", ".csv", ".json", ".scss", ".css", ".html"]
    },
    externals: {
      cheerio: "window",
      "react/addons": "react",
      "react/lib/ExecutionEnvironment": "react",
      "react/lib/ReactContext": "react"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          enforce: "pre",
          use: [
            {
              loader: "eslint-loader",
              options: { configFile: ".eslintrc", fix: true }
            }
          ]
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          enforce: "pre",
          use: [
            {
              loader: "htmlhint-loader",
              options: { configFile: ".htmlhintrc" }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.(png|jpg|jpeg|svg|gif|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: "file-loader?name=images/[name].[ext]"
        },
        {
          test: /\.(svg|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: "file-loader?name=fonts/[name].[ext]"
        },
        {
          test: /\.html$/,
          use: "html-loader"
        }
      ]
    },
    plugins: [
      new webpack.EnvironmentPlugin({ NODE_ENV: nodeEnv }),
      new CopyWebpackPlugin([
        {
          from: __dirname + "/src/images",
          to: "images"
        }
      ]),
      new HtmlWebpackPlugin({
        template: "src/index.html",
        favicon: "src/favicon.ico",
        filename: "../templates/index.html",
        chunksSortMode: "dependency"
      }),
      new ManifestPlugin()
    ],
    optimization: {
      minimizer: [
        new UglifyJSPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    performance: { hints: false }
  };
};

const devConfig = {
  entry: {
    main: ["whatwg-fetch", "core-js/es", "react-hot-loader/patch", "index.js"]
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "../src/main/resources/static"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "src",
    compress: true,
    hot: true,
    port: 9000,
    host: "0.0.0.0",
    disableHostCheck: true,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: "minimal",
    overlay: true,
    proxy: {
      "/**": {
        target: { port: 8080 },
        secure: false
      }
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

let pathsToClean = [path.resolve(__dirname, "../src/main/resources/static")];

let cleanOptions = {
  root: __dirname,
  exlude: [],
  verbose: true,
  dry: false,
  dangerouslyAllowCleanPatternsOutsideProject: true,
  cleanOnceBeforeBuildPatterns: [
    path.resolve(__dirname, "../src/main/resources/static")
  ]
};

const prodConfig = {
  entry: {
    main: ["whatwg-fetch", "core-js/es", "react-hot-loader/patch", "index.js"]
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../src/main/resources/static"),
    filename: "[name].[hash].bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[contentHash].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin(cleanOptions)
  ]
};

module.exports = (env, argv) => {
  console.info("NODE_ENV:", argv.mode);
  return argv.mode === "production"
    ? merge(commonConfig(argv.mode), prodConfig)
    : merge(commonConfig(argv.mode), devConfig);
};
