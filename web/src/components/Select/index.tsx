import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({label, name, options,...rest}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="99"id={name} {...rest}>
                <option value='99' disabled hidden key='selecione'>Selecione...</option>
                {options.map(option => {
                    return <option 
                        value={option.value} 
                        key={option.value}>{option.label}
                    </option>
                })}
            </select>
        </div>
    );
}

export default Select;