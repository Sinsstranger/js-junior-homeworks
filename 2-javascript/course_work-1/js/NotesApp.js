export default class NotesApp {
	$notesData = [{
		id: 1,
		title: "Перевод чисел между системами счисления",
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur distinctio doloribus eaque in ipsa praesentium rerum similique! Cum et inventore magnam maxime nostrum officia tempora? Aliquid animi consectetur dignissimos, ducimus ea eaque exercitationem fugit id nostrum nulla, pariatur quis quos sit vel, velit. Quaerat, quisquam totam. Atque deleniti harum magnam modi, molestiae officiis quam quia rem. Asperiores assumenda corporis ea facere fugiat magnam minus mollitia obcaecati quasi rem tempore totam veniam, voluptas? Aliquam asperiores eius illum magnam nisi nulla, quia sint suscipit! Accusantium aliquid asperiores delectus ducimus enim excepturi exercitationem iusto laborum libero minima, nam non odio placeat possimus praesentium quo similique. Aliquid animi expedita porro possimus ratione recusandae sit! Animi assumenda cupiditate excepturi. Ad assumenda autem consectetur cum, dolorum enim esse exercitationem explicabo fugit harum in incidunt iure, labore minus molestiae nemo perspiciatis possimus, praesentium quod sequi sint totam velit voluptate! Aliquid assumenda cumque deleniti et, harum laudantium nam praesentium unde? Blanditiis dicta dolorum magni odio totam! Assumenda at consequuntur incidunt magnam odio quaerat repellendus repudiandae tempore vitae voluptas? A corporis facilis inventore, iusto libero modi natus necessitatibus non pariatur porro, recusandae sunt? Amet atque dolorum expedita fuga incidunt labore libero magni, mollitia nam, necessitatibus nulla numquam optio quaerat.",
		status: "new"
	}];

	constructor(AppRootElement, apiUrl) {
		console.log('Constructor')
		this.appElement = AppRootElement;
		this.apiUrl = apiUrl;
		this.init();
	}

	init() {
		console.log('Init');
		this.getInitialNotes().then(data => console.log(data));
	}

	async getInitialNotes() {
		try {
			const res = await fetch(this.apiUrl, {mode: "no-cors"});
			if (res.ok){
				return res.json();
			}
		} catch (e) {
			console.log(e);
		}
	}
}