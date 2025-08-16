import type { ComponentBaseProps } from '@/types/base.types';

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
