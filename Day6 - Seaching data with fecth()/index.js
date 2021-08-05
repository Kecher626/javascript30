const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = []


fetch(endpoint) // this fetch would return a promise
    .then(res => res.json()) // , so tarnsform into json
    .then(data => cities.push(...data)) // and then assign data to an array
    //
    // if you want to assign like (cities = data), you need to change the declaretion (const to let)
    //

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // to find out if the city or state matchs what was searched
        const regex = new RegExp(wordToMatch, 'gi') // g -> global, i -> dont care about upper or lower case
        return place.city.match(regex) || place.state.match(regex)
    })
}

// to change numbers into numberWithCommas (such as 1234 would change into 1,234)
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {

        // to highlight the keywords
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

        // return to css
        return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
    }).join(''); // use join() to turn an array with multiple items into one big string
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);