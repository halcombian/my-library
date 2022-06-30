let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = () => {
		return title + ", " + author + ", " + pages + ", " + read;
	};
}

let readUnread;

const readBtn = document.querySelector("#read-btn");
readBtn.addEventListener("click", () => {
	return (readUnread = "read");
});

const unreadBtn = document.querySelector("#unread-btn");
unreadBtn.addEventListener("click", () => {
	return (readUnread = "unread");
});

let i = 0;

const titleInput = document.querySelector("[name=title-input]");
const authorInput = document.querySelector("[name=author-input]");
const pagesInput = document.querySelector("[name=pages-input]");

function addBookToLibrary() {
	i = new Book(
		titleInput.value,
		authorInput.value,
		pagesInput.value,
		readUnread
	);
	myLibrary.push(i);
	console.log(i.info());
	i++;
}

function clearAddBookWindow() {
	titleInput.value = "";
	authorInput.value = "";
	pagesInput.value = "";
	readUnread = "";
	addBookWindow.style.visibility = "hidden";
}

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", () => {
	addBookToLibrary();
	clearAddBookWindow();
});

const addBookWindow = document.querySelector(".add-book-window"); //Add Book window

const addBookBtn = document.querySelector(".add-book-btn"); //Add Book button
addBookBtn.addEventListener("click", () => {
	addBookWindow.style.visibility = "visible";
});

const closeBtn = document.querySelector(".close-btn"); //Close window button
closeBtn.addEventListener("click", () => {
	clearAddBookWindow();
});
