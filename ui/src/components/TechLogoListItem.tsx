import React from 'react'
import { logos } from '../common/techLogos.ts'

interface TechLogoListItemProps {
  techList: string[]
}

interface TechLogoProps {
  logo: string
}

const listStyle: React.CSSProperties = {
  listStyleType: 'none',
  marginLeft: '0',
  padding: '5px',
  borderRadius: '1rem',
  backgroundColor: 'rgba(var(--bs-tertiary-bg-rgb), 0.15)',
}

const listItemStyle: React.CSSProperties = {
  margin: '5px',
  display: 'inline',
}

export const TechStack: React.FC<TechLogoListItemProps> = ({ techList }) => (
  <ul style={listStyle}>
    { techList.map((i: string) => <TechLogo key={i} logo={i} />) }
  </ul>
)

const TechLogo: React.FC<TechLogoProps> = ({ logo }) =>  {
  const image = logos[logo]
  if (!image) {
    return <></>
  }
  return (
    <li key={logo} style={listItemStyle}>
      <img
        src={image}
        alt={`${logo} logo`}
        style={{
          maxWidth: '1.5rem',
          height: 'auto',
        }}
      />
    </li>
  )
}

export const TechLogoList: React.FC<TechLogoListItemProps> = ({ techList }) => (
  <ul style={{ listStyleType: 'none', marginLeft: '0', paddingLeft: '0' }}>
    <TechLogoListItem techList={techList} />
  </ul>
)

const pluralsightSkillsPage = "https://app.pluralsight.com/profile/lewis-sneddon";
const techLogoItemStyle: React.CSSProperties = {
  backgroundColor: 'rgba(100, 100, 100, 0.1)',
  borderRadius: '5px',
  padding: '5px',
}

const TechLogoListItem: React.FC<TechLogoListItemProps> = ({ techList }) => {

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
