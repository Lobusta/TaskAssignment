



document.getElementById("submitbutton").addEventListener("click", function(event){
    event.preventDefault()
  });




function AddTask(){

    var newtask=document.getElementById('create-task').value;
    document.getElementById('create-task').innerHTML = "";
    
    if (newtask == ""){
        alert("Please fill the form");
    }
    else {
        Addnewtask(newtask);
    }


}


function Addnewtask() {
    const div = document.createElement('div');
  
    div.className = arguments[0];
  
    div.innerHTML = `
                    <div class="task-list-element">
                        <div onclick="this.classList.toggle('check-mark-container-active')" class="check-mark-container">
                              <img  class="check-mark" src="icon-check.svg"/>
                         </div>
                        <div class="task-list-element-inside">
                              <p>`+arguments[0]+`</p>
                              <img onclick="delete_row(this)" class="cross" src="icon-cross.svg"/>
                         </div>
                    </div>
    `;

    document.getElementById('task-list-container').appendChild(div);
    
  }


    function delete_row(e)
    {
        e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
    }



    
    

        
    