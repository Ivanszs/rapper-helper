// Information to reach API
const url = 'https://api.datamuse.com/words?';
//'rel_rhy=' is the start of a parameter for the query string. This parameter will narrow your search to words that rhyme.
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  //inputField.value grabs what is in the inputField and assigns it to the variable wordQuery.
  const wordQuery = inputField.value;
  //endpoint will store the value of the entire URL and query string.
  const endpoint = url + queryParams + wordQuery;

  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response)
    }
  }
  //'GET' sets the method and url sets the destination. (endpoint)
  xhr.open('GET', endpoint);
  xhr.send();
};

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault()
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  };
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions)