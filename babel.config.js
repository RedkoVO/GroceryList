module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    ["react-native-paper/babel"],
    ["module-resolver", {
      root: ["./"],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],

      alias: {
        '@assets': './src/assets',
        '@components': './src/components',
        '@constants': './src/constants',
        '@hooks': './src/hooks',
        '@models': './src/models',
        '@providers': './src/providers',
        '@screens': './src/screens',
        '@services': './src/services',
        '@store': './src/store',
        '@utils': './src/utils'
      }
    }]]
};
