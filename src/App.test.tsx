import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import exp from 'constants';

test('button has correct initaial color', () => {
 render(<App/>)

 //find an element with role button and text of 'Change to blue'
 const colorButton= screen.getByRole('button',{name: 'Change to blue'})

 expect(colorButton).toHaveStyle({backgroundColor:'red'})
});


test('button turns blue when clicked',()=>{
    render(<App/>)
    const colorButton= screen.getByRole('button',{name: 'Change to blue'})
    fireEvent.click(colorButton)
    expect(colorButton).toHaveStyle({backgroundColor:'blue'})

})

test('initial conditions',()=>{
    render(<App/>)
    const colorButton =screen.getByRole('button',{name:'Change to blue'})
    expect(colorButton).toBeEnabled()

    const checkbox =screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()  
})

test('click on checkbox disables button',()=>{
    render (<App/>)
    const colorButton = screen.getByRole('button',{name:'Change to blue'})
    const checkbox =screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(colorButton).toBeDisabled()

})

test('unchecking checkbox enables button',()=>{
    render (<App/>)
    const colorButton = screen.getByRole('button',{name:'Change to blue'})
    const checkbox =screen.getByRole('checkbox',{name:'Disable button'})
    fireEvent.click(checkbox)
    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
    expect(colorButton).toBeEnabled()
})
/*** */

test('disabling button turns it to gray',()=>{
    render(<App/>)
    const colorButton = screen.getByRole('button',{name:'Change to blue'})
    const checkbox =screen.getByRole('checkbox',{name:'Disable button'})
    fireEvent.click(checkbox)
    expect(colorButton).toHaveStyle({backgroundColor:'gray'})
})

test('re-enabling button turns it to red',()=>{
    render(<App/>)
    const colorButton = screen.getByRole('button',{name:'Change to blue'})
    const checkbox =screen.getByRole('checkbox',{name:'Disable button'})
    fireEvent.click(checkbox)
    fireEvent.click(checkbox)
    expect(colorButton).toHaveStyle({backgroundColor:'red'})
})

test('enabling button turns it to blue',()=>{
    render (<App/>)
    const colorButton =screen.getByRole('button',{name:'Change to blue'})
    const checkbox =screen.getByRole('checkbox',{name:'Disable button'})

    fireEvent.click(colorButton)
    fireEvent.click(checkbox)
    expect(colorButton).toHaveStyle({backgroundColor:'gray'})
    fireEvent.click(checkbox)
    expect(colorButton).toHaveStyle({backgroundColor:'blue'})
})
