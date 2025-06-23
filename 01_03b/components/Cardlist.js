import Card from "./Card.js";

const cardListItem = (imgData) => {
  return `
    <li class="cardlist__item">
      ${Card(imgData)}
    </li>
  `;
};

const Cardlist = (data) => {
  return `
    <section class="cardlist">
      <ul class="cardlist__list">
        ${data.map((imgData) => cardListItem(imgData)).join("")}
      <ul>
    </section>
  `;
};

export default Cardlist;
