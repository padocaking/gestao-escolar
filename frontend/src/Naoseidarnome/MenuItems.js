import { IoHomeOutline } from "react-icons/io5";    // home
import { IoDocumentTextOutline } from "react-icons/io5";   // req
import { WiTime4 } from "react-icons/wi";           // time
import { HiOutlineDocumentCurrencyDollar } from "react-icons/hi2";  // financeiro
import { RiGraduationCapLine } from "react-icons/ri";   // central
import { FaRegUser } from "react-icons/fa6";        // user

const MenuItems = {

    aluno: [
        {
            path: '/',
            text: "Início",
            icon: <IoHomeOutline />,
            subItem: []
        },
        {
            path: '/requerimento',
            text: "Requerimento",
            icon: <IoDocumentTextOutline />,
            subItem: []
        },
        {
            path: '/horarios',
            text: "Horários",
            icon: <WiTime4 />,
            subItem: []
        },
        {
            path: '/financeiro',
            text: "Financeiro",
            icon: <HiOutlineDocumentCurrencyDollar />,
            subItem: []
        },
        {
            text: "Central Aluno",
            icon: <RiGraduationCapLine />,
            subItem: [
                {
                    path: '/boletim',
                    text: "Boletim"
                }
            ]
        },
        { 
            path: '/aluno',
            text: "Aluno",
            icon: <FaRegUser />,
            subItem: []
        },
    ],

    professor: [
        {
            path: '/',
            text: "Início",
            icon: <IoHomeOutline />,
            subItem: []
        },
        {
            path: '/requerimento',
            text: "Requerimento",
            icon: <IoDocumentTextOutline />,
            subItem: []
        },
        {
            path: '/horarios',
            text: "Horários",
            icon: <WiTime4 />,
            subItem: []
        },
        {
            text: "Central Professor",
            icon: <RiGraduationCapLine />,
            subItem: [
                {
                    path: '/presenca',
                    text: "Presença"
                },
                {
                    path: '/lancamento-de-notas',
                    text: "Lançamento de notas"
                }
            ]
        },
        { 
            path: '/professor',
            text: "Professor",
            icon: <FaRegUser />,
            subItem: []
        },
    ],

    diretor: [
        {
            path: '/',
            text: "Início",
            icon: <IoHomeOutline />,
            subItem: []
        },
        {
            path: 'diretor/requerimento',
            text: "Requerimento",
            icon: <IoDocumentTextOutline />,
            subItem: []
        },
        {
            text: "Central Diretor",
            icon: <RiGraduationCapLine />,
            subItem: [
                {
                    path: '/diretor/turmas',
                    text: "Turmas"
                },
                {
                    path: '/diretor/professores',
                    text: "Professores"
                },
                {
                    path: '/diretor/alunos',
                    text: "Alunos"
                }
            ]
        }
    ]

}

export default MenuItems