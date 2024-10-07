import { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';
import invertIcons from './Invert_no_invert';
import day from '../../media/icons/day.png';
import night from '../../media/icons/night.png';
import './styles.css';
import switchSound from '../../media/audio/knopka-klik-chetkii-blizkii-suhoi-spokoinyii.mp3';



const SwitchTheme = () => {

  const [play] = useSound(switchSound);

  const [Dark, setDark] = useState('light');

  const btnRef = useRef(null);

  useEffect(() => {

    if (Dark === 'dark') {
      document.querySelector('html').classList.add('dark');
      btnRef.current.classList.add('ball-white')

    } else {
      document.querySelector('html').classList.remove('dark');
      btnRef.current.classList.remove('ball-white');
    }
  }, [Dark]);

  const switchDayNight = () => {
    play()
    setDark(function(currentValue) {
      if (currentValue == 'light') {
        invertIcons('dark')
        return 'dark'
      } else {
        invertIcons('light')
        return 'light'

      }
    });
  };

  return (
    <button className='SwitchTheme' onClick={switchDayNight}>
      <img className='icons-day dont-invert-icons' src={day} />
      <img className='icons-night dont-invert-icons' src={night} />
      <div ref={btnRef} className='ball'></div>
    </button>

  );
};

export default SwitchTheme;
