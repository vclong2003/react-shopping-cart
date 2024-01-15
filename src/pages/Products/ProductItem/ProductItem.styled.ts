import styled from "styled-components";

const ProductItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: var(--s-5);
  gap: var(--s-4);
  box-shadow: var(--shadow-md);
  border-radius: var(--br-md);
  background-color: var(--white);
`;

const ImageContainer = styled.div`
  flex: 4;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--br-md);
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 8;
`;

const Name = styled.div`
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
`;

const Description = styled.div`
  font-size: var(--fs-sm);
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: var(--gray);
  overflow: hidden;
`;

const Splitter = styled.div`
  flex: 1;
`;

const MoreDetails = styled.div`
  display: flex;
  flex-direction: row;
`;

const Price = styled.div`
  font-weight: var(--fw-bold);
  font-size: var(--fs-xl);
`;

const MoreDetailsClickable = styled.div`
  cursor: pointer;
  color: var(--blue);
`;

const S = {
  ProductItem,
  ImageContainer,
  Image,
  Details,
  Name,
  Description,
  MoreDetails,
  Price,
  Splitter,
  MoreDetailsClickable,
};

export default S;
