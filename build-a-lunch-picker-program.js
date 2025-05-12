** start of script.js **

let lunches = [];

function addLunchToEnd(array, lunchItem) {
  array.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return array;
}

function addLunchToStart(array, lunchItem) {
  array.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array) {
  if (array.length > 0) {
    const removedLunch = array.pop();
    console.log(`${removedLunch} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return array;
}

function removeFirstLunch(array) {
  if (array.length > 0) {
    const removedLunch = array.shift();
    console.log(`${removedLunch} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return array;
}

function getRandomLunch(array) {
  if (array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomLunch = array[randomIndex];
    console.log(`Randomly selected lunch: ${randomLunch}`);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(array) {
  if (array.length > 0) {
    console.log(`Menu items: ${array.join(', ')}`);
  } else {
    console.log("The menu is empty.");
  }
}


** end of script.js **

