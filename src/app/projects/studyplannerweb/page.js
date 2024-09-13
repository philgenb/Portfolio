import ProjectDetailPage from "@/pages/ProjectDetailPage";
import TechnologyCard from "@/components/TechnologyCard";

export default function StudyplannerWeb() {
    return (
        <ProjectDetailPage
            title={`Study\nplanner`}
            idea="Studyplanner Web is a comprehensive platform designed to help students efficiently manage their study routines, especially during crucial exam phases. It focuses on planning exam schedules, tracking progress, and maintaining an organized module registry."
            userexperience="prioritizes an intuitive user experience. It offers an easy-to-navigate interface for students to effortlessly manage their study plans. The user-centric design ensures accessibility for all."
            technology="is crafted using modern technologies, primarily React and Firebase. This combination ensures real-time synchronization of study plans and provides a responsive, cross-platform experience for students, enabling them to access their schedules anywhere, anytime."
            imageSubtitle="Elevating Study Efficiency: A Glimpse into the World of React and Firebase."
            technologies={[<TechnologyCard imgPath="/html_icon.svg" bgColor="#ECE1FF"/>, <TechnologyCard imgPath="/react_icon.svg" bgColor="#FFE8EE"/>, <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>, <TechnologyCard imgPath="/javascript_icon.svg" bgColor="#DFE6FC"/>]}
        />
    )
}