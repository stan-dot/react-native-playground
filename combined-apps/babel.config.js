module.exports = function (api) {
  api.cache(true);
  return {
    plugins: ['inline-dotenv', ["nativewind/babel", { mode: 'transformOnly' }]],
    presets: ['babel-preset-expo'],
  };
};
