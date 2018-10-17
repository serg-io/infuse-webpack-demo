import * as Infuse from 'infuse.host';
import template from './infused-text.html';

export default class InfusedText extends Infuse.Host {
	get template() {
		return template;
	}

	get text() {
		return 'This page demonstrates how to use infuse.host with webpack. The text in this paragraph was "infused" by infuse.host.';
	}
}

window.customElements.define('infused-text', InfusedText);