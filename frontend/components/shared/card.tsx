// components/Card.tsx
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import styles from './card.module.css';


interface CardProps {
  title: string;
  children :ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
};

export default Card;