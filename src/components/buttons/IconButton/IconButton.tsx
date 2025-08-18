import { parseCSS } from '@/helpers/parse';
import type { IconButtonProps } from './IconButton.types';

export default function IconButton({ className, title, onClick, icon }: IconButtonProps) {
   if (!icon) {
      return null;
   }

   return (
      <button
         className={parseCSS(className, 'text-primary-900 hover:text-primary-700 hover:bg-primary-200 p-2 cursor-pointer rounded-sm')}
         onClick={onClick}
         title={title}
         aria-label={title}
      >
         {icon}
      </button>
   );
}
