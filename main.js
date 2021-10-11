// Lesson-9//Надеюсь эта хрень будет рабоать:)
const colors = {
	steps: 0, //прошу сильно не ругаться, но пришлось добавить, для лучшего понимания счетчик в объект.
	data: ["magenta", "cyan", "firebrick", "springgreen", "skyblue"],
	[Symbol.iterator]() {},
 
	next() {
	  this.steps === this.data.length ? (this.steps = 0) : (this.val = this.data);
	  return {
		 val: this.val[this.steps++],
	  };
	},
 };
 
 function staining(id) {
	return function prompt(event) {
	  event.target.style.color = id.next().val;
	};
 }
 
 const text = Object.assign({}, colors);
 const text1 = Object.assign({}, colors);
 
 document.getElementById("text1").addEventListener("click", staining(text));
 document.getElementById("text2").addEventListener("click", staining(text1));
 document.getElementById("text3").addEventListener("click", staining(colors));
