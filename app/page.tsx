import Image from 'next/image'
import Link from 'next/link'
import InfoCanais from './components/infoCanais'
export default function Home() {
  //    {nome:"",conteudo:"",tema:"",img:"",link:""},

  const canais = [
    { nome: "Tecnoetc", conteudo: "Tecnologia e poscasts", tema: "Tecnologia", img: "https://yt3.googleusercontent.com/9yFKUlKUT5l-xMbBda1VInNK9jX-QlfTpSAyb4DcCw9lKCCfO22jWmGkcScmymB_bZw3CKETHcw=s176-c-k-c0x00ffffff-no-rj", link: "https://www.youtube.com/@tecnoetc" },
    { nome: "Nerdeek Music", conteudo: "Covers", tema: "Musica", img: "https://yt3.googleusercontent.com/jmWTSTyHE0kR7TdTX97DxeJDRvI8dK9laAZF1AF8qdthJ1vovcHkOi9oSycvjQ0aPTqKbyUe=s176-c-k-c0x00ffffff-no-rj", link: "https://www.youtube.com/@JeanGuitar89" },
    { nome: "Clube Full-Stack", conteudo: "Coisas de PHP", tema: "Programação", img: "https://yt3.googleusercontent.com/PwKEk2HVtuL9W8KLYryUVmAO-gZLP1Y5vsgXA4JVrVWaqpxrsSA7QlqxfUtzj9njcNO7kGzAl-I=s176-c-k-c0x00ffffff-no-rj", link: "https://www.youtube.com/@AlexandreCardoso" },
    { nome: "Curso de Técnologia", conteudo: "Dia a dia", tema: "Programação", img: "https://yt3.googleusercontent.com/Yc89k6C3lfLrlLmaavblKrvKQMnsPN2hURTh6oZ3KrViRl7ERk2LdPqkTJkYybyoL-40b_Zr5w=s176-c-k-c0x00ffffff-no-rj", link: "https://www.youtube.com/@cursodetecnologia/about" }
  ]


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <div className=''>
        <div className='z-10 w-full max-w-5xl items-center  font-mono text-sm '>
          <h1 className='text-3xl'>Ajuntador de canais </h1><br />
          <p>Projeto iniciado em next.js no sábado do pão de alho. <br />Onde pretendo juntas os conteúdos que eu termino esquecendo onde estão.</p>
        </div>
        <div className=' min-h-screen flex-col items-left justify-between p-24'>

          {canais.map((item, key) => (
                <div key = {key}>
                <InfoCanais nome={item.nome} conteudo={item.conteudo} tema={item.tema} img={item.img} link={item.link}></InfoCanais>
                </div>
              ))}

        </div>
      </div>
    </main>
  )
}
