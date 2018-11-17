var addCounter = 0;

//list of tasks
var taskList = [{"name" : "List 55 ragas", "priority" : "5", date : "5 Dec 2018"},
         {"name" : "Find out main notes", "priority" : "4", date : "10 Dec 2018"},
         {"name" : "Put in proper thaats", "priority" : "4", date : "20 Dec 2018"},
	 {"name" : "List exceptions", "priority" : "4", date : "22 Dec 2018"},
	 {"name" : "Make reports", "priority" : "3", date : "25 Dec 2018"},
	 {"name" : "Send application to conference", "priority" : "3", date : "27 Dec 2018"}];
   
   function addButtons(name, className, method, div){ 
   var taskString = 'newTask_'+div.id.substring(8);
   var taskDiv = div; 
   var taskDesc = taskDiv.lastChild;
   var btn = document.createElement('button');
btn.innerHTML = name;
btn.id = name+(div.id.substring(8));
btn.setAttribute('class','taskBtn '+className);
btn.setAttribute('onclick', method);
taskDiv.appendChild(btn);

   }
   
//For adding tasks
function addNewTask(){ 
if(addCounter < taskList.length){ 
//for(var i=0; i < addCounter; i++){ 
var taskDiv = document.createElement('div');
var taskString = 'newTask_'+addCounter;
taskDiv.id =taskString;
document.getElementById('toDoList').appendChild(taskDiv);
document.getElementById(taskString).classList.add('taskDiv');

var taskHeader = document.createElement('h6')
taskHeader.innerHTML = taskList[addCounter].name;
var desc = document.createElement('p');
desc.innerHTML=taskList[addCounter].priority + " : " + taskList[addCounter].date;
desc.setAttribute('class','taskDesc');

document.getElementById(taskString).appendChild(taskHeader);
document.getElementById(taskString).appendChild(desc);
addButtons("Start", 'startBtn', "setInProgress("+ taskString +")", taskDiv);
addButtons("Delete", 'deleteBtn', "deleteTask("+ taskString +")", taskDiv);
//}
}
else{
alert('You can add up to 6 tasks.');
}
addCounter++;
}

var sortByProperty = function (property) {
    return function (x, y) {
        return ((x[property] === y[property]) ? 0 : ((x[property] < y[property]) ? 1 : -1));
    };
};

taskList.sort(sortByProperty('priority'));//sorts the tasks withdesc order in priorities.


function setInProgress(div){ 
var taskId = document.getElementById(div.id);
taskId.parentNode.removeChild(taskId);
document.getElementById('DoingList').appendChild(taskId);

var startBtn = document.getElementById('Start'+div.id.substring(8));
startBtn.style.display = 'none';

var deleteBtn = document.getElementById('Delete'+div.id.substring(8));
deleteBtn.style.display = 'none';

addButtons("Done", 'doneBtn', "taskComplete("+ div.id +")", div);

}

function taskComplete(div){ 
var taskId = document.getElementById(div.id);
taskId.parentNode.removeChild(taskId);
document.getElementById('DoneList').appendChild(taskId);
 
var doneBtn = document.getElementById('Done'+div.id.substring(8));
doneBtn.style.display = 'none';

addButtons("Repeat", 'repeatBtn', "repeatTask("+ div.id +")", div);

}

function deleteTask(div){
var taskId = document.getElementById(div.id);
taskId.parentNode.removeChild(taskId);
addCounter--;
}

function repeatTask(div){
var taskId = document.getElementById(div.id);
taskId.parentNode.removeChild(taskId);
document.getElementById('toDoList').appendChild(taskId);

var startBtn = document.getElementById('Start'+div.id.substring(8));
startBtn.style.display = 'inline-block';

var deleteBtn = document.getElementById('Delete'+div.id.substring(8));
deleteBtn.style.display = 'inline-block';

var repeatBtn = document.getElementById('Repeat'+div.id.substring(8));
repeatBtn.style.display = 'none';
}

       
 
