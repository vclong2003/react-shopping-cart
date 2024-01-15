import React from 'react';
import { useSelector } from 'react-redux';
import CartList from './CartList/CartList';
import Summary from './Summary/Summary';
import * as S from './Checkout.styled'; // Import styled components của Checkout
import { RootState } from '../../store';

const Checkout: React.FC = () => {
  // Lấy thông tin giỏ hàng và tổng cộng từ Redux store
  const { cart } = useSelector((state: RootState) => state.cart);

  // Tính tổng giá trị các sản phẩm trong giỏ hàng
  const subtotal = cart.reduce((acc, cartItem) => acc + cartItem.product.price * cartItem.quantity, 0);

  // Phí vận chuyển mặc định
  const shippingCost = 10;

  // Tổng cộng
  const total = subtotal + shippingCost;

  return (
    <S.Checkout>
      <S.CheckoutContainer>
      <S.CheckoutTitle>My shopping cart</S.CheckoutTitle>
      <S.CheckoutContent>
        {/* Hiển thị danh sách sản phẩm trong giỏ hàng */}
        <CartList />

        {/* Hiển thị tổng cộng và nút thanh toán */}
        <Summary subtotal={subtotal} shippingCost={shippingCost} total={total} />
      </S.CheckoutContent>
      </S.CheckoutContainer>
    </S.Checkout>
  );
};

export default Checkout;
