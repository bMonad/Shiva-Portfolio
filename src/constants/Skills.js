import { LiaHtml5, LiaCss3Alt, LiaGit } from "react-icons/lia";
import { BiLogoTailwindCss } from "react-icons/bi";
import { RiJavascriptLine, RiReactjsFill, RiNodejsFill, RiNpmjsLine } from "react-icons/ri";
import { TbBrandTypescript, TbBrandRedux, TbApi } from "react-icons/tb";
import { SiReactrouter, SiFirebase, SiMysql, SiGoogleauthenticator, SiBun } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { FaTimeline } from "react-icons/fa6";
import { TbStatusChange } from "react-icons/tb";


export const skillConstant = [
  {
    title: 'Front-End Developer',
    skills: [
      {
        name: 'HTML',
        icon: LiaHtml5,
      },
      {
        name: 'CSS',
        icon: LiaCss3Alt,
      },
      {
        name: 'Tailwind CSS',
        icon: BiLogoTailwindCss,
      },
      {
        name: 'JavaScript',
        icon: RiJavascriptLine,
      },
      {
        name: 'TypeScript',
        icon: TbBrandTypescript,
      },
      {
        name: 'React.js',
        icon: RiReactjsFill,
      },
      {
        name: 'React-Router-Dom',
        icon: SiReactrouter,
      },
      {
        name: 'Redux-Toolkit',
        icon: TbBrandRedux,
      }
    ]
  },
  {
    title: 'Back-End Developer',
    skills: [
      {
        name: 'Node.js',
        icon: RiNodejsFill,
      },
      {
        name: 'Firebase',
        icon: SiFirebase,
      },
      {
        name: 'My SQL',
        icon: SiMysql,
      },
      {
        name: 'Git',
        icon: LiaGit,
      },
      {
        name: 'REST APIs',
        icon: TbApi
      },
      {
        name: 'Bun',
        icon: SiBun
      },
      {
        name: 'NPM',
        icon: RiNpmjsLine
      },
      {
        name: 'Google Authentication',
        icon: SiGoogleauthenticator
      },
    ]
  },
  {
    title: 'Soft-Skills',
    skills: [
      {
        name: 'Collaborative',
        icon: IoIosPeople
      },
      {
        name: 'Problem-Solving',
        icon: LuBrainCircuit
      },
      {
        name: 'Adaptability',
        icon: TbStatusChange
      },
      {
        name: 'Time Management',
        icon: FaTimeline
      }
    ]
  },
]