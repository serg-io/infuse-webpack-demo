import { setConfigs } from 'infuse.host/src/configs';

setConfigs({
	tags: {
		i18n: function(strings) {
			console.log(strings);
			return 'Continue';
		},
	},
});

export { Host } from 'infuse.host';