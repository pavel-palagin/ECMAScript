// const url = "https://www.boredapi.com/api/activity";
// const btnEl = document.querySelector(".btn");

// btnEl.addEventListener("click", () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((json) => {
//       const data = json;
//       console.log(data);
//       getActivity(data);
//     })
//     .catch((error) => console.log("Something went wrong"));
// });

// function getActivity(data) {
//   const divEl = document.createElement("div");
//   divEl.textContent = data.activity;
//   document.body.appendChild(divEl);
// }

// async function getActiv(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }

// btnEl.addEventListener("click", async () => {
//   try {
//     const data = await getActiv(url);
//     console.log(data);
//     getActivity(data);
//   } catch (error) {}
// });

const keyNasa = "rT1bjK9ThCH64i8fZQhrnbAVJFrZNqpfBFoLb9i5";

const url =
  "https://api.nasa.gov/planetary/apod?api_key=" + keyNasa + "&count=10";

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

try {
  const data = await getData(url);
  const bodyEl = document.querySelector("body");
  data.forEach((element) => {
    bodyEl.insertAdjacentHTML(
      "beforeend",
      `
        <figure>
            <img src="${element.url}" alt="img">
            <figcaption>${element.explanation}</figcaption>
        </figure>
    `
    );
  });

  console.log(data);
} catch (error) {
  console.log("no connect");
}
