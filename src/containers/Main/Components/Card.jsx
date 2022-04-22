import React, { memo } from 'react';
import ReactPropTypes from 'prop-types';
import { Card as CardUI } from '../../../components';
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled
} from './style';

function Card({ value, label, color }) {
  return (
    <CardUI color={color}>
      <CardContentStyled>
        <ValueStyled>{value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  );
};

export default memo(Card);