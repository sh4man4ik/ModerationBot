const TEXTS = {
	commands: {
		start: 'Hi, I am a moderation bot',
		help: 'Send me a message and I will send it for moderation'
	},

	moderation: {
		submitted: 'Your message has been sent for moderation',

		buttons: {
			approve: '✅ APPROVE',
			reject: '❌ REJECT'
		},

		result: {
			approved: '✅ APPROVED',
			rejected: '❌ REJECTED'
		}
	}
};

function getText(path) {
	let parts = path.split('.');
	let currentText = TEXTS;

	for (let i = 0; i < parts.length; i++) {
		currentText = currentText[parts[i]];

		if (!currentText) {
			break;
		}
	}

	return currentText;
}

export default getText;
