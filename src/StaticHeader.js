import * as Infuse from 'infuse.host';
import template from './static-header.html';

export default class StaticHeader extends Infuse.Host {
	get template() {
		return template;
	}
}

window.customElements.define('static-header', StaticHeader);