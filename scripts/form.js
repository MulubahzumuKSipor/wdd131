const year = document.querySelector("#year");
document.getElementById("year").innerHTML = new Date((document.lastModified));


const products = [
    {
      id: "fc-1888",
      name: "Flux capacitor",
      avgrating: 4.5
    },
    {
      id: "fc-2050",
      name: "Power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Warp equalizer",
      averagerating: 5.0
    }
  ];

  const selectElement = document.querySelector("#product");

  products.forEach(option => {
      let newOption = document.createElement("option");
      newOption.value = option.id;
      newOption.text = option.name;
  
      selectElement.appendChild(newOption);
  });
