import React from "react";
import { CertItem } from "../types";

const panelBoxShadow = '0 2px 4px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)'

const style: React.CSSProperties = {
  cursor: 'pointer',
  display: 'block',
  margin: '2rem',
  padding: '1rem',
  boxShadow: panelBoxShadow,
  borderRadius: '5px',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
}

const containerStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
}

const badgeStyle: React.CSSProperties = {
  maxWidth: '4rem',
  height: 'auto',
  marginRight: '1rem',
}


export const Cert: React.FC<CertItem> = ({ title, uri, badgeSrc }) => {
  const handleClick = () => {
    window.open(uri, '_blank')
  }

  return (  
    <div style={style} onClick={handleClick}>
      <div style={containerStyle}>
      <img style={badgeStyle} src={badgeSrc} />
      <h4 style={{ margin: '0' }}>{title}</h4>
      </div>
    </div>
  )
}
