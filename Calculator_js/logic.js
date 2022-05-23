console.log("calculator");
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenval = '';
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttontxt = e.target.innerText;
        console.log(buttontxt);

        if(buttontxt == 'X')
        {
            screenval+= '*';
            screen.value = screenval;
        }
        else if(buttontxt == 'C')
        {
            screenval = '';
            screen.value = screenval;
        }
        else if(buttontxt == '=')
        {
            screenval = eval(screenval);
            screen.value = screenval;
        }
        else{
            screenval+= buttontxt;
            screen.value = screenval;
        }
    })
}