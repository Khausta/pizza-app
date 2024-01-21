import { forwardRef } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames';
import { InputProps } from './Input.props';

//forwardRef принимает два параметра:
// 1) тот элемент на который мы реферимся
// 2) описание пропсов
//если не указать второй аргумент, то в App.tsx ts не подскажет при вписывание атрибутов value, placeholder и тд
const Input = forwardRef<HTMLInputElement, InputProps>( function Input({ className, isValid = true, ...props}, ref) {
	return (    
		
		<input {...props} ref={ref} className={classNames(styles['input'], className, styles['input'], {
			[styles['invalid']]: !isValid
			
		})}  /> 
		
	);

});


export default Input;