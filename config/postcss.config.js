module.exports = {
  plugins : [
    require('postcss-import')(),
    require('postcss-simple-vars')(),
    require('postcss-custom-media')(),
    require('postcss-media-minmax')(),
    require('postcss-nested')(),
    require('autoprefixer')({
      browsers: ['last 2 versions', 'Android >= 4', 'iOS >= 9']
    }),
    require('csswring')(),
  ]
};