const postListContainer = document.querySelector(".post-list-container");

//fetch using XHR
function fetchUsingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status == 200) {
      displayResults(xhr.response);
      console.log(xhr);
    } else {
      console.log("some error ocurred");
    }
  };
}

//fetch using fetch method
function fetchUsingFetchMethod() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  fetchRequest
    .then((response) => response.json())
    .then((result) => displayResults(result))
    .catch((e) => console.log(e));
}

//fetch using Async Await method
async function fetchUsingAsyncAwaitMethod() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  const result = await response.json();
  console.log(result);
  displayResults(result);
}

//fetch using XHR and Async Await both method
function helper(method, url){
    const promise = new Promise((resolve,reject)=> {
       const xhr = new XMLHttpRequest();
       xhr.open(method,url);
       xhr.responseType = 'json';
       xhr.send();
   
       xhr.onload = ()=> {
           if(xhr.status === 200){
               resolve(xhr.response)
           } else {
               reject(xhr.response)
           }
       }
    })
  return promise;
}
async function fetchUsingXHRAndAsyncAwait() {
  const response = await helper("GET","https://jsonplaceholder.typicode.com/posts",
    
  );
  displayResults(response)
  console.log(response);
}


function displayResults(posts) {
  postListContainer.innerHTML = posts
    .map(
      (postItem) => `
    <div class="post-item">
    <h3>${postItem.title}</h3>
    <p>${postItem.body}</p>
    </div>
    `
    )
    .join(" ");
}

// fetchUsingXHR();
// fetchUsingFetchMethod();
// fetchUsingAsyncAwaitMethod();
fetchUsingXHRAndAsyncAwait();
