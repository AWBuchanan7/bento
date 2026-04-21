// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Aubrey',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'おはよう!',
	greetingAfternoon: 'こんにちわ,',
	greetingEvening: 'こんばんわ,',
	greetingNight: 'おやすみなさい!',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '437f6c71028986fda571c0ee633c5049', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '49.2604134',
	defaultLongitude: '123.1139456',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '06:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'square-terminal',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.proton.me/',
		},
		{
			id: '3',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.proton.me/u/0/',

		},
		{
			id: '4',
			name: 'Chillhop',
			icon: 'headphones',
			link: 'https://chillhop.com/radio/',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com/',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'film',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'librarything',
			icon: 'book-marked',
			link: 'https://librarything.com',
		},
		{
			id: '2',
			name: 'timeextension',
			icon: 'book-down',
			link: 'https://www.timeextension.com/',
		},
		{
			id: '3',
			name: 'bluesky',
			icon: 'bird',
			link: 'https://bsky.app/',
		},
		{
			id: '4',
			name: 'ebay',
			icon: 'shopping-bag',
			link: 'https://www.ebay.ca/',
		},
		{
			id: '5',
			name: 'backloggery',
			icon: 'joystick',
			link: 'https://backloggery.com',
		},
		{
			id: '6',
			name: 'rainymood',
			icon: 'cloud-rain-wind',
			link: 'https://rainymood.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'book-open-text',
			id: '1',
			links: [
				{
					name: 'dinosaur comics',
					link: 'https://www.qwantz.com',
				},
				{
					name: 'librarything',
					link: 'https://librarything.com'
				},
				{
					name: 'lithub',
					link: 'https://lithub.com/',
				},
				{
					name: 'pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'book-open-text',
			id: '2',
			links: [
				{
					name: 'dinosaur comics',
					link: 'https://www.qwantz.com',
				},
				{
					name: 'librarything',
					link: 'https://librarything.com'
				},
				{
					name: 'lithub',
					link: 'https://lithub.com/',
				},
				{
					name: 'pocket',
					link: 'https://www.pocket.com',
				},
			],
		}
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
