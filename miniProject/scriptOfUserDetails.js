let usersURL = new URL('https://jsonplaceholder.typicode.com/users');
fetch(usersURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(usersData) {
        for (let user of usersData){
            let userName=0;
            if(user.id === parseInt(localStorage.getItem('id'))){
                let postDiv;
                let div = document.createElement('div')
                div.classList.add('userInfo')
                div.innerHTML = `ID: ${user.id} <br> Name: ${user.name} <br> User name: ${user.username} <br> Email: ${user.email} <br>Address: ${user.address.street}    ${user.address.suite}    ${user.address.city}    ${user.address.zipcode} <br> Location: ${user.address.geo.lat}    ${user.address.geo.lng} `
                let button = document.createElement('button')
                button.innerText = 'posts of current user'
                button.classList.add('info')
                button.addEventListener('click', function (){
                    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                        .then(function(response) {
                            return response.json();
                        })
                        .then(function(postData) {
                            let postDiv = document.createElement('div');
                            for (let item of postData){
                                let titleDiv = document.createElement('div');
                                titleDiv.innerText = `${item.id} ${item.title}`;
                                let infoButton = document.createElement('button')
                                infoButton.innerText = 'more'
                                infoButton.addEventListener('click', function (eo){
                                    window.location.href = 'http://localhost:63342/javascript2023/miniProject/post-details.html?_ijt=ivss3a6ejg0e7be9qf06o2hkkg&_ij_reload=RELOAD_ON_SAVE';
                                    localStorage.setItem('postID', `${item.id}`)
                                })
                                let newPostDiv = document.createElement('div');
                                newPostDiv.classList.add('postTitle');
                                newPostDiv.append(titleDiv, infoButton);
                                postDiv.appendChild(newPostDiv);
                            }
                            document.body.appendChild(postDiv);
                        });
                })
                document.body.append(div, button);
            }
        }
    });

