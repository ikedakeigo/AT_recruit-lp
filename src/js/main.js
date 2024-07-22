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
  const targetElements = document.querySelectorAll(".p-schedule__bg, .p-schedule__bg-reverse");

  if (scheduleElement) {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const scheduleHeight = entry.target.offsetHeight;
        console.log(scheduleHeight);
        targetElements.forEach((element) => {
          element.style.height = scheduleHeight + "px";
        });
      }
    });
    resizeObserver.observe(scheduleElement);
  }

  // const guidelinenElement = document.querySelector(".p-guidelines__wrap");
  // const targetElements3 = document.querySelectorAll(".p-guidelines__bg, .p-schedule__bg-reverse");

  // if (guidelinenElement) {
  //   const resizeObserver = new ResizeObserver((entries) => {
  //     for (let entry of entries) {
  //       const guidelineHeight = entry.target.offsetHeight;
  //       console.log(guidelineHeight);
  //       targetElements3.forEach((element) => {
  //         element.style.height = guidelineHeight + "px";
  //       });
  //     }
  //   });

  //   resizeObserver.observe(guidelinenElement);
  // }

};
