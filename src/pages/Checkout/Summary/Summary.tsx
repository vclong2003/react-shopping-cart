import React from 'react';
import * as S from './Summary.styled';

interface ISummaryProps {
  subtotal: number;
  shippingCost: number;
  total: number;
}

const Summary: React.FC<ISummaryProps> = ({ subtotal, shippingCost, total }) => {
  return (
    <S.SummaryContainer>
      <S.SummaryTitle>Tổng cộng</S.SummaryTitle>
      <S.SummaryItem>
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </S.SummaryItem>
      <S.SummaryItem>
        <span>Phí vận chuyển:</span>
        <span>${shippingCost}</span>
      </S.SummaryItem>
      <S.SummaryItem>
        <S.TotalLabel>Tổng cộng:</S.TotalLabel>
        <S.TotalAmount>${total}</S.TotalAmount>
      </S.SummaryItem>
      <S.CheckoutButton>Thanh toán</S.CheckoutButton>
    </S.SummaryContainer>
  );
};

export default Summary;
