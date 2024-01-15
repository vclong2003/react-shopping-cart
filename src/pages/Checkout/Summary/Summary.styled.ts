import styled from 'styled-components';

export const SummaryContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
`;

export const SummaryTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TotalLabel = styled.span`
  font-weight: bold;
`;

export const TotalAmount = styled.span`
  color: #e74c3c;
`;

export const CheckoutButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #2980b9;
  }
`;
