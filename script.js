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

document.querySelector(`#apply-btn`).addEventListener(`click`, function () {
  const promoCode = document.querySelector(`#input-field`).value;
  const code = promoCode.split(" ").join("").toUpperCase();

  if (totalPrice >= 200) {
    if (code === `SELL200`) {
      const discountElement = document.querySelector(`#discountPrice`);
      const discountPrice = totalPrice * 0.2;
      discountElement.innerText = discountPrice.toFixed(2);
      const restAmount = document.querySelector(`#total`);
      restAmount.innerText = totalPrice - discountPrice.toFixed(2);
      document.querySelector(`#input-field`).value = "";
    } else {
      alert(`Invalid promo Code`);
    }
  } else {
    alert(`purchase at least 200 $`);
  }
});
