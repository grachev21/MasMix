const invertIcons = (props) => {

  const icons = document.querySelectorAll('img');

  for (let index = 0; index < icons.length; index++) {
    if (props === 'dark') {
      if (icons[index].classList[1] === 'invert-icons') {
        icons[index].setAttribute('style', 'filter: invert(0%);')
      }
      if (icons[index].classList[1] === 'dont-invert-icons') {
        icons[index].setAttribute('style', 'filter: invert(100%);')
      }
    } else {
      icons[index].removeAttribute('style')
    }
  }
}



export default invertIcons;
