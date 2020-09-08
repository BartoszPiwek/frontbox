import webpack from "webpack";

const moduleRule: webpack.RuleSetRule = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        esModule: false,
        name: '[name][hash].[ext]'
      }
    },
  ],
};

const plugin: Array<any> = []

export default { moduleRule, plugin }
