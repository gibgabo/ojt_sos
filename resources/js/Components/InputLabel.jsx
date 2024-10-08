export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-bold text-sm text-gray-700 dark:text-dark-300 ` + className}>
            {value ? value : children}
        </label>
    );
}
