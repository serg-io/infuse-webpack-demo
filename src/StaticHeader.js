import { Host } from './infuse';
import template from './static-header.html';

export default class StaticHeader extends Host {
	get template() {
		return template;
	}
}

window.customElements.define('static-header', StaticHeader);