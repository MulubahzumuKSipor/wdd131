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
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana temple",
        location: "Accra, Ghana",
        dedicated: "January 11, 2004",
        area: 17500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/1200x1200/accra-ghana-temple-759299-wallpaper.jpg"
      },
      {
        templeName: "Atlanta Georgia Temple",
        location: "Atlanta Georgia",
        dedicated: "June 1, 1983",
        area: 34500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/800x1280/atlanta-temple-lds-875956-wallpaper.jpg"
      }
    
    // Add more temple objects here...
  ];

  const container = document.querySelector("#cards");
  function displayTemplePix(aList) {
    document.querySelector("#cards").innerHTML = "";
    aList.forEach(element => {
      const imageContainer = document.createElement("section");
      imageContainer.classList.add("image-container");

      const titleTag = document.createElement("h1");
      const locationTag = document.createElement("p");
      const dedicatedTag = document.createElement("p");
      const areaTag = document.createElement("p");

      const templeName = `${element.templeName}`;
      const location = `<span>LOCATION: </span>${element.location}`;
      const dedicated = `<span>DEDICATED: </span>${element.dedicated}`;
      const area = `<span>SIZE: </span>${element.area}`;
      const alternate = `${element.alternate}`;
      const source = `${element.imageUrl}`;

      titleTag.innerHTML = templeName;
      locationTag.innerHTML = location;
      dedicatedTag.innerHTML = dedicated;
      areaTag.innerHTML = area;

      const imageTag = document.createElement("img");
      imageTag.setAttribute("src", source);
      imageTag.setAttribute("class", "images");
      imageTag.setAttribute("loading", "lazy");
      imageTag.setAttribute("width", "400");
      imageTag.setAttribute("height", "225");
      imageTag.setAttribute("alt", alternate);

      imageContainer.appendChild(titleTag);
      imageContainer.appendChild(locationTag);
      imageContainer.appendChild(dedicatedTag);
      imageContainer.appendChild(areaTag);
      imageContainer.appendChild(imageTag);

      container.append(imageContainer);
    });
}
displayTemplePix(temples);
const oldTemples = document.querySelector("#old");
oldTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.dedicated.substring(0, 4) < 1900));
});
const largeTemples = document.querySelector("#large");
largeTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.area > 90000));
});
const smallTemples = document.querySelector("#small");
smallTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.area < 10000));
});
const newTemples = document.querySelector("#new");
newTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.dedicated.substring(0, 4) > 2000));
});
const home = document.querySelector("#home");
home.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples);
});