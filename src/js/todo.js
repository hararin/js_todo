'use strict';

const addTaskTrigger = document.getElementsByClassName('js-addTask-trigger')[0];
const addTaskTarget = document.getElementsByClassName('js-addTask-target')[0];
const addTaskValue = document.getElementsByClassName('js-addTask-value')[0];
const finishedTaskTarget = document.getElementsByClassName('js-finishedTask-target')[0];

const removeTask = removeButton => {
  const targetTask = removeButton.closest('li');
  addTaskTarget.removeChild(targetTask);
};

const subRemoveTask = removeButton => {
  const targetTask = removeButton.closest('li');
  finishedTaskTarget.removeChild(targetTask);
};

const completeTask = (completeButton, removeButton) => {
  const targetTask = completeButton.closest('li');
  targetTask.removeChild(completeButton);
  const returnButton = document.createElement('button');
  returnButton.innerText = '未完了';
  returnButton.addEventListener('click', () => returnTask(returnButton, completeButton, removeButton));
  removeButton.addEventListener('click', () => subRemoveTask(removeButton));
  targetTask.append(returnButton);
  finishedTaskTarget.appendChild(targetTask);
}

const returnTask = (returnButton, completeButton, removeButton) => {
  const targetTask = returnButton.closest('li');
  targetTask.removeChild(returnButton);
  targetTask.appendChild(completeButton);
  addTaskTarget.appendChild(targetTask);
}

const addTask = task => {
  const listItem = document.createElement('li');
  const removeButton = document.createElement('button');
  const completeButton = document.createElement('button');
  removeButton.innerText = '削除';
  completeButton.innerText = '完了';
  removeButton.addEventListener('click', () => removeTask(removeButton));
  completeButton.addEventListener('click', () => completeTask(completeButton, removeButton));
  listItem.innerText = task;
  listItem.append(removeButton);
  listItem.append(completeButton);
  addTaskTarget.appendChild(listItem);
};


addTaskTrigger.addEventListener('click', event => {
  const task = addTaskValue.value;
  addTask(task);
  addTaskValue.value = '';
});
