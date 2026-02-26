import PropTypes from 'prop-types';
import defaultImage from "../default.jpg"; 
import css from "./Planes.module.css";

//! Бібліотека react-icons
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'; //! Приклад react-icons
import { AiOutlineFlag, AiOutlineInfoCircle, AiOutlineClockCircle, AiOutlineDollarCircle } from "react-icons/ai";
import { GiArmoredBoomerang, GiCeremonialMask, GiAirplaneDeparture, GiCommercialAirplane, GiCurlyMask } from "react-icons/gi";
import { CiBadgeDollar, CiGlobe, CiAirportSign1 } from "react-icons/ci";
import { TbClockHour4Filled } from "react-icons/tb";
import { FcTrademark } from "react-icons/fc";
//? nameBrief
//? nameFull - <FcTrademark /> - Повна назва
//? type - <GiArmoredBoomerang /> - бумеранг, <GiCommercialAirplane /> - літак- Тип
//? nickname - <GiCeremonialMask /> маска1, <GiCurlyMask /> маска2  - Прізвисько
//? country - <AiOutlineFlag /> - прапор, <CiGlobe /> - глобус - Країна виробник
//? year - <AiOutlineClockCircle /> - годинник - Рік випуску
//? duration - <TbClockHour4Filled /> - годинник - Тривалість виробництва(в роках)
//? price - <CiBadgeDollar/> - $, <AiOutlineDollarCircle /> - $ - Ціна
//? description - <AiOutlineInfoCircle /> - info - Опис
//? <GiAirplaneDeparture /> - Рекламна модель
//? <CiAirportSign1 /> - Реальна модель

import { GiAbstract021 } from "react-icons/gi";

//? import { iconSize } from '@/constants/iconSize.js';

//? import { iconColor } from '@/constants/iconColor.js';
//! Реекспорт з папки constants
import {iconSize, iconColor} from '@/constants';

import {getManufacturingYears} from '@/utils/'; //! Реекспорт з папки utils

console.log(iconSize);
console.log(iconColor);

export default function Planes({
  urlMain = defaultImage, 
  urlPromotional,
  urlActual,
  nameBrief,
  nameFull,
  nickname = "не відомо",
  year,
  country,
  type,
  price,
  description,
  start,
  end
})
{
  function printlActualimages(urlActual) {
    urlActual.map
  }
  const different = getManufacturingYears(start, end);

  console.log("different", different); 
  return (
    <>
    
      <h3 className='itemTitle'
      >
        <GiAbstract021 />
        {nameBrief}
      </h3>
      <img src={urlMain} alt={nameBrief} />
      <p className={css.textField}>Повна назва: <span className={css.textFieldValue}>{nameFull}</span></p>
      <p className={css.textField}><GiCommercialAirplane className={css.icon} size={iconSize.xs} /> Тип: <span className={css.textFieldValue}>{type}</span></p>
      <p className={css.textField}>Прізвисько: <span className={css.textFieldValue}>{nickname}</span></p>
      <p className={css.textField}>Країна виробник: <span className={css.textFieldValue}>{country}</span></p>
      <p className={css.textField}>Рік випуску: <span className={css.textFieldValue}>{year}</span></p>
      <p className={css.textField}><CiBadgeDollar className={css.icon} size={iconSize.xlg}
/> Ціна: <span className={css.textFieldValue}>{price}</span></p>
      <p className={css.textField}>Опис: <span className={css.textFieldValue}>{description}</span></p>
      <h4 className={css.imageTitles}>Рекламна модель:</h4>
      <img src={urlPromotional} alt={nameBrief} />
      <h4 className={css.imageTitles}>Реальна модель:</h4>
      <div
        className={css.imageContainer}
      >
        {urlActual.map(item =>
          <img
            // key={item} //! поки що не унікальний
            src={item}
            alt={nameBrief}
            className={css.actualImage}
          />
        )}
      </div>
      <button
      className={css.button}
        type="button"
      >
        Додати до кошику
      </button>
    </>
  );
};

//! Контроль типу змінних - propTypes
Planes.propTypes = {
  urlMain: PropTypes.string.isRequired,
  urlPromotional: PropTypes.string.isRequired,
  urlActual: PropTypes.string.isRequired,
  nameBrief: PropTypes.string.isRequired,
  nameFull: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
