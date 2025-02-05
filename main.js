
let currentImageIndex = 0;
let images = document.querySelectorAll(".gallery img");

// Открытие модального окна с фото
function openModal(index) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");

    currentImageIndex = index;
    modal.style.display = "flex";
    modalImg.src = images[index].src;
}

// Закрытие модального окна
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Переключение изображений
function changeImage(step) {
    currentImageIndex += step;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Переключение на последнее фото
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Переключение на первое фото
    }

    document.getElementById("modal-img").src = images[currentImageIndex].src;
}

// Закрытие по клавише ESC
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    } else if (event.key === "ArrowRight") {
        changeImage(1);
    } else if (event.key === "ArrowLeft") {
        changeImage(-1);
    }
});
