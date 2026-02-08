import { useMemo } from 'react';

// Deps
import icons from '~/assets';
import './Icon.scss';

const Icon = ({ type, color = 'currentColor', wrapper = true, text, onClick, size }) => {
   const ImageComponent = useMemo(() => {
      const ImageSVG = icons[type];

      return ImageSVG ? (
         <ImageSVG
            className={`icon-${type}`}
            height={size}
            width={size}
            color={color}
            onClick={onClick}
         />
      ) : null;
   }, [size, color]);

   return wrapper ? (
      <div className={`Icon`} onClick={onClick}>
         {ImageComponent}
         {text && <span className="text">{text}</span>}
      </div>
   ) : (
      ImageComponent
   );
};

export default Icon;
