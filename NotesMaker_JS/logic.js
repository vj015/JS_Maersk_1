console.log('Hello');
showNotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById('addTxt');
    let addtitle = document.getElementById('addTitle');
    let notes = localStorage.getItem("notes"); 
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title : addtitle.value,
        text : addtxt.value
         
    }
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtxt.value = '';
    addtitle.value = '';
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard card m-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${element.title} </h5>
        <p class="card-text"> ${element.text} </p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-dark">Delete Note</button>
    </div>
</div>`;
    });
    let notesElem = document.getElementById('notes');
    if(notesObj.length!=0){ 
    notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = `No Notes to show. Use above section to add Notes`;
    }
}
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}
let search = document.getElementById('searchtxt');
search.addEventListener("input", function(){ 
    console.log('fired');
    let inputval = search.value;
    let notecards = document.getElementsByClassName('noteCard');
    Array.from(notecards).forEach(function(element)
    {
        let ctxt = element.getElementsByTagName("p")[0].innerText;
        if(ctxt.includes(inputval))
        {
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})