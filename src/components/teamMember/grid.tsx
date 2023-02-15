import { TeamMemberCard, TeamMemberProps } from ".";
import { AlphabeticalSort } from "../../lib/alphabeticalSort";
import styles from './teamMembers.module.css';

interface TeamMemberGridProps {
  teamMembers: TeamMemberProps[]
}

const TeamMembersGrid = ({teamMembers}: TeamMemberGridProps) => {

  const orderedTeamMembers = teamMembers.sort((a, b) => AlphabeticalSort(a.name, b.name))

  return (
    <div className={styles.container}>
      {orderedTeamMembers.map(teamMember => {
        return (
          <TeamMemberCard 
            key={`teamMember - ${teamMember.name}`} 
            name={teamMember.name}
            bio={teamMember.bio}
            urlPhoto={teamMember.urlPhoto}
            contacts={teamMember.contacts}
          />
        )
      })}
    </div>
  )
}

export default TeamMembersGrid;