import { FocusEvent, InputHTMLAttributes, LegacyRef, forwardRef, useState } from 'react'
import { BoxContainer } from './styles'
import { FieldError } from 'react-hook-form'

type PropsInputText = InputHTMLAttributes<HTMLInputElement> & {
    optional?: boolean
    error?: FieldError
}

export const InputText = forwardRef(function InputText(
    { optional, error, onFocus, onBlur, ...rest }: PropsInputText,
    ref: LegacyRef<HTMLInputElement>,
) {
    const [isFocused, setIsFocused] = useState(false)

    const nameInputToGrid = rest.name || 'default'

    function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
        setIsFocused(true)
        onFocus?.(event)
    }

    function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
        setIsFocused(false)
        onBlur?.(event)
    }
    return (
        <BoxContainer
            gridcomponent={nameInputToGrid}
            data-state={isFocused ? 'focused' : 'notFocused'}
        >
            <div>
                <input ref={ref} onFocus={handleFocus} onBlur={handleBlur} type="text" {...rest} />
                {optional ? <span>Opcional</span> : null}
            </div>
            {error?.message ? <label role="alert">{error.message}</label> : null}
        </BoxContainer>
    )
})
