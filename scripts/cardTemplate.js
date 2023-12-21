import { cardsContent } from '../scripts/cardsContent.js';

const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.cards-container');

cardsContent.forEach((card) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__heading').textContent = card.heading;
  cardElement.querySelector('.card__image').src = card.image;
  cardElement.querySelector('.card__image').alt = card.heading;
  cardElement.querySelector('.card__image-label').textContent = card.imageLabel;
  cardElement.querySelector('.paragraph-one').textContent = card.paragraphOne;
  cardElement.querySelector('.paragraph-two').textContent = card.paragraphTwo;

  cardsContainer.append(cardElement);
});
