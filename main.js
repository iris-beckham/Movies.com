
// click on 'add movie' to open the form
// as of now, it will stay filled out
const addMovie = document.querySelector('h2');
console.log(document.querySelector('fieldset').style.display)
addMovie.addEventListener('click', () => {
    if (document.querySelector('fieldset').style.display === 'none') {
        document.querySelector('fieldset').style.display = '';
    } else
        document.querySelector('fieldset').style.display = 'none';
})
