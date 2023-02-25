const age = prompt('Please enter your age:', '18')
console.log('Age:', age)

enum ABC {
	asd = 'asd',
	rfv = 'gbj',
	yhn = 'edc',
}

class EDC {
	abc = ABC
	static {
		console.log('%c Line:16 🍋', 'color:#f5ce50', EDC.length)
	}
	constructor(public age?: string) {
	}
}

const abc = new EDC(age || '')
console.log('%c Line:44 🍰 abc', 'color:#3f7cff', abc)
