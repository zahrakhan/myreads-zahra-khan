import React from 'react'

export default function BookShelfChanger({selectedValue, defaultValue, options, onChange}) {
    return (
        <div className="book-shelf-changer">
            <select
                value={selectedValue? selectedValue: defaultValue}
                onChange={event => onChange(event.target.value)}>
                <option value="none" disabled>Move to...</option>
                {Object
                    .keys(options)
                    .map(option => (
                        <option key={option} value={option}>
                            {options[option]}
                        </option>
                    ))}
            </select>
        </div>
    );
}