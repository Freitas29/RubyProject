
function preview(e){
    if (e.files && e.files[0]) {
        var reader = new FileReader();

        reader.onload = (photo) => {
            document.getElementById('card-photo').src = photo.target.result;
        }

        reader.readAsDataURL(e.files[0]);

    }
}


document.querySelector("#title").addEventListener('keyup',function(element){
    let input = document.getElementById('title').value
    document.getElementById('card-title').innerText = input 
});

document.querySelector("#description").addEventListener('keyup',function(element){
    let input = document.getElementById('description').value
    document.getElementById('card-description').innerText = input 
});

document.querySelector("#photo").addEventListener('change',function(){
   preview(this)
})

