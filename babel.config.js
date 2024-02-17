module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    [
      "@babel/plugin-transform-runtime",
      {
        "helpers": true,
        "regenerator": true
      }
    ]
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          'solito/image': 'solito/image/react-native-fast-image',
        },
      },
    ],
    [
      '@tamagui/babel-plugin',
      {
        components: ['tamagui'],
        config: './tamagui',
      },
    ],
    [
      'transform-inline-environment-variables',
      {
        include: 'TAMAGUI_TARGET',
      },
    ],

    'react-native-reanimated/plugin',
  ],
};
