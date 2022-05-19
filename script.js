let userInput = document.getElementById('userinput');

userInput.addEventListener('keyup', searchName);

function searchName() {
    let inputValue = document.getElementById('userinput').value.toUpperCase();
    let characterList = document.getElementById('characterList');
    let character = characterList.querySelectorAll('li.list-group-item');

    for (let i = 0; i < character.length; i++) {
        let a = character[i].getElementsByTagName('p')[0];
        if (a.innerHTML.toUpperCase().indexOf(inputValue) >- 1) {
            character[i].style.display = '';
        } else {
            character[i].style.display = 'none';
        }
    }
}