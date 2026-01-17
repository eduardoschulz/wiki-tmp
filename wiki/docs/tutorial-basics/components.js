// components.js
import React from 'react';

export const StatusBadge = ({ phase, message }) => (
  <div style={{ 
    padding: '1rem', 
    backgroundColor: phase === 'Running' ? '#dcfce7' : '#fee2e2', 
    borderLeft: '4px solid green',
    margin: '1rem 0' 
  }}>
    <strong>Status: {phase}</strong> — {message}
  </div>
);

export const Terminal = ({ command }) => (
  <div style={{ 
    backgroundColor: '#1e1e1e', 
    color: '#fff', 
    padding: '10px', 
    borderRadius: '5px',
    fontFamily: 'monospace'
  }}>
    <span style={{ color: '#4ade80' }}>$</span> {command}
  </div>
);
