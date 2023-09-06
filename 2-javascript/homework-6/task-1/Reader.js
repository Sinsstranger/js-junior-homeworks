class Reader {
	surname = null
	name = null;
	patronymic = null;
	readerTicketNumber = null;
	dateOfBirth = null;
	email = null;

	constructor(surname, name, patronymic, readerTicketNumber, dateOfBirth, email) {
		this.surname = surname;
		this.name = name;
		this.patronymic = patronymic;
		this.readerTicketNumber = readerTicketNumber;
		this.dateOfBirth = dateOfBirth;
		this.email = email;
	}

	receiveBook(books) {
		let answer = `${this.surname} ${this.surname || ''} ${this.patronymic || ''} взял книги: `;
		for (const book of books) {
			answer += `"${book.bookTitle}", `;
		}
		return answer.trim().slice(0, -1);
	}

	returnBook(books) {
		let answer = `${this.surname} ${this.surname || ''} ${this.patronymic || ''} вернул книги: `;
		for (const book of books) {
			answer += `"${book.bookTitle}", `;
		}
		return answer.trim().slice(0, -1);
	}
}