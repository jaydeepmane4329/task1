let parent = document.getElementById("data");

let dilog = document.getElementById("dilog");
let showImage = () => {
  dilog.style.display = "block";
};

let hideImage = () => {
  dilog.style.display = "none";
};

// courousal
document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
		<div class="carousel__nav">
			${buttonsHtml.join("")}
		</div>
	`
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});

// To show popUp in full Screen
document.querySelectorAll(".carousel img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popUp_image").style.display = "block";
    document.querySelector(".popUp_image img").src = image.src;
  };

  document.querySelector(".popUp_image span").onclick = () => {
    document.querySelector(".popUp_image").style.display = "none";
  };
});
