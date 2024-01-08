import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import styles from "./Calculator.module.css"

const Calculator = () => {
  const [expression, setExpression] = useState(0);

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(expression);
        result === undefined ? setExpression("0") : setExpression(String(result));
      } catch (error) {
        setExpression('Syntax Error');
      }
    } else if (value === 'C') {
      setExpression(0);
    } else {
        (expression === 0 && expression.lenght === undefined) ? setExpression(value) : setExpression(prevExpression => prevExpression + value);
    }
  };

  return (
    <div className={styles.Calculator} >
      <Display value={expression} />
      <div className={styles.buttonsContainer}>
        <Button onClick={handleClick} value="C" nombre="clear" />
        <Button onClick={handleClick} value="/" nombre="divide" />
        <Button onClick={handleClick} value="*" nombre="multiply" />
        <Button onClick={handleClick} value="7" nombre="seven" />
        <Button onClick={handleClick} value="8" nombre="eight" />
        <Button onClick={handleClick} value="9" nombre="nine" />
        <Button onClick={handleClick} value="-" nombre="subtract"/>
        <Button onClick={handleClick} value="4" nombre="four"/>
        <Button onClick={handleClick} value="5" nombre="five"/>
        <Button onClick={handleClick} value="6" nombre="six"/>
        <Button onClick={handleClick} value="+" nombre="add" />
        <Button onClick={handleClick} value="1" nombre="one" />
        <Button onClick={handleClick} value="2" nombre="two" />
        <Button onClick={handleClick} value="3" nombre="three"/>
        <Button onClick={handleClick} value="="  nombre="equals" />
        <Button onClick={handleClick} value="0" nombre="zero" />
        <Button onClick={handleClick} value="." nombre="decimal"/>
      </div>
    </div>
  );
};

export default Calculator;
