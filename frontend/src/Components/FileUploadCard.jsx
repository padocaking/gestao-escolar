import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 24px;
  margin: 20px auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    font-size: 65px;
  }

  &:hover {
    box-shadow: 0 6px 18px rgba(0,0,0,0.15);
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 16px;
  color: #333;
`;

const HiddenInput = styled.input`
  display: none;
`;

const FileList = styled.ul`
  margin-top: 12px;
  padding: 0;
  list-style: none;
`;

const FileItem = styled.li`
  font-size: 0.9rem;
  color: #666;
  text-align: left;
`;

export default function FileUploadCard() {
  const [arquivos, setArquivos] = useState([]);
  const fileInputRef = useRef(null);

  const handleCardClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const novosArquivos = Array.from(e.target.files);

    // Evita arquivos duplicados (baseado no nome)
    const arquivosUnicos = [
      ...arquivos,
      ...novosArquivos.filter(
        (novo) => !arquivos.some((existente) => existente.name === novo.name)
      ),
    ];

    setArquivos(arquivosUnicos);

    // Limpa o input para permitir seleção do mesmo arquivo novamente, se necessário
    e.target.value = '';
  };

  return (
    <>
      <Card onClick={handleCardClick}>
        <Title>ANEXAR ARQUIVOS 🔗</Title>
        <span>📝</span>
        {arquivos.length > 0 ? (
          <FileList>
            {arquivos.map((file, index) => (
              <FileItem key={index}>📎 {file.name}</FileItem>
            ))}
          </FileList>
        ) : (
          <p>Nenhum arquivo selecionado</p>
        )}
      </Card>
      <HiddenInput
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </>
  );
}