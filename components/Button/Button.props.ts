import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  //DetailedHTMLProps<E<T>, T>
  children: ReactNode;
  appearance: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none';
}
