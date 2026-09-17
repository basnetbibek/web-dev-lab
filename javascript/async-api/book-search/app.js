let url = "https://openlibrary.org/search.json";
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector(".search");
const result = document.querySelector(".results");
async function getBook(q) {
  try {
    let config = {
      params: {
        q: q,
      },
    };
    let res = await axios.get(url, config);
    let data = res.data;
    console.log(data);
    result.innerText = "";
    for (let i = 0; i < 5 && i < data.docs.length; i++) {
      let newElement = document.createElement("li");

      newElement.innerText = `${i + 1} ${data.docs[i].title} \n`;

      result.append(newElement);
    }
  } catch (error) {
    console.log(error);
  }
}

searchButton.addEventListener("click", () => {
  let q = searchInput.value;

  searchInput.value = "";
  getBook(q);
});
