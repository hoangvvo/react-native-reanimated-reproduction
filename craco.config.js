const path = require("path");

module.exports = {
  babel: {
    plugins: [
      "react-native-web",
      "react-native-reanimated/plugin",
    ]
  },
  webpack: {
    configure(webpackConfig) {
      webpackConfig.module.rules.push({
        test: /\.js$/,
        include: [path.resolve('node_modules/react-native-reanimated')],
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
    }
  }
}