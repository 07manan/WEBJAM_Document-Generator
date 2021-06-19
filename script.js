const btn= document.querySelector("#img")
            const img=document.querySelector("img#preview")
        function loadimg(){
            
            btn.click();
        }
        btn.addEventListener("change", function(){
            const file= this.files[0];
            if(file){
                const reader =new FileReader()
                reader.onload =function(){
                const result =reader.result;
                img.src=result;
                imgT.src=result;
            }
            reader.readAsDataURL(file);
            }
        })

        function generatepdf() {
            
            document.getElementById("aimT").innerHTML=document.getElementById("aimT").innerHTML.concat(document.getElementById("aim").value);
            document.getElementById("nameT").innerHTML=document.getElementById("nameT").innerHTML.concat(document.getElementById("name").value);
            document.getElementById("branchT").innerHTML=document.getElementById("branchT").innerHTML.concat(document.getElementById("branch").value);
            document.getElementById("practicalT").innerHTML=document.getElementById("practicalT").innerHTML.concat(document.getElementById("practical").value);
            document.getElementById("dateT").innerHTML=document.getElementById("dateT").innerHTML.concat(document.getElementById("date").value);
            document.getElementById("apparatusT").innerHTML=document.getElementById("apparatusT").innerHTML.concat(document.getElementById("apparatus").value);
            document.getElementById("theoryT").innerHTML=document.getElementById("theoryT").innerHTML.concat(document.getElementById("theory").value);
            document.getElementById("input").style.display = 'none';
            document.getElementById("nav").style.display = 'none';
            document.getElementById("document-template").style.display = "block";
            
            window.print();
            document.getElementById("nav").style.display = '';
            document.getElementById("document-template").style.display = "none";
            document.getElementById("input").style.display = "block";
        }

    
