// Необходимо получить список всех пользователей с помощью бесплатного API
// (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.
// Пользователь должен иметь возможность удалить любого пользователя из списка.

const url = "https://jsonplaceholder.typicode.com/users";

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

try {
  const data = await getData(url);
  const boxEl = document.createElement("div");
  boxEl.classList.add("box");
  document.body.append(boxEl);
  data.forEach((element) => {
    boxEl.insertAdjacentHTML(
      "beforeend",
      `

      <div class="box__content">
        <h3 class="box__title">${element.name}</h3>
        <p class="box__info">
          City:<span class="box__text">${element.address.city}</span>
        </p>
        <p class="box__info">
          Username:<span class="box__text">${element.username}</span>
        </p>
        <p class="box__info">
          Email:<span class="box__text">${element.email}</span>
        </p>
        <p class="box__info">
          Phone:<span class="box__text">${element.phone}</span>
        </p>
        <svg
          class="box_close"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            class="box_close-path"
            d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
            fill="#575757"
          />
        </svg>
      </div>

      `
    );
  });

  const closeBox = document.querySelectorAll(".box_close");
  let len = document.querySelector(".box").children.length;

  closeBox.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.target.closest(".box__content").remove();
    });
  });
} catch (error) {
  console.log("no connect");
}
