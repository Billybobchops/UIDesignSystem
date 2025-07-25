import HelperText from '@components/form/HelperText';
import Label from '@components/form/Label';
import { DatePicker } from '@mui/x-date-pickers';
import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import { useId } from 'react';
import classes from './DatePicker.module.scss';
import DateProvider from './DateProvider';

interface DatePickerInputProps {
    helperText?: string;
    label: string;
    required: boolean;
    spacing?: Spacing | Spacing[];
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({ label, helperText = '', required, spacing }) => {
    const inputID = useId();
    const helperID = useId();

    return (
        <DateProvider>
            <div className={clsx(classes.inputContainer, spacing)}>
                <Label inline={false} inputID={inputID} label={label} required={required} />
                <DatePicker
                    slotProps={{ textField: { fullWidth: true, placeholder: '' } }}
                    sx={{
                        '& .MuiInputBase-root': {
                            border: 'var(--invoicecloud-input-border)',
                            margin: 'var(--invoicecloud-date-picker-margin)',
                            width: 'var(--invoicecloud-date-picker-width)',
                        },
                        '& .MuiInputBase-root:hover': {
                            border: 'var(--invoicecloud-date-picker-border-hover)',
                        },
                        '& .MuiOutlinedInput-input:focus-visible': {
                            border: 'var(--invoicecloud-date-picker-focus-border)',
                        },
                        '& .MuiOutlinedInput-input': {
                            padding: 'var(--invoicecloud-date-picker-padding)',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                    }}
                />
                <HelperText helperID={helperID} helperText={helperText} />
            </div>
        </DateProvider>
    );
};

export default DatePickerInput;
