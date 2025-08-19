export interface ComponentBaseProps {
   className?: string | string[];
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
   children?: React.ReactNode;
}

export type SizeKeywords = 'xs' | 's' | 'm' | 'l' | 'xl';
