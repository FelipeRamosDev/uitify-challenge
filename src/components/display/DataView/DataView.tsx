import { useState } from 'react';
import { IconButton } from '@/components/buttons';
import EditIcon from '@/assets/icons/EditIcon';
import inputs from '@/components/inputs';
import CancelIcon from '@/assets/icons/CancelIcon';
import ConfirmIcon from '@/assets/icons/ConfirmIcon';

// types
import type { DataViewProps } from './DataView.types';
import type { LeadData } from '@/types/data.types';

export default function DataView({
   label,
   value,
   edit,
   fieldName = '',
   validations = [],
   editInput = 'TextInput' as keyof typeof inputs,
   selectOptions = [],
   handleEdit = () => {}
}: DataViewProps): React.JSX.Element {
   const [editMode, setEditMode] = useState<boolean>(false);
   const [inputValue, setInputValue] = useState<string>(String(value ?? ''));
   const [errors, setErrors] = useState<string[]>([]);
   const Input = inputs[editInput as keyof typeof inputs] || inputs.TextInput;

   const editAction = () => {
      const errorsList = validations.flatMap((validation) =>
         validation.validator(inputValue as LeadData[keyof LeadData])
            ? []
            : [validation.errorMessage]
      );

      setErrors(errorsList);
      if (errorsList.length) {
         return false;
      }

      handleEdit(Number(edit?.id), fieldName, String(inputValue));
      return true;
   }

   return (
      <div className="flex gap-1 bg-primary-100 rounded-sm p-2 mb-2">
         {!editMode && (
            <div>
               {label && <span className="text-xs">{label}:</span>}
               <p>{value ?? '---'}</p>
            </div>
         )}

         {editMode && (
            <Input
               title={label}
               label={label}
               value={inputValue}
               options={selectOptions}
               className="flex-1"
               errors={errors}
               onChange={(e) => setInputValue(e.target.value)}
            />
         )}

         {edit && !editMode && (
            <IconButton
               className="ml-auto"
               title="Edit"
               icon={<EditIcon />}
               onClick={() => setEditMode(true)}
            />
         )}

         {edit && editMode && (<>
            <IconButton
               className="ml-auto"
               title="Cancel Button"
               icon={<CancelIcon className="fill-red-800" />}
               onClick={() => {
                  setInputValue(String(value));
                  setEditMode(false);
               }}
            />
            <IconButton
               title="Save Button"
               icon={<ConfirmIcon className="fill-accent-700" />}
               onClick={() => {
                  if (editAction()) {
                     setEditMode(false);
                  }
               }}
            />
         </>
         )}
      </div>
   );
}
