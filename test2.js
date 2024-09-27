

// Fetch characters from Marvel API
async function fetchCharacters(searchQuery = '') {
    const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=718084b21b4d56ebf0be898c2c56501d&hash=7e7ab7b63daceb7aa0849955e8b01421&ts=1`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.data.results;  // Return the array of characters
    } catch (error) {
      console.error("Error fetching the characters:", error);
      return [];
    }
  }
  
  // Display the list of characters on the page
  function displayCharacters(characters) {
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = '';  // Clear the list before displaying new characters
  
    characters.forEach(character => {
      const characterElement = document.createElement('div');
      characterElement.classList.add('character');
  
      characterElement.innerHTML = `
        <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" />
        <p>${character.name}</p>
      `;
  
      characterList.appendChild(characterElement);
    });
  }
  
  // Fetch and display characters on page load
  fetchCharacters().then(displayCharacters);
  
  // Add search functionality
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', function(event) {
    const searchQuery = event.target.value;
    fetchCharacters(searchQuery).then(displayCharacters);  // Fetch characters based on search input
  });
  
