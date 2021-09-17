const path = require("path");
const webpack = require("webpack");

module.exports = {
  babel: {
    plugins: ["react-native-web", "react-native-reanimated/plugin"],
  },
  webpack: {
    plugins: {
      add: [new webpack.DefinePlugin({ __DEV__: true })],
    },
    configure(webpackConfig) {
      webpackConfig.module.rules[1].oneOf[2].options.cacheDirectory = false;
      webpackConfig.module.rules.push({
        test: /\.js$/,
        include: [path.resolve("node_modules/react-native-reanimated")],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "module:metro-react-native-babel-preset",
                { useTransformReactJSXExperimental: true },
              ],
            ],
            plugins: [
              "react-native-web",
              "react-native-reanimated/plugin",
              [
                "@babel/plugin-transform-react-jsx",
                {
                  runtime: "automatic",
                },
              ],
            ],
          },
        },
      });
      return webpackConfig;
    },
  },
};
