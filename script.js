// Question 1.
const cat = {
    complain: function () {
        console.log('Meow!');
    }
};

cat.complain();

// Question 2.

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// ****************************


// Question 3

heading.style.fontSize = "2em";
console.log(heading);

// ****************************


// Question 4

heading.classList.add("subheading");
console.log(heading);

// ****************************


// Question 5

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
    paragraphs[i].style.color = "red";
}

// ****************************


// Question 6

const resultContainer = document.querySelector(".results");
console.log(resultContainer.style);

resultContainer.innerHTML = "<p>New paragraph</p>";

resultContainer.style.backgroundColor = "yellow";

// ****************************


// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catsName(list) {
    for (let i = 0; i < list.length; i++) {
        console.log("The cats name is: " + list[i].name);
    }
}

catsName(cats);

// ****************************


// Question 8

function createCats(cats) {
    let myCatItems = "";
    for (let i = 0; i < cats.length; i++) {
        myCatItems += `
        <div>
        <h5>${cats[i].name}</h5>
        <p>${cats[i].age ? cats[i].age : "Age unknown"}</p>
        </div>
        `;
    }
    return myCatItems;
}

const newCats = createCats(cats);
console.log(newCats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newCats;

// ****************************
