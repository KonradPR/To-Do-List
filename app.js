const list = $('#list');
const	task = $('<li class="task"></li>');

function addTask() {
	$('#add').click(function(){
		list.append(task);
		//TODO: add text with new task to li element
	});
}
