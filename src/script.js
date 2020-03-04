const counters = document.querySelectorAll('.counter');
const speed = 250;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target'); // + sign to convert string to number
    const count = +counter.innerText;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.floor(count + increment);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };

  updateCount();
});
