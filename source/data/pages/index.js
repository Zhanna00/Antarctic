import html from '../../js/utils/html.js';
import {getPictures} from '../global.js';

const pageData = {
  maps: {
    contactsMap: {
      initials: {
        center: [59.9387165, 30.3230474],
        controls: [],
        zoom: 16,
      },
      placemark: [
        {hintContent: 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8'},
        {
          iconImageHref: 'img/sprite.svg#icon-pin',
          iconImageSize: [18, 22],
          iconLayout: 'default#image',
          iconShadow: false,
        },
      ],
    },
  },
};

export default {
  pageData: JSON.stringify(pageData),
  promo: {
    content: html`<h1>Круизы в Антарктику</h1>
      <p>Волшебный мир айсбергов&nbsp;и пингвинов</p>`,
    image: getPictures('firstscreen'),
  },
  about: {
    content: html`<h2>Путешествие на край&nbsp;Земли</h2>
      <p>
        Это волшебное путешествие поможет вам познакомиться поближе с удивительным миром Антарктики. Наш круизный лайнер
        отвезет вас на край Земли, где вы сможете увидеть: ледяные айсберги, несколько видов пингвинов, китов, морских
        котиков и многое другое.
      </p>`,
    image: getPictures('about'),
    alt: 'Пингвины на снегу',
  },
  benefits: {
    id: 'benefits',
    heading: 'Преимущества',
    list: [
      {
        alias: 'liner',
        content: html`<h3>Небольшой круизный&nbsp;лайнер</h3>
          <p>
            Круизный лайнер, рассчитанный всего лишь на 300 гостей, поможет избежать шума и очередей и даст возможность
            насладиться видами и природой.
          </p>`,
      },
      {
        alias: 'ticks',
        content: html`<h3>Система все&nbsp;включено</h3>
          <p>
            Все наши круизы работают по системе "Все Включено". Великолепные блюда и безлимитный бар доступны для вас 24
            часа.
          </p>`,
      },
      {
        alias: 'ship',
        content: html`<h3>Экскурсионные туры&nbsp;на Zodiac</h3>
          <p>
            Экскурсионные туры к берегам Антарктиды совершаются на оборудованных лодках типа Zodiack c опытными
            экскурсоводами.
          </p>`,
      },
    ],
    background: getPictures('advantages'),
    backgroundColor: '#e3ecf6',
    alt: 'Арктика',
  },
  offers: {
    id: 'upcoming',
    heading: 'Ближайшие круизы',
    list: [
      {
        content: html`<h4>Маршрут</h4>
          <p>Аргентина &#x2010; Фолклендские острова &#x2010; Антарктида</p>
          <h4>Порт отправления</h4>
          <p>Ушуайя</p>
          <h4>Продолжительность</h4>
          <p>11 дней</p>
          <h4>Цена</h4>
          <p>от 11500 $</p>`,
        heading: 'Круиз “Астория“',
      },
      {
        content: html`<h4>Маршрут</h4>
          <p>Аргентина &#x2010; Фолклендские острова &#x2010; Антарктида &#x2010; Чили</p>
          <h4>Порт отправления</h4>
          <p>Буэнос-Айрес</p>
          <h4>Продолжительность</h4>
          <p>20 дней</p>
          <h4>Цена</h4>
          <p>от 14500 $</p>`,
        heading: 'Круиз “Элайн“',
      },
      {
        content: html`<h4>Маршрут</h4>
          <p>Аргентина &#x2010; Южная Георгия и Южные Сандвичевы Острова &#x2010; Антарктида</p>
          <h4>Порт отправления</h4>
          <p>Ушуайя</p>
          <h4>Продолжительность</h4>
          <p>15 дней</p>
          <h4>Цена</h4>
          <p>от 14500 $</p>`,
        heading: 'Круиз “Атлантис“',
      },
      {
        content: html`<h4>Маршрут</h4>
          <p>Чили &#x2010; Антарктида</p>
          <h4>Порт отправления</h4>
          <p>Пунта-Аренас</p>
          <h4>Продолжительность</h4>
          <p>13 дней</p>
          <h4>Цена</h4>
          <p>от 9700 $</p>`,
        heading: 'Круиз “Одиссей“',
      },
      {
        content: html`<h4>Маршрут</h4>
          <p>Аргентина &#x2010; Фолклендские острова &#x2010; Южная Георгия &#x2010; Антарктида</p>
          <h4>Порт отправления</h4>
          <p>Ушуайя</p>
          <h4>Продолжительность</h4>
          <p>21 дней</p>
          <h4>Цена</h4>
          <p>от 18600 $</p>`,
        heading: 'Круиз “Олимпия“',
      },
      {
        content: html`<h4>Маршрут</h4>
          <p>Аргентина &#x2010; Антарктида &#x2010; Чили</p>
          <h4>Порт отправления</h4>
          <p>Ушуайя</p>
          <h4>Продолжительность</h4>
          <p>14 дней</p>
          <h4>Цена</h4>
          <p>от 11700 $</p>`,
        heading: 'Круиз “Аврора“',
      },
      {
        content: html`<h4>Маршрут</h4>
          <p>Чили &#x2010; Южная Георгия &#x2010; Антарктида &#x2010; Аргентина</p>
          <h4>Порт отправления</h4>
          <p>Пунта-Аренас</p>
          <h4>Продолжительность</h4>
          <p>17 дней</p>
          <h4>Цена</h4>
          <p>от 12500 $</p>`,
        heading: 'Круиз “Леонор“',
      },
      {
        content: html`<h4>Маршрут</h4>
          <p>Аргентина &#x2010; Антарктида</p>
          <h4>Порт отправления</h4>
          <p>Ушуайя</p>
          <h4>Продолжительность</h4>
          <p>11 дней</p>
          <h4>Цена</h4>
          <p>от 12300 $</p>`,
        heading: 'Круиз “Минион - 1”',
      },
    ].map(({content, heading}, i) => ({
      content,
      heading,
      image: getPictures(`service-${i > 6 ? 2 : i + 1}`, {alt: `${heading}.`}, false, false),
      url: '#!',
    })),
    linkText: 'Забронировать',
  },
  feedback: {
    background: getPictures('form-section'),
    backgroundColor: '#e3ecf6',
    content: html`<h2>Раннее бронирование</h2>
      <p>Забронируйте тур за 3-6 месяцев&nbsp;до даты выезда и сэкономьте до 50%</p>`,
    form: {
      action: 'https://echo.htmlacademy.ru',
      description: 'Оставьте заявку и мы свяжемся с вами в ближайшее время',
      fields: [
        html`<input
            id="order-name"
            name="name"
            type="text"
            placeholder="Имя"
            pattern="^[A-Za-zА-Яа-яЁё\\- ]+$"
            required
          />
          <label for="order-name">Имя</label>`,
        html`<input
            id="order-phone"
            name="phone"
            type="tel"
            placeholder="Телефон"
            pattern="^\\+?[\\d ()-]+$"
            required
          />
          <label for="order-phone">Телефон</label>`,
        html`<input id="order-email" name="email" type="email" placeholder="Email" required />
          <label for="order-email">Email</label>`,
        html`<label>
          <input name="agree" type="checkbox" checked="" required />
          <span>Я согласен на обработку моих&nbsp;персональных&nbsp;данных</span>
        </label>`,
      ],
      method: 'post',
      submitText: 'Оставить заявку',
    },
  },
  location: {
    id: 'contacts',
    content: html`<h2>Контакты</h2>
      <p>
        <b>У вас ещё остались вопросы или сомнения? Приезжайте к нам в офис и мы вам все расскажем.</b>
      </p>
      <p>
        <img src="img/sprite.svg#icon-pin" width="18" height="22" alt="" aria-hidden="true" />
        г. Санкт Петербург, ул.&nbsp;Большая&nbsp;Конюшенная,&nbsp;19/8
      </p>
      <p>
        <img src="img/sprite.svg#icon-tel" width="18" height="18" alt="" aria-hidden="true" />
        <a href="tel:+78002000000">8-800-200-00-00</a>
      </p>`,
    headless: true,
    map: {
      id: 'contactsMap',
      image: getPictures('map', {alt: 'Адрес на карте.'}, false, false),
    },
  },
};
