var targets = document.querySelectorAll(".test .images");

const lazyLoad = (t) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        // console.log(entry);
        console.log("returned");
        return;
      }

      var img = entry.target;
      var src = img.getAttribute("data-src");

      img.setAttribute("src", src);
      img.classList.toggle("fade");
      io.unobserve(t);

    });
  });
  io.observe(t);
};

targets.forEach((target) => {
  lazyLoad(target);
});
