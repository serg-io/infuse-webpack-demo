import { Host } from './infuse';
import template from './infused-text.html';

export default class InfusedText extends Host {
	get template() {
		return template;
	}

	get text() {
		return 'This page demonstrates how to use infuse.host with webpack. The text in this paragraph was "infused" by infuse.host.';
	}
}

window.customElements.define('infused-text', InfusedText);