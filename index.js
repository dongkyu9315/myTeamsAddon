var { ToggleButton } = require('sdk/ui/button/toggle');
var tabs = require('sdk/tabs');
var panels = require('sdk/panel');
var self = require('sdk/self');

var button = ToggleButton({
	id: "team-board",
	label: "My Teams",
	icon: {
		"16": "./logo.jpg",
		"32": "./logo.jpg",
		"64": "./logo.jpg"
	},
	onClick: handleClick
});

var panel = panels.Panel({
	contentURL: "http://www.naver.com",
	onHide: handleHide
});

function handleClick(state) {
	if (state.checked) {
		panel.show({
			position: button
		});
	}
}

function handleHide(state) {
	button.state('window', {checked: false});
}
