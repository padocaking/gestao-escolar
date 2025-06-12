import styled from 'styled-components';

const BoletoCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fefefe;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 18px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #444;
  font-size: 15px;
`;

const Barcode = styled.div`
  margin-top: 10px;
  height: 40px;
  background-image: repeating-linear-gradient(
    to right,
    #000,
    #000 2px,
    transparent 2px,
    transparent 4px
  );
`;

const PayButton = styled.button`
  margin-top: 10px;
  background-color: #334aa4;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #2b3d8f;
  }
`;

export default function BoletoCard() {
  return (
    <BoletoCard>
      <Header>
        <span>Mensalidade</span>
        <span>R$ 900,00</span>
      </Header>
      <InfoRow>
        <span>Aluno:</span>
        <span>João da Silva</span>
      </InfoRow>
      <InfoRow>
        <span>Vencimento:</span>
        <span>10/06/2025</span>
      </InfoRow>
      <InfoRow>
        <span>Status:</span>
        <span>Em aberto</span>
      </InfoRow>
      <Barcode />
      <PayButton>Pagar agora</PayButton>
    </BoletoCard>
  );
}