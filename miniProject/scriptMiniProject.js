let usersURL = 'https://jsonplaceholder.typicode.com/users';
fetch(usersURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(usersData) {
        for(let user of usersData) {
            let userDiv = document.createElement('div');
            let userInfo = document.createElement('p');
            let userButton = document.createElement('button');
            userInfo.innerText = `${user.id} ${user.name} ${user.username}`;
            userButton.innerText = 'Send';

            userButton.addEventListener('click', function () {
                localStorage.setItem('id', user.id);
                window.location.href = 'http://localhost:63342/javascript2023/miniProject/user-delails.html?_ijt=r3i62hmonslfkvgptrepipp48a&_ij_reload=RELOAD_ON_SAVE'; // переходимо на сторінку user-details.html
            });

            userDiv.classList.add('user-item');
            userDiv.appendChild(userInfo);
            userDiv.appendChild(userButton);
            document.body.appendChild(userDiv);
        }
    });




