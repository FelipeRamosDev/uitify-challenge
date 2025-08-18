import { parseCSS } from '@/helpers/parse';
import styles from './SlideOver.module.css';
import CloseIcon from '@/assets/icons/CloseIcon';

// types
import type { SlideOverProps } from './SlideOver.types';

export default function SlideOver({
   isOpen,
   onClose,
   children
}: SlideOverProps): React.JSX.Element {
   if (!isOpen) return <></>;

   const handleClose = (ev: React.MouseEvent<HTMLDivElement>) => {
      if (ev.target === ev.currentTarget) {
         onClose();
      }
   };

   return (
      <div
         className={parseCSS(styles.SlideOverBackdrop, 'bg-primary-900/30')}
         onClick={handleClose}
      >
         <div className={parseCSS(styles.SlideOverContent, 'bg-primary-50 shadow-2xl')}>
            <div className="flex items-center justify-end">
               <button
                  className={parseCSS(styles.SlideOverCloseButton, 'text-primary-900 hover:text-primary-700 hover:bg-primary-100 p-2 cursor-pointer')}
                  onClick={onClose}
                  aria-label="Close Slide Over"
               >
                  <CloseIcon />
               </button>
            </div>

            <div className="px-5">
               {children}
            </div>
         </div>
      </div>
   );
}
