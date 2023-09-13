import NewsListItem from "./NewsListItem.js";
export default class NewsList {
	listContainer = null;
	listItems = [];
	constructor(listContainer) {
		this.listContainer = listContainer;
	}
	createItems(itemsData) {
		const notes = itemsData.map((noteData) => new NewsListItem(noteData));
		this.listItems = notes;
		return true;
	}
	getNoteIndexById(id) {
		return this.listItems.findIndex((note) => note.id === parseInt(id, 10));
	}
	createItem(itemData) {
		return new NewsListItem(itemData);
	}
	renderItem(item) {
		this.listContainer.insertAdjacentHTML("afterbegin", item.render());
	}
	addOneItem(itemData) {
		const newItem = this.createItem(itemData);
		this.listItems.unshift(newItem);
		this.renderItem(newItem);
	}
	removeItem(id) {
		const deleteIndex = this.getNoteIndexById(id);
		this.listItems.splice(deleteIndex, 1);
	}
	showItem(container, id) {
		const showIndex = this.getNoteIndexById(id);
		container.innerHTML = null;
		container.dataset.displayedNote = id;
		const content = `${this.listItems[showIndex].title}\n${this.listItems[showIndex].description}`;
		container.value = content;
	}
	editItem(id, data) {
		const editIndex = this.getNoteIndexById(id);
		for (let key in data) {
			this.listItems[editIndex][key] = data[key];
		}
		const listElement = this.listContainer.querySelector(`[data-note-id="${id}"]`);
		listElement.querySelector(".note__title").textContent = data["title"];
		listElement.querySelector(".note__intro").textContent = data["description"];
		return this.listItems[editIndex];
	}
}
