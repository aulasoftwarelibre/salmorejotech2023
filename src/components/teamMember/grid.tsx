import { TeamMemberCard, TeamMemberProps } from ".";
import { AlphabeticalSort } from "../../lib/alphabeticalSort";
import styles from './teamMembers.module.css';



interface TeamMemberGridProps {
  teamMembers: TeamMemberProps[]
}

const TeamMembersGrid = ({teamMembers}: TeamMemberGridProps) => {

  const InfraTeamMembers = teamMembers.filter(member => member.rol === 'INFRASTRUCTURE').sort((a, b) => AlphabeticalSort(a.name, b.name))
  const ManagementTeamMembers = teamMembers.filter(member => member.rol === 'MANAGEMENT').sort((a, b) => AlphabeticalSort(a.name, b.name))
  const MarketingTeamMembers = teamMembers.filter(member => member.rol === 'MARKETING').sort((a, b) => AlphabeticalSort(a.name, b.name))

  return (
    <div className={styles.container}>
      <h1 className={styles.rolTitle}>Gestión 📈</h1>
      <div className={styles.grid}>
      {ManagementTeamMembers.map(teamMember => {
        return (
          <TeamMemberCard 
            key={`teamMember - ${teamMember.name}`} 
            name={teamMember.name}
            rol={teamMember.rol}
            bio={teamMember.bio}
            urlPhoto={teamMember.urlPhoto}
            contacts={teamMember.contacts}
          />
        )
      })}
      </div>

      <h1 className={styles.rolTitle}>Infraestructura 🏗️</h1>
      <div className={styles.grid}>
      {InfraTeamMembers.map(teamMember => {
        return (
          <TeamMemberCard 
            key={`teamMember - ${teamMember.name}`} 
            name={teamMember.name}
            rol={teamMember.rol}
            bio={teamMember.bio}
            urlPhoto={teamMember.urlPhoto}
            contacts={teamMember.contacts}
          />
        )
      })}
      </div>

      <h1 className={styles.rolTitle}>Marketing 📣</h1>
      <div className={styles.grid}>

      {MarketingTeamMembers.map(teamMember => {
        return (
          <TeamMemberCard 
            key={`teamMember - ${teamMember.name}`} 
            name={teamMember.name}
            rol={teamMember.rol}
            bio={teamMember.bio}
            urlPhoto={teamMember.urlPhoto}
            contacts={teamMember.contacts}
          />
        )
      })}
      </div>
    </div>
  )
}

export default TeamMembersGrid;