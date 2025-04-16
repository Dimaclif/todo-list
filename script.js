const input=document.getElementById("input");
        const list=document.getElementById("list");

        function btn(){
            const text=input.value;//введенный текст
            const sozd=document.createElement("p");//созданный элемент
            list.appendChild(sozd);
            if(text===""){
                 sozd.textContent="Пусто";
                 sozd.classList.toggle("text");
            }
            else{
                sozd.textContent=text;
                sozd.classList.toggle("text");
            }}
            function remove(){
                const rem=document.getElementsByTagName("p");
                const text=rem[rem.length-1];
                list.removeChild(text);
            }