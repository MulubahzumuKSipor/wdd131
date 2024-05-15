const year = document.querySelector('#year');
document.getElementById("year").innerHTML = new Date((document.lastModified));


const temp = 26;
const windSpeed = 5;
function calculateWindchill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const windchill = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16;
        const roundedWindchill = Math.round(windchill * 100) / 100;
        return roundedWindchill;
    } else {
        return "N/A";
    }
}
const windchillFactor = document.querySelector('#windchill-factor');
windchillFactor.textContent = calculateWindchill(temp, windSpeed); 