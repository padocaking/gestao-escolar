import { IoHomeOutline } from "react-icons/io5";    // home
import { IoDocumentTextOutline } from "react-icons/io5";   // req
import { WiTime4 } from "react-icons/wi";           // time
import { HiOutlineDocumentCurrencyDollar } from "react-icons/hi2";  // financeiro
import { RiGraduationCapLine } from "react-icons/ri";   // central
import { FaRegUser } from "react-icons/fa6";        // user

const MenuItems = {

    aluno: [
        { 
            icon: <IoHomeOutline />,
            text: "Início",
            subItem: []
        },
        { 
            icon: <IoDocumentTextOutline />,
            text: "Requerimento",
            subItem: []
        },
        { 
            icon: <WiTime4 />,
            text: "Horários",
            subItem: []
        },
        { 
            icon: <HiOutlineDocumentCurrencyDollar />,
            text: "Financeiro",
            subItem: []
        },
        { 
            icon: <RiGraduationCapLine />,
            text: "Central Aluno",
            subItem: [
                "Faltas",
                "Notas"
            ]
        },
        { 
            icon: <FaRegUser />,
            text: "Aluno",
            subItem: []
        },
    ]

}

export default MenuItems