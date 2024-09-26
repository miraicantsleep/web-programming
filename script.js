window.onload = function () {
  const containers = document.querySelectorAll(".wrapper-left, .wrapper");

  containers.forEach((container) => {
    container.style.opacity = 0;

    setTimeout(() => {
      container.style.transition = "opacity 0.5s ease-in-out";
      container.style.opacity = 1;
    }, 100);
  });
};
