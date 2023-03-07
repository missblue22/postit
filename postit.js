let submitButton = document.getElementById("submitButton");
let postitArea = document.getElementById("postit-area");
let formArea = document.getElementById("form-area");

submitButton.addEventListener('click', () => {
    // 1 get the values
    let inputPostitTitle = document.getElementById('postitTitle').value;
    let inputPostitDescription = document.getElementById("input-postit-description").value;
    let messageErrorElement = document.getElementById('message-error');
    
    if (inputPostitTitle === "" || inputPostitDescription === "") {
        return messageErrorElement.innerHTML = "Les champs doivent être remplis";
    } else {
        messageErrorElement.innerHTML = "";
    }

    //2 create elements
    let postitCard = document.createElement("div");
    let titleDiv = document.createElement("div");
    let descriptionDiv = document.createElement("div");
    let titleP = document.createElement("p");
    titleP.innerHTML = inputPostitTitle;
    let descriptionP = document.createElement("p");
    descriptionP.innerHTML = inputPostitDescription;

    //3 add class
    postitCard.classList.add("postit-card")
    titleDiv.classList.add("postit-title-card")
    descriptionDiv.classList.add("postit-description-card")

    //4
    postitCard.appendChild(titleDiv).appendChild(titleP);
    postitCard.appendChild(descriptionDiv).appendChild(descriptionP);

    postitArea.appendChild(postitCard);

    document.getElementById('postitTitle').value = ""
    document.getElementById("input-postit-description").value = ""

})
