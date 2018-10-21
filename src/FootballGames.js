import { Host } from './infuse';
import template from './football-games.html';

const GAMES = [
	{ date: '10/21/2018', time: '1:00', home: 'Chicago', visitor: 'New England' },
	{ date: '10/21/2018', time: '1:00', home: 'Indy', visitor: 'Buffalo' },
	{ date: '10/21/2018', time: '1:00', home: 'Jacksonville', visitor: 'Houston' },
	{ date: '10/21/2018', time: '1:00', home: 'Miami', visitor: 'Detroit' },
	{ date: '10/21/2018', time: '1:00', home: 'New York', visitor: 'Minesota' },
	{ date: '10/21/2018', time: '1:00', home: 'Philadelphia', visitor: 'Carolina' },
	{ date: '10/21/2018', time: '1:00', home: 'Tampa Bay', visitor: 'Cleveland' },
	{ date: '10/21/2018', time: '4:05', home: 'Baltimore', visitor: 'New Orleans' },
	{ date: '10/21/2018', time: '4:25', home: 'Washington', visitor: 'Dallas' },
	{ date: '10/21/2018', time: '4:25', home: 'San Francisco', visitor: 'Los Angeles' },
	{ date: '10/21/2018', time: '8:20', home: 'Kansas City', visitor: 'Cincinnati' },
	{ date: '10/22/2018', time: '8:15', home: 'Atlanta', visitor: 'New York' },
];

export default class FootballGames extends Host {
	get template() {
		return template;
	}

	get seasonYear() {
		return 2018;
	}

	get weekNumber() {
		return 7;
	}

	get games() {
		return GAMES;
	}
}

window.customElements.define('football-games', FootballGames);