import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Hero from '../assets/Heros/MageHeadshot1.png'


// MVP: Display all Achievements
// Stretch: Evolve into a userAchievements that check prerequisites, and only show achievements that are tied to the user or character.

export default function Achievements() {
    let { cats } = useParams()
    const [achievements, setAchievement] = useState([])

    useEffect(() => {
        const getAchievement = async () => {
            try {
                const response = await axios.get('http://localhost:3001/achievements')
                const allAchievements = response.data
                const sortedAchievements = allAchievements.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                const recentAchievements = sortedAchievements.slice(0, 8)
                setAchievement(recentAchievements)
            } catch (error) {
                console.error('Error fetching and sorting Achievements:', error)
            }
        }
        getAchievement()
    }, [])

    return (
            <div className="Achievements">
                <img src={Hero} alt="Hero Portrait" />
                <h2>Achievements</h2>
                <div className="achievements-grid">
                    {achievements &&
                        achievements.map((achievements) => (
                            <div key={achievements._id} className="achievement-card">
                                <Link to={`/achievements/${achievements._id}`} key={achievements._id} className="achievement-card">
                                    <div className="achievement-details">
                                        <h2 className="achievement-title">{achievements.achieveTitle}</h2>
                                        <h3 className="achievement-description">{achievements.achieveDescription}</h3>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
)

}