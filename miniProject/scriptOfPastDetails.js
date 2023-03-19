
let postURL = `https://jsonplaceholder.typicode.com/posts/${JSON.parse(localStorage.getItem('postID'))}/`;
let postComentsURL  = `https://jsonplaceholder.typicode.com/posts/${JSON.parse(localStorage.getItem('postID'))}/comments`


let postContainer = document.createElement('div');
postContainer.classList.add('user')
let commentsContainer = document.createElement('div');
commentsContainer.classList.add('com')

fetch(postURL)
    .then(response => response.json())
    .then(post =>{
        let userIdDiv = document.createElement('div');
        userIdDiv.innerText = `User ID: ${post.userId}`;
        let idDiv = document.createElement('div');
        idDiv.innerText = `Post ID: ${post.id}`;
        let titleDiv = document.createElement('div');
        titleDiv.innerText = `Title: ${post.title}`;
        let bodyDiv = document.createElement('div');
        bodyDiv.innerText = `Body: ${post.body}`;


        postContainer.append(userIdDiv, idDiv, titleDiv, bodyDiv);
    });

fetch(postComentsURL)
    .then(response => response.json())
    .then(comments => {
        for (let comment of comments){
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('unit')
            let emailDiv = document.createElement('div');
            emailDiv.innerHTML = `<b>${comment.email}</b>`;
            let bodyDiv = document.createElement('div');
            bodyDiv.innerText = `${comment.body}`;
            commentDiv.append(emailDiv, bodyDiv);

            commentsContainer.append(commentDiv);
        }

        // Додаємо контейнери на сторінку
        document.body.append(postContainer, commentsContainer);
    });
