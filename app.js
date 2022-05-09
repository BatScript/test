var targets = document.querySelectorAll(".test .images");
var tar = document.querySelectorAll(".test2 .images");

const lazyLoad = (t) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
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

tar.forEach((t) => {
  lazyLoad(t);
});

console.log("works");
