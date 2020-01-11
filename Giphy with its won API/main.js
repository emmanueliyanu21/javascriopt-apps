// declaring const
const searchButton = document.querySelector(".searchButton");
const inputValue = document.querySelector("#inputValue")


// declaring api key
const client_id = "hc6M1Npy3bSOv0Q8QNCDWtjbl06ATS9m";
const client_secret = "https://api.giphy.com/v1/"

//api call with javascript, jQuery

const xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=client_id&limit=5");
xhr.done(function (data) {
    console.log("success got data", data);
});

// api call
// const fetchUsers = async (user) => {  //ajax on steriods, imp of async, imp of await, imp of return & imp of json
//     const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

//     const data = await api_call.json();
//     return (data);
// };

const showData = () => {
    xhr(inputValue.value).then((res) => {
        console.log(res);

        // nameContainer.innerHTML = `Name: <span class="main_profile-value">${res.data.name}</span>`;
        // unContainer.innerHTML = `Username: <span class="main_profile-value">${res.data.login}</span>`;
        // reposContainer.innerHTML = `Repos: <span class="main_profile-value">${res.data.public_repos}</span>`;
        // urlContainer.innerHTML = `URL: <span class="main_profile-value">${res.data.innerHTML - url}</span>`;

    })
};


searchButton.addEventListener("click", () => {
    showData();
})