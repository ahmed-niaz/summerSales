let count = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(`.card`);
for (const card of cards) {
  card.addEventListener(`click`, function () {
    const title = card.querySelector(`h3`).innerText;
    const titleContainer = document.getElementById(`title-container`);
    const p = document.createElement(`p`);
    p.innerText = `${count}.${title}`;
    count++;
    titleContainer.append(p);
    const price = parseFloat(
      card.querySelector(`span`).innerText.split(" ")[1]
    );
    totalPrice += price;
    document.querySelector(`#totalPrice`).innerText = totalPrice.toFixed(2);
  });
}
