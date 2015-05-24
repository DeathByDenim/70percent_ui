// Setting slider always goes from 0 to 100, so convert to between 50 and 200
var dUIZoomGetZoomLevel = function(raw) {
	return (50 + 1.5 * raw) / 100;
};
