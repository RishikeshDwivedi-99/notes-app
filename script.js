let button = document.querySelector("button");
let flexNotes = document.querySelector(".flexNote");
button.addEventListener("click" ,()=>{
  let addText = document.createElement("textarea");
  let textDiv = document.createElement("div");
  let img = document.createElement("img");
  img.src = "./images/delete.png";
  textDiv.classList.add("note");
  textDiv.appendChild(addText);
  textDiv.appendChild(img);
  flexNotes.appendChild(textDiv);

  img.addEventListener("click" ,()=>{
    flexNotes.removeChild(textDiv);
  })
}) 





function saveData() {
  let data = flexNotes.innerHTML;
  localStorage.setItem("data",data)
}