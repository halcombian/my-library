let myLibrary = [];

function Book(id, title, author, pages, read) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return title + ", " + author + ", " + pages + ", " + this.read;
	};
}

let readUnread; //Variable's value is set on Read or Unread button click

const readBtn = document.querySelector(".read-btn"); //Read button
readBtn.addEventListener("click", () => {
	return (readUnread = "read");
});

const unreadBtn = document.querySelector(".unread-btn"); //Unread button
unreadBtn.addEventListener("click", () => {
	return (readUnread = "unread");
});

let bookId = 0; //Variable that gets incremented to give each book a unique variable name

const titleInput = document.querySelector("[name=title-input]");
const authorInput = document.querySelector("[name=author-input]");
const pagesInput = document.querySelector("[name=pages-input]");

//Creates Book object and pushes it to myLibrary array
function addBookToLibrary() {
	myLibrary.push(
		new Book(
			bookId,
			titleInput.value,
			authorInput.value,
			pagesInput.value,
			readUnread
		)
	);
	bookId++;
}

//Creates Book Card DOM elements
const bookContainer = document.querySelector(".book-container");
function createBookCard() {
	for (let i = 0; i < myLibrary.length; i++) {
		const bookCard = document.createElement("div");
		const bookCardInfo = document.createElement("div");
		const readSpan = document.createElement("span");
		const cardBtnCon = document.createElement("div");
		const cardRead = document.createElement("button");
		const cardUnread = document.createElement("button");

		bookCard.className = "book-card";
		bookCardInfo.className = "book-card-info";
		readSpan.className = "read-span";
		cardBtnCon.className = "card-btn-con";
		cardRead.classList.add("read-unread-btn", "card-read");
		cardUnread.classList.add("read-unread-btn", "card-unread");

		bookCardInfo.innerHTML =
			titleInput.value +
			"<br />" +
			authorInput.value +
			"<br />" +
			pagesInput.value;
		readSpan.textContent = readUnread;

		cardRead.textContent = "Read";
		cardUnread.textContent = "Unread";

		bookContainer.appendChild(bookCard);
		bookCard.appendChild(bookCardInfo);
		bookCardInfo.appendChild(readSpan);
		bookCardInfo.appendChild(cardBtnCon);
		cardBtnCon.appendChild(cardRead);
		cardBtnCon.appendChild(cardUnread);
	}
}

const readCardBtn = document.getElementsByClassName("card-read");
const unreadCardBtn = document.getElementsByClassName("card-unread");

const readUnreadSpan = document.getElementsByClassName("read-span");

function readUnreadCardBtns() {
	for (let j = 0; j < myLibrary.length; j++) {
		readCardBtn[j].addEventListener("click", () => {
			myLibrary[j].read = "read";
			console.log("myLibrary[j].read=" + myLibrary[j].read);
			readUnreadSpan[j].textContent = myLibrary[j].read;
		});
		unreadCardBtn[j].addEventListener("click", () => {
			myLibrary[j].read = "unread";
			console.log("myLibrary[j].read=" + myLibrary[j].read);
			readUnreadSpan[j].textContent = myLibrary[j].read;
		});
	}
}

//Clears Add Book window and it's inputs
//Called with Submit and CLose buttons
function clearAddBookWindow() {
	titleInput.value = "";
	authorInput.value = "";
	pagesInput.value = "";
	readUnread = "";
	addBookWindow.style.visibility = "hidden";
}

const addBookWindow = document.querySelector(".add-book-window"); //Add Book window

const addBookBtn = document.querySelector(".add-book-btn"); //Add Book button
addBookBtn.addEventListener("click", () => {
	addBookWindow.style.visibility = "visible";
});

const submitBtn = document.querySelector(".submit-btn"); //Submit button
submitBtn.addEventListener("click", () => {
	addBookToLibrary();
	createBookCard();
	readUnreadCardBtns();
	clearAddBookWindow();
});

const closeBtn = document.querySelector(".close-btn"); //Close window button
closeBtn.addEventListener("click", () => {
	clearAddBookWindow();
});
