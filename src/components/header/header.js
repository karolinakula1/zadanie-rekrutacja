const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");

searchBtn.onclick = () => {
    if (searchBox.classList.contains("active")) {
        searchBox.classList.remove("active")
    } else {
        searchBox.classList.add("active");
    }
}
