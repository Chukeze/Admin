import { CSSProperties, memo } from "react"
import './InputField.scss'

type InputFieldProps = {
    label?: string
    type: string
    name: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    min?: number
    max?: number
    minLength?: number
    maxLength?: number
    readOnly?: boolean
    id?: string
    className?: string
    style?: CSSProperties
    message?:string | null
    valid?:boolean
}

const InputField: React.FC<InputFieldProps> = memo(
  ({
    label,
    type,
    name,
    value,
    onChange,
    placeholder,
    min,
    max,
    minLength,
    maxLength,
    readOnly,
    style,
    className,
    id,
    valid,
    message,
  }) => (
    <div className="grid grid-cols-2 gap-1">
      {label && (
        <label htmlFor={id} aria-label={label}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        readOnly={readOnly}
        className={`${className ? className : ''} ${message ? 'invalid' : 'valid'}`}
        style={style}
      />
      {message && (
        <span className={!valid ? 'invalid-message' : ''}>{message}</span>
      )}
    </div>
  )
)

  InputField.displayName = 'InputField';

  export default InputField;