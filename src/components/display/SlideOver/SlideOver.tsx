import { parseCSS } from '@/helpers/parse';
import styles from './SlideOver.module.css';
import CloseIcon from '@/assets/icons/CloseIcon';

// types
import type { SlideOverProps } from './SlideOver.types';
import { IconButton } from '@/components/buttons';

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
               <IconButton title="Close" icon={<CloseIcon />} onClick={onClose} />
            </div>

            <div className="px-5">
               {children}
            </div>
         </div>
      </div>
   );
}
