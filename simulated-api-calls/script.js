// testing new it changes with git

async function fetchData() {
    const loadingText = document.getElementById("loading");
    const dataText = document.getElementById("data");

    loadingText.style.display = "block"

    try {
        const reponse = await new Promise((resolve, reject) => {
            setTimeout(
                ()=>
                    Math.random() > 0.5 ? resolve("Data loading succesfully") : reject(), 3000);
        })
        loadingText.style.diplay ="none"
        dataText.textContent = reponse;
    } catch (error) {
        loadingText.style.display= "none"
        dataText.textContent ="error loading"
    } finally {
        loadingText.style.displa = "none"
    }
}