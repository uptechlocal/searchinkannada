window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    var exploreLink = document.querySelector('.skill');
    
  
    exploreLink.addEventListener('click', function(event) {
      event.preventDefault();
      var targetSection = document.querySelector(this.getAttribute('href'));
      smoothScroll(targetSection);
    });
  
    function smoothScroll(target) {
      var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var duration = 8000; // adjust duration as needed
      var startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var ease = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, ease);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var exploreLink = document.querySelector('.ab');
    
  
    exploreLink.addEventListener('click', function(event) {
      event.preventDefault();
      var targetSection = document.querySelector(this.getAttribute('href'));
      smoothScroll(targetSection);
    });
  
    function smoothScroll(target) {
      var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var duration = 8000; // adjust duration as needed
      var startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var ease = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, ease);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }

    counter("count1", 0, 4, 2000); // Adjust end value as per your requirement
    counter("count2", 0, 25, 4000); // Adjust end value as per your requirement
    counter("count3", 0, 10, 4000); // Adjust end value as per your requirement
});
