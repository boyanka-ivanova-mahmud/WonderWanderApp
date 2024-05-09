const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      // Уверете се, че 'jpg' е включен в списъка на активите
      assetExts: [...new Set([...assetExts, 'jpg', 'png', 'bmp', 'gif', 'webp'])], // добавяме други изображения формати за всеки случай
      sourceExts: [...sourceExts, 'svg'], // SVG остава в sourceExts
    },
  };
})();
