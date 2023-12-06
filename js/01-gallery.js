import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const container = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>`
  )
  .join("");

container.insertAdjacentHTML("beforeend", markup);

container.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const imageUrl = event.target.dataset.source;

    const lightbox = basicLightbox.create(`
      <img src="${imageUrl}" alt="Image">
    `);

    lightbox.on("show", (instance) => {
      // Your code to run when the lightbox is shown
    });

    lightbox.on("close", (instance) => {
      // Your code to run when the lightbox is closed
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        lightbox.close();
      }
    });
  }
});