document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");

    let newElements = [];

    const newRedPara = document.createElement("p");
    newRedPara.textContent = "Hey I'm red!";
    newRedPara.setAttribute("id", "red");
    container.appendChild(newRedPara);

    const newBlueH3 = document.createElement("h3");
    newBlueH3.textContent = "I'm a blue h3!";
    newBlueH3.setAttribute("id", "blue");
    container.appendChild(newBlueH3);

    const newDiv = document.createElement("div");
    newDiv.classList.add("pink-div");
    container.appendChild(newDiv);
    
    const divH1 = document.createElement("h1");
    divH1.textContent = "I'm in a div";
    newDiv.appendChild(divH1);
    
    const divP = document.createElement("p");
    divP.textContent = "ME TOO!";
    newDiv.appendChild(divP);
    
    let favouriteFoods = ["chocolate", "pasta", "lamb", "pancakes"];

    const newFoodDiv = document.createElement("div");
    newFoodDiv.textContent = "My Favourite Foods";
    newFoodDiv.classList.add("list-heading");
    container.appendChild(newFoodDiv);

    const foodList = document.createElement("ul");
    container.appendChild(foodList)

   for (const food of favouriteFoods) {
        let favFood = document.createElement("li");
        favFood.textContent = food;
        foodList.appendChild(favFood);       
   }

});