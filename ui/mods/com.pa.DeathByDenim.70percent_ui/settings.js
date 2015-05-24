(function() {
	_.extend(api.settings.definitions.ui.settings, {

		dUIZoom: {
			title: 'UI zoom',
			type: 'slider',
			default: 33
		}
	});
	model.settingDefinitions(api.settings.definitions);
	model.dZoomUILevel = ko.computed(function () {
		return Math.round(100 * dUIZoomGetZoomLevel(model.settingsItemMap()['ui.dUIZoom'].value())) + '%';
	});

	$('.ui').children().append(
		'                            <div class="sub-group">\n' +
		'                                <div class="option slider" data-bind="template: { name: \'setting-template\', data: $root.settingsItemMap()[\'ui.dUIZoom\'] }"></div>\n' +
		'                                <div class="option" data-bind="text: dZoomUILevel"></div>\n' +
		'                            </div>\n'
	);

})();
