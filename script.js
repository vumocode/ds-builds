const updateDualImages = () => {
    document.querySelectorAll("td").forEach(td => {
      const imgs = td.querySelectorAll("img");
      if (imgs.length === 2) {
        if (!td.classList.contains("dual-img")) {
          td.classList.add("dual-img");
        }
      } else {
        td.classList.remove("dual-img");
      }
    });
  };

  // Wykonaj raz na start
  updateDualImages();

  // Obserwuj zmiany w całym dokumencie
  const observer = new MutationObserver(mutations => {
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
    subtree: true
  });