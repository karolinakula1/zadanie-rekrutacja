export function headerFunction() {

    const searchBtn = document.querySelector(".search-btn");
    const searchBox = document.querySelector(".search-box");

    if (searchBtn !== null) {
        searchBtn.onclick = () => {
            if (searchBox.classList.contains("active")) {
                searchBox.classList.remove("active")
            } else {
                searchBox.classList.add("active");
            }
        }
    }
}
