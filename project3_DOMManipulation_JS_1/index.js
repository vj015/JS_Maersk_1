const labelInputField = document.querySelector('#labelValue');
const form = document.querySelector('#form');
const inputType = document.querySelector('#inputType');
labelInputField.addEventListener('keyup' , (e)=>{
    const kp=e.key;
    if(kp === "Enter"){
      const type = inputType.value;
      const label = labelInputField.value;
      const labelInput = document.createElement("label");
      labelInput.classList.add("form-label");
      const div = document.createElement("div");
      let input = null;
      if(type === 'textarea')
      {
          input = document.createElement("textarea");
      }
      else{
       input = document.createElement("input");
      }
      input.classList.add("form-control");
      div.classList.add("mb-3");
      input.type = type;
      labelInput.innerHTML = label;
      if(type != 'submit'){
      div.appendChild(labelInput);
      }
      if(type === 'submit'){
          input.classList.add('btn');
          input.classList.add('btn-success');
          input.value = label;
      }
      div.appendChild(input);
      form.appendChild(div);
      
    }
});