
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
    var textInput = document.getElementById('todo-input').value;
    if ( textInput === null || textInput == ''){
        return;
    } 
    var toDoListLi = document.createElement("li");
    toDoListLi.textContent = textInput;
    document.getElementsByClassName('todo-list-items')[0].appendChild(toDoListLi);// como por css puede ser que hayan varios elementos, se debe indicar cual se quiere. es mejor indicar selectbyid
    document.getElementById('todo-input').value='';

    // var toDoList = document.getElementsByClassName('todo-list-items');
    // var thingToDo = document.getElementById('todo-input').value;
    // var toDoListLi = document.createElement('li');
    // toDoListLi.appendChild(document.createTextNode(thingToDo));
    // toDoList.appendChild(toDoListLi);

    // var toDoInput = document.getElementById('todo-input');
    // console.log(toDoInput.value);
    // var thingToDo = toDoInput.value;
    // toDoInput.value='';
    // var toDoLi = document.createElement('li');
    // document.getElementById(todo-list-items).appendChild(toDoLi);
  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";
    var ulChilds = document.getElementsByClassName('todo-list-items')[0].children;
    if(ulChilds.length === 0 ){
      return;
    }
    var doneListLi = document.createElement("li");
    var textLiInput = document.getElementsByClassName('todo-list-items')[0].firstElementChild.textContent;
    console.log(textLiInput);
    doneListLi.textContent = textLiInput;
    document.getElementsByClassName('done-list-items')[0].appendChild(doneListLi);
    document.getElementsByClassName('todo-list-items')[0].removeChild(document.getElementsByTagName('li')[0]);
    document.getElementsByClassName('done-list-items')[0].classList.add('done');
  }

}
 
