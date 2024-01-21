import { FC } from 'react';
import './Button.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

//пример с равносильной записью
export const ButtonAlt: FC<ButtonProps> = ({ className, children, ...props}) => {
    return (
        <button className={cn('button accent', className)} {...props}>{children}</button>
    );
}

function Button({ children, className, ...props}: ButtonProps) {
	return (
		<button className={cn('button accent', className)} {...props}>{children}</button>
	);
}
  
export default Button;