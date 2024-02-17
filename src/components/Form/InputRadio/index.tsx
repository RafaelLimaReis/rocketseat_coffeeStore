import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'
import { Container } from './styles'

type TypeInputRadioProps = InputHTMLAttributes<HTMLInputElement> & {
    isSelected: boolean
}

export const InputRadio = forwardRef(function InputRadio(
    { isSelected, children, ...rest }: TypeInputRadioProps,
    ref: LegacyRef<HTMLInputElement>,
) {
    return (
        <Container data-state={isSelected}>
            <input type="radio" ref={ref} {...rest} />
            {children}
        </Container>
    )
})
