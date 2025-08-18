import type { DataViewProps } from "./DataView.types";

export default function DataView({ label, value }: DataViewProps): React.JSX.Element {
   return (
      <div className="flex gap-1 flex-col bg-primary-100 rounded-sm p-2 mb-2">
        {label && <span className="text-xs">{label}:</span>}
         <p>{value ?? '---'}</p>
      </div>
   );
}
