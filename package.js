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
  api.add_files('index.js', 'client');
  api.add_files('index.js', 'server');
  api.export('Alt', 'server');
});
