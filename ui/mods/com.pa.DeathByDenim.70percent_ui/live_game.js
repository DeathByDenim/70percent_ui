(function() {

	var zoom = dUIZoomGetZoomLevel(api.settings.value('ui', 'dUIZoom'));

	api.panels.action_bar._$dock.css('zoom', zoom);
	api.panels.build_bar._$dock.css('zoom', zoom);
	api.panels.build_hover._$dock.css('zoom', zoom);
	api.panels.celestial_control._$dock.css('zoom', zoom);
	api.panels.control_group_bar._$dock.css('zoom', zoom);
	api.panels.chat._$dock.css('zoom', zoom);
	api.panels.econ._$dock.css('zoom', zoom);
	api.panels.footer._$dock.css('zoom', zoom);
//	api.panels.hover._$dock.css('zoom', zoom);
	api.panels.menu._$dock.css('zoom', zoom);
	api.panels.message._$dock.css('zoom', zoom);
	api.panels.options_bar._$dock.css('zoom', zoom);
//	api.panels.paused_popup._$dock.css('zoom', zoom);
	api.panels.planets._$dock.css('zoom', zoom);
	api.panels.players._$dock.css('zoom', zoom);
	api.panels.selection._$dock.css('zoom', zoom);
	api.panels.time_bar._$dock.css('zoom', zoom);

})();
