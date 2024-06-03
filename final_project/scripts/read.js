const year = document.querySelector("#year");
document.getElementById("year").innerHTML = new Date((document.lastModified));

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
    {
      bookName: "Accident",
      Author: "Danielle Steel",
      Published: "1994",
      imageUrl:
      "images/accident.jpeg"
    },
    {
      bookName: "The Legend of Ye Futian",
      Author: "Manti, Utah, United States",
      Published: "06/29/18",
      imageUrl:
      "https://static.wikia.nocookie.net/the-legend-of-futian/images/0/08/Futianguqin.jpg/revision/latest?cb=20221202152032"
    },
    {
      bookName: "Adopted Solider",
      Author: "Lynerparel",
      Published: "2016",
      imageUrl:
      "images/adopted.jpeg"
    },
    {
      bookName: "Vampire System",
      Author: "JKSManga",
      Published: "2020",
      bookLink: 6861,
      imageUrl:
      "https://static.wikia.nocookie.net/my-vampire-system/images/1/18/Quinn_Talen.jpg/revision/latest?cb=20200830091757"
    },
    {
      bookName: "Racoon on the roof",
      Author: "Ben M. Baglio",
      Published: "2001",
      imageUrl:
      "images/racoon.jpg"
    },
    {
      bookName: "Things Fall Apart",
      Author: "Chinua Achebe",
      Published: "1958",
      imageUrl:
      "images/ThingsFallApart.jpg"
    },
    {
      bookName: "Favored Son of Heaven",
      Author: "Highrise Building",
      Published: "2019",
      imageUrl:
      "images/heaven.jpg"
    },
    {
        bookName: "Married to the devil son",
        Author: "JasmineJosef",
        Published: "2019",
        imageUrl:
        "images/son.jpg"
      },
    
  ];

  const container = document.querySelector("#cards");
  function displayTemplePix(aList) {
    document.querySelector("#cards").innerHTML = "";
    aList.forEach(element => {
      const imageContainer = document.createElement("section");
      imageContainer.classList.add("image-container");

      const titleTag = document.createElement("h1");
      const AuthorTag = document.createElement("p");
      const PublishedTag = document.createElement("p");
      const linkTag = document.createElement("p");

      const bookName = `${element.bookName}`;
      const Author = `<span>Author: </span>${element.Author}`;
      const Published = `<span>Published: </span>${element.Published}`;
      const alternate = `${element.alternate}`;
      const source = `${element.imageUrl}`;

      titleTag.innerHTML = bookName;
      AuthorTag.innerHTML = Author;
      PublishedTag.innerHTML = Published;

      const imageTag = document.createElement("img");
      imageTag.setAttribute("src", source);
      imageTag.setAttribute("class", "images");
      imageTag.setAttribute("loading", "lazy");
      imageTag.setAttribute("width", "400");
      imageTag.setAttribute("height", "225");
      imageTag.setAttribute("alt", alternate);

      imageContainer.appendChild(titleTag);
      imageContainer.appendChild(AuthorTag);
      imageContainer.appendChild(PublishedTag);
      imageContainer.appendChild(imageTag);

      container.append(imageContainer);
    });
}
displayTemplePix(temples);
const oldTemples = document.querySelector("#old");
oldTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.Published.substring(0, 4) < 1900));
});
const largeTemples = document.querySelector("#large");
largeTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.bookLink > 90000));
});
const smallTemples = document.querySelector("#small");
smallTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.bookLink < 10000));
});
const newTemples = document.querySelector("#new");
newTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.Published.substring(0, 4) > 2000));
});
const home = document.querySelector("#home");
home.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples);
});