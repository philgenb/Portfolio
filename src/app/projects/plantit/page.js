import ProjectDetailPage from "@/pages/ProjectDetailPage";
import TechnologyCard from "@/components/TechnologyCard";

export default function Plantit() {
    return (
        <ProjectDetailPage
            title={"Plantit"}
            idea="Plantit promotes daily eco-friendly actions, making environmental conservation a habit. Users engage in small deeds, from planting trees to reducing waste, contributing to a greener planet."
            userexperience="Plantit offers an intuitive interface for seamless navigation. A dynamic growing tree symbolizes progress with each eco-conscious action, making sustainable living accessible and enjoyable."
            technology="Built with Flutter, Plantit ensures speed and cross-platform compatibility. Firebase integration enables real-time updates, enhancing performance and accessibility for users on Android and iOS."
            imageSubtitle="Explore a greener lifestyle with Plantit: Your daily dose of eco-friendly actions for a sustainable future."
            technologies={[<TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>, <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>, <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>]}
        />
    )
}