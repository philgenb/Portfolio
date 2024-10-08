'use client';
import ProjectCard from "@/components/ProjectCard.js";
import {useEffect, useState} from "react";
import ProjectTagSection from "@/components/ProjectTagSection";
import {motion} from "framer-motion";
import TechnologyCard from "@/components/TechnologyCard";

const RecentProjectPage = () => {
    const projects = [
        {
            title: "Studyplanner Web",
            path: "studyplannerweb",
            description: "A studyplanner and progress tracker for students. The application is built with React and Firebase.",
            tags: ["Javascript", "TailwindCSS", "Firebase", "NoSQL"],
            lowerTags: ["Web", "Responsive", "Firebase", "Firestore"],
            technologies: [
                <TechnologyCard imgPath="/html_icon.svg" bgColor="#DFE6FC"/>,
                <TechnologyCard imgPath="/react_icon.svg" bgColor="#FFE8EE"/>,
                <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>,
                <TechnologyCard imgPath="/javascript_icon.svg" bgColor="#F3D8FE"/>
            ],
            imgSrc: "/assets/applications/Studyplanner_Webapp.png"
        },
        // {
        //     title: "Plantit",
        //     path: "plantit",
        //     description: "A mobile app that encourages daily good deeds, with a tree growing as you progress. Built with Flutter and Firebase.",
        //     tags: ["Flutter", "Mobile App", "Firebase"],
        //     technologies: [
        //         <TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>,
        //         <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>,
        //         <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>
        //     ]
        // },
        {
            title: "Studyplanner Mobile",
            path: "studyplannermobile",
            description: "A studyplanner and progress tracker for students. The application is built with Flutter and Firebase.",
            tags: ["Flutter", "Dart", "Firebase", "NoSQL"],
            lowerTags: ["Mobile", "Responsive", "Firebase", "Firestore"],
            technologies: [
                <TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>,
                <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>,
                <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>
            ],
            imgSrc: "/assets/applications/preview/StudyPlanner_Mobile_Group_Preview.png"
        },

        {
            title: "Clockwise",
            path: "clockwise",
            description: "Time-tracking web application built with React and Flask, designed to streamline work hour logging and vacation management for research assistants",
            tags: ["Python", "Typescript", "NoSQL", "API"],
            lowerTags: ["Web", "React", "Flask", "GPL-3.0"],
            technologies: [
                <TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>,
                <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>,
                <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>,
                <TechnologyCard imgPath="/javascript_icon.svg" bgColor="#F3D8FE"/>
            ],
            imgSrc: "/assets/applications/preview/Clockwise_Preview.png"
        },
        {
            title: "Portfolio",
            path: "portfolio",
            description: "This portfolio website. Built with NextJS, Javascript and TailwindCSS.",
            tags: ["Javascript", "TailwindCSS", "CSS"],
            lowerTags: ["Web", "Next.js", "React", "Responsive"],
            technologies: [
                <TechnologyCard imgPath="/dart_icon.svg" bgColor="#DFE6FC"/>,
                <TechnologyCard imgPath="/flutter_icon.svg" bgColor="#FFE8EE"/>,
                <TechnologyCard imgPath="/branch_icon.svg" bgColor="#F3D8FE"/>,
                <TechnologyCard imgPath="/javascript_icon.svg" bgColor="#F3D8FE"/>
            ],
            imgSrc: "/assets/applications/preview/Portfolio_Preview.png"
        }
    ];

    const [selectedCard, setSelectedCard] = useState(0);
    const [activeTags, setActiveTags] = useState(projects[0].tags);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedCard = sessionStorage.getItem("selectedCard");
            if (savedCard) {
                setSelectedCard(parseInt(savedCard));
            }
        }
    }, []);

    const appearVariant = {
        hidden: {opacity: 0, x: '-50%'},
        visible: {opacity: 1, x: 0},
    };

    const handleCardClick = (index) => {
        setSelectedCard(index);
        if (typeof window !== 'undefined') {
            sessionStorage.setItem("selectedCard", index);
        }
    };

    useEffect(() => {
        setActiveTags(projects[selectedCard].tags);
    }, [selectedCard]);

    return (
        <div id="recentProjects" className="flex flex-col h-fit sm:h-screen w-full px-0 md:px-8 py-28 transition-all">
            <div className="flex flex-col gap-6 items-start mx-auto sm:items-end xl:items-start transition-all sm:max-w-fit">
                {/* ProjectTagSection */}
                <ProjectTagSection
                    className="hidden sm:flex transition-all self-end"
                    tags={activeTags}
                    activeTags={activeTags}
                />
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 md:gap-6 xl:gap-12 2xl:gap-16 transition-all justify-center">
                    {/* Recent Projects for Small Devices */}
                    <motion.div
                        initial={'hidden'}
                        animate={'visible'}
                        transition={{duration: 0.2, delay: 0.2}}
                        variants={appearVariant}
                        className="flex gap-4 sm:hidden mb-6"
                    >
                        <div className="w-0.5 h-28 rounded-lg bg-sectionMarker"></div>
                        <h1 className="text-4xl text-gray-900 whitespace-nowrap font-black transition-all">
                            My recent<br/>projects
                        </h1>
                    </motion.div>

                    {projects.map((project, index) => (
                        <div key={index} className={`relative ${index === 1 ? 'flex' : ''}`}>
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                tags={project.lowerTags}
                                imgSrc={project.imgSrc}
                                animationDelay={0.1 * (index + 1)}
                                classname=""
                                onClick={() => handleCardClick(index)}
                                isSelected={selectedCard === index}
                                path={project.path}
                                technologies={project.technologies}
                            />
                            {index === 1 && (
                                <motion.div
                                    initial={'hidden'}
                                    animate={'visible'}
                                    transition={{duration: 0.2, delay: 0.2}}
                                    variants={appearVariant}
                                    className="hidden absolute sm:flex top-[-10rem] left-1 gap-4"
                                >
                                    <div className="w-0.5 h-32 rounded-lg bg-sectionMarker"></div>
                                    <h1 className="text-3xl lg:text-4xl text-gray-900 whitespace-nowrap font-black transition-all">
                                        My recent<br/>projects
                                    </h1>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentProjectPage;
