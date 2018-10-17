import * as moment from 'moment';
import { Host } from './infuse';
import template from './dob-form.html';

const EIGHTEEN_YEARS_AGO = moment().startOf('day').subtract(18, 'years').toDate();

export default class DOBForm extends Host {
	get template() {
		return template;
	}

	isOver18(event) {
		const dob = event ? event.target.valueAsDate : null;

		return moment.isDate(dob) && moment(dob).isSameOrBefore(EIGHTEEN_YEARS_AGO);
	}
}

window.customElements.define('dob-form', DOBForm);