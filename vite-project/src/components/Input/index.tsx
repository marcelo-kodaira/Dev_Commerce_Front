import { useState, useEffect, useCallback, ForwardRefRenderFunction, forwardRef, useRef } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";
import { StyledInput } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    name: string,
    label?: string,
    error?: FieldError | null,
    icon?: IconType
}


type inputVariationOptions = {
    [key:string] : string
}

const InputVariation:inputVariationOptions = {
    default: 'rgb(128, 128, 128)',
    error: 'rgb(255, 0, 0)',
    focus: 'rgb(128, 0, 128)',
    filled: 'rgb(0, 128, 0)'
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement , InputProps> = ({name,error = null,icon: Icon,label,...rest},ref) =>{

    const [variation, setVariation] = useState('default')
    const [value, setValue] = useState('')

    useEffect(() =>{
        if(error){
            return setVariation('error')
        }
    },[error])

    const handleInputFocus = useCallback(() =>{
        if(!error){
            setVariation('focus')
        }
    },[error])

    const handleInputBlur = useCallback(() =>{
        if(value.length > 1 && !error){
            return setVariation('filled')
        }
    },[error,value])

    return (

        <div>
          {label && (
            <label style={{ color: 'gray.400' }} htmlFor={name}>
              {label}
            </label>
          )}
    
          <div style={{  position: 'relative' }}>
            {Icon && (
              <div >
                <Icon style={{ position: 'absolute', left: 5, top: '35%' }}/>
              </div>
            )}
            <StyledInput
                id={name}
                name={name}
                color={InputVariation[variation]}  
                onFocus={handleInputFocus} 
                onBlurCapture={handleInputBlur} 
                onChangeCapture={e => setValue(e.currentTarget.value)} 
                ref={ref} 
                {...rest}
            />
          </div>
            {error && (
              <div style={{ color: 'red' }}>
                {error.message}
              </div>
            )}
        </div>
    );
};

export const Input = forwardRef(InputBase)