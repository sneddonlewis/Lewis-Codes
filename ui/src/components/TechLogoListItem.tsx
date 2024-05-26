import React from 'react'
import { logos } from '../common/techLogos.ts'

interface TechLogoListItemProps {
  techList: string[]
}

export const TechLogoList: React.FC<TechLogoListItemProps> = ({ techList }) => {
  return (
    <ul style={{ listStyleType: 'none', marginLeft: '0', paddingLeft: '0' }}>
      <TechLogoListItem techList={techList} />
    </ul>
  )
}

const TechLogoListItem: React.FC<TechLogoListItemProps> = ({ techList }) => {
  const pluralsightSkillsPage = "https://app.pluralsight.com/profile/lewis-sneddon";
  const techLogoItemStyle: React.CSSProperties = {
    backgroundColor: 'rgba(100, 100, 100, 0.1)',
    borderRadius: '5px',
    padding: '5px',
  }

  return techList.map((i: string) => {
    const source = logos[i]
    if (!source) {
      return <></>
    }
    return (
      <li key={i} style={{ margin: "5px", display: 'inline' }}>
        <a href={pluralsightSkillsPage}> 
          <img
            src={source}
            alt={`${i} logo`}
            style={techLogoItemStyle}
          />
        </a>
      </li>
    )
  })
}
