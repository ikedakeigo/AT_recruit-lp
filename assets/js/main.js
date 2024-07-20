window.onload = function () {
  var element = document.querySelector('[data-title="Value"]');
  if (element && element.getAttribute("data-title") === "Value") {
    element.classList.add("value-title");
  }
  console.log(element);

  const worksElement = document.querySelector(".p-work__wrap");
  const targetElement = document.querySelector(".p-work__bg");
  const matchMedia = window.matchMedia("(min-width: 800px)");

  let resizeObserver;

  const handleResize = () => {
    if (matchMedia.matches) {
      if (!resizeObserver) {
        const resizeObserver = new ResizeObserver((entries) => {
          for (let entry of entries) {
            const worksHeight = entry.target.offsetHeight;
            console.log(worksHeight);
            targetElement.style.height = worksHeight + 50 + "px";
          }
        });
        resizeObserver.observe(worksElement);
      }
    } else {
      if (resizeObserver) {
        resizeObserver.unobserve(worksElement);
        resizeObserver = null;
      }
      targetElement.style.height = "";
    }
  };

  // 初期をチェック
  handleResize();
  matchMedia.addEventListener("change", handleResize);

  const scheduleElement = document.getElementById("schedule-top");
  const targetElement2 = document.querySelector(".p-schedule__bg");

  if (scheduleElement) {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const scheduleHeight = entry.target.offsetHeight;
        console.log(scheduleHeight);
        targetElement2.style.height = scheduleHeight + "px";
      }
    });
    resizeObserver.observe(scheduleElement);
  }

  const guidelinenElement = document.querySelector(".p-guidelines__wrap");
  const targetElement3 = document.querySelector(".p-guidelines__bg");

  if (guidelinenElement) {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const guidelineHeight = entry.target.offsetHeight;
        console.log(guidelineHeight);
        targetElement3.style.height = guidelineHeight + "px";
      }
    });

    resizeObserver.observe(guidelinenElement);
  }
};
