let textarea = document.getElementById("textarea");
textarea.addEventListener("input",()=>{
    let text = textarea.value;
    console.log(text)
    let characters = text.length;
    let char = document.querySelector(".char");
    char.innerHTML = characters;
    // console.log(char)

    text = text.trim();
    let words = text.split(" ");
    let updatedArray = words.filter(bbb=>{
        return bbb !=""
    });
    let word = updatedArray.length;
    // console.log(word)
    document.querySelector(".word").innerHTML = word;




})