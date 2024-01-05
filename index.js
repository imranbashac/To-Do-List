const item = document.querySelector("input");
const list = document.getElementById("listContainer");

function addItem() {
  if (item.value === "") {
    window.alert("Enter data to add to the list");
  } else {
    const itemData = item.value;
    const listItem = document.createElement("li");
    listItem.textContent = itemData;

    //delete button
    const deleteItem = document.createElement("button");
    deleteItem.textContent = "❌";
    deleteItem.classList.add("deletebtn");
    deleteItem.addEventListener("click", function (event) {
      if (event.target.classList.contains("deletebtn")) {
        list.removeChild(listItem);
        saveData();
      }
    });
    listItem.appendChild(deleteItem);

    //add items
    listItem.addEventListener("click", function () {
      listItem.classList.toggle("checked");
      saveData();
    });

    list.appendChild(listItem);
    item.value = "";
    listItem.addEventListener("click", handleItemClick);
    saveData();
  }
}

function saveData() {
  localStorage.setItem("listItemData", list.innerHTML);
}

function getData() {
  list.innerHTML = localStorage.getItem("listItemData");
}

function handleItemClick(event) {
  const listItem = event.target.closest("li");

  if (event.target.classList.contains("deletebtn")) {
    list.removeChild(listItem);
    saveData();
  } else if (listItem) {
    listItem.classList.toggle("checked");
    saveData();
  }
}

list.addEventListener("click", handleItemClick);

item.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});

getData();
