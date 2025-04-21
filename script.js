const updateDualImages = () => {
  document.querySelectorAll("td").forEach((td) => {
    const imgs = td.querySelectorAll("img");
    td.classList.remove("dual-img", "triple-img");

    if (imgs.length === 2) {
      td.classList.add("dual-img");
    } else if (imgs.length === 3) {
      td.classList.add("triple-img");
    }
  });
};

updateDualImages();

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "childList" || mutation.type === "attributes") {
      updateDualImages();
      break;
    }
  }
});

observer.observe(document.body, {
  childList: true,
  attributes: true,
  subtree: true,
});
