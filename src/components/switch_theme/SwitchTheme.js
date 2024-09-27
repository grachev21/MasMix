import { useState, useEffect, useRef } from 'react';
import day from '../../media/icons/day.png';
import night from '../../media/icons/night.png';
import './styles.css';



const SwitchTheme = () => {

  const [Dark, setDark] = useState('light');

  const btnRef = useRef(null);

  useEffect(() => {

    if (Dark === 'dark') {
      document.querySelector('html').classList.add('dark');
      btnRef.current.setAttribute('style', 'background: black; left: 51px; transition: .3s;');

    } else {
      document.querySelector('html').classList.remove('dark');
      btnRef.current.removeAttribute('style');
    }
  }, [Dark]);

  const switchDayNight = () => {
    setDark(function(currentValue) {
      return currentValue == 'light' ? 'dark' : 'light';
    });
  };

  return (
    <button className='SwitchTheme' onClick={switchDayNight}>
      <img className='icons-day' src={day} />
      <img className='icons-night' src={night} />
      <div ref={btnRef} className='ball'></div>
    </button>

  );
};

export default SwitchTheme;
