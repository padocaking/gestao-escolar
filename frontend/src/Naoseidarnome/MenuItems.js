import { RiGraduationCapLine } from "react-icons/ri";

const MenuItems = {

    aluno: [
        { 
            icon: <RiGraduationCapLine />,
            text: "Início",
            subItem: []
        },
        { 
            icon: <RiGraduationCapLine />,
            text: "Requerimento",
            subItem: []
        },
        { 
            icon: <RiGraduationCapLine />,
            text: "Horários",
            subItem: []
        },
        { 
            icon: <RiGraduationCapLine />,
            text: "Financeiro",
            subItem: []
        },
        { 
            icon: <RiGraduationCapLine />,
            text: "Central Aluno",
            subItem: [
                { 
                    icon: <RiGraduationCapLine />,
                    text: "Faltas",
                    subItem: []
                },
                { 
                    icon: <RiGraduationCapLine />,
                    text: "Notas",
                    subItem: []
                },
            ]
        },
        { 
            icon: <RiGraduationCapLine />,
            text: "Aluno",
            subItem: []
        },
    ]

}

export default MenuItems