import { loadConfigs, Host } from 'infuse.host';

loadConfigs({
	tags: {
		i18n: function(strings) {
			console.log(strings);
			return 'Continue';
		},
	},
});

export { Host };