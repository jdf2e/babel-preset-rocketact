module.exports = function(api, options, env) {
  const isDevelopmentEnv = env === "development";
  const isProductionEnv = env === "production";

  return {
    presets: [
      [require.resolve("@babel/preset-env"), { modules: false }],
      require.resolve("@babel/preset-typescript"),
      require.resolve("@babel/preset-react")
    ],
    plugins: [
      require.resolve("@babel/plugin-proposal-class-properties"),
      require.resolve("@babel/plugin-proposal-object-rest-spread"),
      require.resolve("@babel/plugin-syntax-dynamic-import"),
      require.resolve("babel-plugin-transform-react-remove-prop-types")
    ]
  };
};
