Package.describe({
  name: 'goatslacker:alt',
  summary: 'Alt for Meteor framework',
  version: '0.16.4',
  git: 'https://github.com/goatslacker/meteor-alt.git'
});

Npm.depends({
  'alt': '0.16.4'
});

Package.onUse(function(api) {
  api.addFiles([
    '.npm/package/node_modules/alt/dist/alt-with-addons.js',
    'export.js'
  ], 'client');

  api.addFiles('index.js', 'server');

  api.export('Alt');
  api.export('AltContainer');
});
