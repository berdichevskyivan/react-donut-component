import React, { CSSProperties, useEffect } from 'react';
import { DonutProps } from '../../types';

type children = string | number;

type Props = DonutProps &
  Partial<{
    children: children;
    symbol: string;
    styleContainer: CSSProperties;
    styleSymbol: CSSProperties;
    presentValue: (value: number) => any;
  }>;

const DonutValue = ({
  children = 0,
  style,
  styleSymbol,
  styleContainer,
  presentValue,
  symbol,
  className,
}: Props) => {
  useEffect(() => {
    if (presentValue) {
      presentValue(children);
    }
  }, [presentValue, children]);
  return (
    <div style={styleContainer} className='Donut__value-container'>
      <span style={style} className={`Donut__value ${className}`}>
        {children}
      </span>
      <span data-testid='symbol' style={styleSymbol} className='Donut__symbol'>
        {symbol || '%'}
      </span>
    </div>
  );
};

export default DonutValue;
