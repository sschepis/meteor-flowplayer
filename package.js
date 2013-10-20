Package.describe({
  summary: "flowplayer free edition 6 Meteor wrapper"
});

Package.on_use(function (api) {
	api.add_files('flowplayer-loader.js', 'client');
});