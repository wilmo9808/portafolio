import React from 'react'
import { Skill } from '@/types'
import styles from './SkillBadge.module.css'

interface SkillBadgeProps {
    skill: Skill
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
    return (
        <div className={styles.badge}>
            <div className={styles.header}>
                <span className={styles.name}>{skill.name}</span>
                <span className={styles.percentage}>{skill.level}%</span>
            </div>
            <div className={styles.levelBar}>
                <div
                    className={styles.levelFill}
                    style={{ width: `${skill.level}%` }}
                />
            </div>
        </div>
    )
}

export default SkillBadge