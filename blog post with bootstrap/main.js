const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = "Iv1.59f9eda70f1209ce";
const client_secret = "24f6d8e8f1d98dc6a91dcc5eadb3c651f91207ed";

// api call
const fetchUsers = async (user) => {  //ajax on steriods, imp of async, imp of await, imp of return & imp of json
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const data = await api_call.json();
    return (data);
};

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);

        nameContainer.innerHTML = `Name: <span class="main_profile-value">${res.data.name}</span>`;
        unContainer.innerHTML = `Username: <span class="main_profile-value">${res.data.login}</span>`;
        reposContainer.innerHTML = `Repos: <span class="main_profile-value">${res.data.public_repos}</span>`;
        urlContainer.innerHTML = `URL: <span class="main_profile-value">${res.data.innerHTML - url}</span>`;

    })
};


searchButton.addEventListener("click", () => {
    showData();
})