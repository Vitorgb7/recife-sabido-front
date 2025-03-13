'use client';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

type CategoryType = 'saude' | 'transporte' | 'educacao';

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  background-color: #f5f6fa;
`;

const ChartWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`;

const PercentageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  font-family: Arial, sans-serif;
`;

const ChartTitle = styled.h3`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const categories = {
  saude: { value: 42, color: '#FF4D4F' },
  transporte: { value: 79, color: '#52C41A' },
  educacao: { value: 52, color: '#FAAD14' },
};

const Dashboard = () => {
  return (
    <DashboardContainer>
      {Object.entries(categories).map(([key, { value, color }]) => (
        <div key={key}>
          <ChartTitle>{key.charAt(0).toUpperCase() + key.slice(1)}</ChartTitle>
          <ChartWrapper>
            <PercentageText>{value}%</PercentageText>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[{ value }, { value: 100 - value }]}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={60}
                  startAngle={90}
                  endAngle={-270}
                  fill={color}
                  stroke="none"
                >
                  <Cell fill={color} />
                  <Cell fill="#EAECEF" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </div>
      ))}
    </DashboardContainer>
  );
};

export default Dashboard;