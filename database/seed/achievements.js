const db = require('../db')
const { Achievements } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const achievementsData = [

        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Cardio Crusader",
            achieveDescription: "Mastered the art of cardiovascular exercise, conquering long distances and pushing the limits of endurance. Your heart is a true crusader!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Muscle Master",
            achieveDescription: "Unleashed the power of strength training, sculpting muscles and achieving peak physical prowess. You're now a true master of the muscle realm!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Agility Ace",
            achieveDescription: "Navigated through agility challenges with finesse and grace, proving that you're the ace when it comes to swift and precise movements.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Endurance Elite",
            achieveDescription: "Reached elite status in endurance training, pushing through barriers and going the extra mile—literally. Your endurance knows no bounds!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Power Play Pro",
            achieveDescription: "Mastered the art of power workouts, dominating every session and showcasing incredible strength. You're the undisputed pro in power play!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Flexibility Fiend",
            achieveDescription: "Became a fiend for flexibility, bending and stretching beyond the ordinary. Your flexibility is now legendary!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Reps Royalty",
            achieveDescription: "Crowned as the royalty of repetitions, consistently hitting targets and building a kingdom of strength, one rep at a time.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Sprint Sultan",
            achieveDescription: "Ruled the realm of sprints with lightning speed and unmatched agility. You are now the true sprint sultan, leaving others in the dust.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Weightlifting Wizard",
            achieveDescription: "Conjured the magic of weightlifting, transforming ordinary exercises into feats of strength. You've become a true weightlifting wizard!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Yoga Yogi",
            achieveDescription: "Embarked on a journey of inner peace and physical mastery, earning the title of yoga yogi. Your mind and body are now in perfect harmony.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Fitness Falcon",
            achieveDescription: "Soared to new heights in fitness, embodying the grace and power of a fitness falcon. Your wingspan of wellness knows no limits.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Gym Gladiator",
            achieveDescription: "Conquered the arena of the gym, facing every challenge with strength and determination. You are now a true gym gladiator!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Health Hero",
            achieveDescription: "A true hero of health, making wise choices and inspiring others to follow the path of wellness. You're a beacon of health in the community!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Calorie Crusher",
            achieveDescription: "Crushed calorie goals with unmatched determination, burning away excess and emerging as the ultimate calorie crusher!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Stamina Star",
            achieveDescription: "Radiated stamina like a shining star, outlasting challenges and proving that your energy reserves are limitless.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Plank Prodigy",
            achieveDescription: "Mastered the art of planking, holding steady through the toughest of challenges. You're a prodigy in the world of core strength!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "CrossFit Champion",
            achieveDescription: "A champion in the diverse realms of CrossFit, mastering varied workouts and proving to be the ultimate CrossFit athlete.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "HIIT Highness",
            achieveDescription: "Ascended to the throne of High-Intensity Interval Training, ruling over intervals with unmatched intensity and precision.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Iron Grip Guru",
            achieveDescription: "Developed an iron grip that can hold its own against any challenge. You've become the guru of grip strength!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Speed Sprinter",
            achieveDescription: "Zoomed past the competition with lightning speed, earning the title of the speed sprinter. Your velocity is unmatched!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Wellness Warrior",
            achieveDescription: "Fought and conquered every battle on the path to wellness, emerging as a true warrior for health and well-being.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Treadmill Titan",
            achieveDescription: "Conquered the mighty treadmill, mastering speed and endurance. You're now a true titan of the treadmill!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Flex Friday Conqueror",
            achieveDescription: "Conquered Flex Friday with style and strength, showcasing your dedication to flexibility at the end of every week.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Dumbbell Dynamo",
            achieveDescription: "Became a dynamo with dumbbells, lifting and swinging with unmatched strength and precision. You've harnessed the power of the dumbbell!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Kettlebell Kingpin",
            achieveDescription: "Crowned as the kingpin of kettlebells, mastering the art of dynamic workouts and becoming a true kettlebell monarch.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Burpee Boss",
            achieveDescription: "Bossed the burpee, dominating this challenging exercise with finesse and stamina. You're the undisputed burpee boss!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Rowing Renegade",
            achieveDescription: "Became a renegade on the rowing machine, rowing with power and precision. You've conquered the waters of fitness!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Spin Class Samurai",
            achieveDescription: "Wielded the spin class like a true samurai, pedaling through challenges with focus and determination. You're a spin class warrior!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Zumba Zealot",
            achieveDescription: "Danced your way to fitness as a true zealot of Zumba, combining fun and exercise with unmatched enthusiasm.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Squat Squad Leader",
            achieveDescription: "Led the squad in mastering the art of squats, building strength and endurance for yourself and your fitness comrades.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Wellness Wizard",
            achieveDescription: "Conjured the magic of wellness, making healthy choices and inspiring others to follow the path of the wellness wizard.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Fitness Fanatic",
            achieveDescription: "Elevated your passion for fitness to fanatic levels, embracing every aspect of a healthy lifestyle with unwavering enthusiasm.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Beast Mode Maestro",
            achieveDescription: "Conducted the symphony of workouts in beast mode, pushing limits and achieving greatness as the maestro of intense exercise.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Vitality Victor",
            achieveDescription: "Emerged victorious in the pursuit of vitality, achieving a state of holistic health and radiating vitality in every aspect of life.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Jump Rope Jedi",
            achieveDescription: "Mastered the art of jump rope like a Jedi, combining speed and precision to become the ultimate jump rope warrior.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Spin Cycle Sorcerer",
            achieveDescription: "Conquered the spin cycle like a sorcerer, pedaling through challenges with magical endurance and control. You're the spin cycle wizard!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Hurdle Hero",
            achieveDescription: "Became a hero on the hurdles, leaping over challenges with grace and precision. You're the true hurdle hero of fitness!",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Fitness Phenom",
            achieveDescription: "Rose to fame as a phenomenon in fitness, setting new standards and inspiring others with your incredible dedication and achievements.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Cross-Training Connoisseur",
            achieveDescription: "Mastered the art of cross-training, seamlessly blending various exercises to achieve a well-rounded and high-performance fitness routine.",
            achievePrereq: "WIP",
        },
        {
            achieveIcon: "./src/assets/icons/AchievementIcon.svg",
            achieveTitle: "Health Huntress",
            achieveDescription: "Embarked on a quest for health and wellness, hunting down and conquering every obstacle on the path to a healthier and happier life.",
            achievePrereq: "WIP",
        }
    ]
    await Achievements.insertMany(achievementsData)
    console.log('Created Achievements')
}

const run = async () => {
    await main()
    db.close()
}

run()