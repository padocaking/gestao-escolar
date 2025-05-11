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
                    path: '/faltas',
                    text: "Faltas"
                },
                {
                    path: '/boletim',
                    text: "Notas"
                }
            ]
        },
        { 
            path: '/aluno',
            text: "Aluno",
            icon: <FaRegUser />,
            subItem: []
        },
    ]

}

export default MenuItems