module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          _: './src/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
