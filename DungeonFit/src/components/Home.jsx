import CharacterSummary from "./characterPage/CharacterSummary";

// FEEDS
import AchievementFeed from "../feeds/AchievementFeed";
import GoalsFeed from "../feeds/GoalsFeed";
import NewsFeed from "../feeds/NewsFeed";

const Home = () => {
  return (
    <div>
      <CharacterSummary />
      <NewsFeed />
      {/* MVP: Show User Achievements Completed
        Stretch: Show friends Achieveents Completed */}
      {/* <AchievementFeed /> */}
      {/* MVP: Show User Quests
        SUPER Stretch: Close to complete Achievement */}
      {/* <GoalsFeed /> */}
    </div>
  );
};

export default Home;
