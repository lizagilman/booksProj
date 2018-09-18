import PropTypes from 'prop-types';

const bookDataDefaultProps = PropTypes.shape({
  id: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  publiush_date: PropTypes.string,
});

export const titlieze = (str) => {
  if (!str) return '';
  /* eslint-disable-next-line */
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  let stringArray = str.split(' ');
  /* eslint-disable-next-line */
  stringArray = stringArray.map(str => capitalize(str.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, '')),);

  return stringArray.join(' ');
};

export const validateField = (field, value) => {
  // const alphaNumericNonEmpty = /^[a-zA-Z0-9\s]+$/;
  // const alphabeticNonEmpry =  /^[a-zA-Z\s]+$/;
  const nonEmpty = /^(.+)$/;

  const validationRegexHash = {
    date: /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/,
    title: nonEmpty,
    author: nonEmpty,
    description: nonEmpty,
  };

  /* eslint-disable-next-line */
  return !!value.match(validationRegexHash[field]) ? true : false;
};

export const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit';

export const noImgUrl = 'http://doctor10.net/liza/heroloBooks/images/noimg.jpg';

const booksCovers = [
  { url: 'http://doctor10.net/liza/heroloBooks/images/1.jpg', selected: false },
  { url: 'http://doctor10.net/liza/heroloBooks/images/2.jpg', selected: false },
  { url: 'http://doctor10.net/liza/heroloBooks/images/3.jpg', selected: false },
  { url: 'http://doctor10.net/liza/heroloBooks/images/4.jpg', selected: false },
  { url: 'http://doctor10.net/liza/heroloBooks/images/5.jpg', selected: false },
  { url: 'http://doctor10.net/liza/heroloBooks/images/6.jpg', selected: false },
  { url: 'http://doctor10.net/liza/heroloBooks/images/7.jpg', selected: false },
  { url: 'http://doctor10.net/liza/heroloBooks/images/8.jpg', selected: false },
  { url: 'http://doctor10.net/liza/heroloBooks/images/9.jpg', selected: false },
  {
    url: 'http://doctor10.net/liza/heroloBooks/images/10.jpg',
    selected: false,
  },
  {
    url: 'http://doctor10.net/liza/heroloBooks/images/11.jpg',
    selected: false,
  },
  {
    url: 'http://doctor10.net/liza/heroloBooks/images/12.jpg',
    selected: false,
  },
  {
    url: 'http://doctor10.net/liza/heroloBooks/images/13.jpg',
    selected: false,
  },
  {
    url: 'http://doctor10.net/liza/heroloBooks/images/14.jpg',
    selected: false,
  },
  { url: 'http://doctor10.net/liza/heroloBooks/images/15.jpg', selected: false },
];

/* eslint-disable-next-line */
export const selectImg = () => {
  /* eslint-disable-next-line */
  const i = parseInt(localStorage.getItem("imgSelcetionIndex"));

  let selection = null;

  if (i >= booksCovers.length) return noImgUrl;

  while (!booksCovers[i].selected) {
    selection = booksCovers[i];
    booksCovers[i].selected = true;
    localStorage.setItem('imgSelcetionIndex', i + 1);
    return selection.url;
  }
};

export default bookDataDefaultProps;
