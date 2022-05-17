  //excercise 1
  //you are given a string which contains a text
  //fetch all the links from the page which contains the same text and output them 

  let str = "python";
  let links = document.links;
  let href;
  Array.from(links).forEach(function(element){
      href = element.href;
      if(href.includes(str))
      {
          console.log(href);
      }
      
  });



  //excercise 2
  /* creating a editable div. You have to create a div and inject it into the page 
  which contains a heading.
  Whenever user clicks on the div it should be converted into the editable item
  .whenever user clicks away save the note to a local storage

  */ 

  //create element
   let div = document.createElement('div');
   div.classList.add('border');
   div.classList.add('p-3');
   div.classList.add('m-3');
   div.setAttribute('class', 'elem');
   div.setAttribute('id', 'elem');
   let val = localStorage.getItem('text');
   let text;
   if(val==null){
   text = document.createTextNode('Hello I am a editable div');
   }
   else{
       text = document.createTextNode(val);
   }
   div.appendChild(text);
   console.log(div);

   //appended element
   let par = document.querySelector('.container');
   par.appendChild(div); 

   div.addEventListener('click', function(){
       let noTextAreas = document.getElementsByClassName('textarea').length;
       if(noTextAreas == 0){
       let html = elem.innerHTML;
       div.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html} </textarea>`;
       }
       let textarea = document.getElementById('textarea');
       textarea.addEventListener('blur', function(){
           elem.innerHTML = textarea.ariaValueMax;
           localStorage.setItem('text', textarea.value);
       })
   });
