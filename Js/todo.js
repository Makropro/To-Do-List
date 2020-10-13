const addButton = document.getElementById('add-item');
const description = document.getElementById('item');
const todoList = document.getElementById('todo-list');
const username = localStorage.getItem('userName');

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  
  console.log(uuidv4());
  
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  refreshList();

  hide();

function hide(){
if(itemsArray===null){
  document.getElementById('deleteAll-item').hidden=true;
  }
};  

function unhide(){  if(itemsArray!==null){
    document.getElementById('deleteAll-item').hidden=false;
  }};
  
  
  addButton.addEventListener('click', event => { event.preventDefault();
   if(description.value!=="" && description.value.length>10){
   itemsArray.push({
        id: uuidv4(),
        description: description.value,
        done: false,
        username: username });
  
    localStorage.setItem('items', JSON.stringify(itemsArray)); refreshList();
  } else{ alert("Unesi opis zadatka ili je broj karaktera manji od 10!!!");
   refreshList(); 
  }});
  console.log();

document.getElementById("deleteAll-item").addEventListener('click', function()
 { localStorage.clear(); itemsArray = []; refreshList(); });
  function Delete(taskID) 
  { itemsArray = itemsArray.filter(element => { return element.id !== taskID; });
 localStorage.setItem('items', JSON.stringify(itemsArray)); 
 refreshList();}

function Done(taskID) { itemsArray = itemsArray.map(ele => { 
    if (ele.id === taskID) ele.done = !ele.done; 
    return ele; });
 localStorage.setItem('items', JSON.stringify(itemsArray)); 
 
 refreshList();}

function refreshList() { todoList.innerHTML = '';
 itemsArray.forEach(element => { if (element.username === username) {
    var main_div = document.createElement('div'); 
    var header_div = document.createElement('div');
    var header_caption = document.createElement('h3'); 
    var header_container_div = document.createElement('div');
    var delete_btn = document.createElement('button'); 
    var done_btn = document.createElement('button');
    var widget_body_div = document.createElement('div');
    var description_p = document.createElement('p');

 main_div.classList.add(...['widget', 'has-shadow', 'mb-3']);
    header_div.classList.add(...['widget-header', 'borderd-down']);
    header_caption.textContent = 'Task';
    delete_btn.classList.add(...['btn', 'btn-danger']);
    done_btn.classList.add(...['btn', 'btn-success']);
    widget_body_div.classList.add('widget-body');
    description_p.textContent = element.description;
    delete_btn.textContent = 'Delete'; done_btn.textContent = 'False';

 if (element.done) { done_btn.innerHTML="Undone";
    description_p.classList.add("task-done"); }
else{ done_btn.innerHTML = "Done";
    description_p.classList.remove("task-done"); }
    done_btn.addEventListener('click', () => { Done(element.id); });
    delete_btn.classList.add('mr-2'); 
    delete_btn.addEventListener('click', () => { Delete(element.id); });
    header_container_div.appendChild(delete_btn);
    header_container_div.appendChild(done_btn);
    header_div.appendChild(header_caption);
    header_div.appendChild(header_container_div);
    widget_body_div.appendChild(description_p);
    main_div.appendChild(header_div);
    main_div.appendChild(widget_body_div);
    todoList.appendChild(main_div); } });}