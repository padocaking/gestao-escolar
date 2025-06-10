export default function CheckboxFilter({ label, options, selected, onChange }) {
    return (
        <div>
            <span>{label}</span>
            {options.map((option) => (
                <div key={option} style={{display: 'flex', gap: '5px'}}>
                    <input
                        type="checkbox"
                        onChange={() => onChange(option)}
                        checked={selected.includes(option)}
                        id={`${label}-${option}`}
                    />
                    <label htmlFor={`${label}-${option}`}>{option}</label>
                </div>
            ))}
        </div>
    );
}