import type { ComponentBaseProps, SizeKeywords } from '@/types/base.types';

export function parseCSS(classes?: ComponentBaseProps['className'], merge?: ComponentBaseProps['className']): string {
   let result: string[] = [];

   if (typeof classes === 'string') {
      result = [...result, ...classes.split(' ')];
   }

   if (Array.isArray(classes)) {
      result = [...result, ...classes];
   }

   if (typeof merge === 'string') {
      result = [...result, ...merge.split(' ')];
   }

   if (Array.isArray(merge)) {
      result = [...result, ...merge];
   }

   return result.filter(item => item).join(' ');
}

export function parsePadding(size: SizeKeywords): string {
   switch (size) {
      case 'xs':
         return 'p-1';
      case 's':
         return 'p-2';
      case 'm':
         return 'p-3';
      case 'l':
         return 'p-4';
      case 'xl':
         return 'p-5';
      default:
         return '';
   }

}
