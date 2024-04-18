import { useEffect, useState} from 'react'

import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) =>{
    const [repos, setRepos] = useState([])
    const[estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson =>{
            setEstaCarregando(false)
            setRepos(resJson)
        }, 3000)
    },[nomeUsuario])

    return(
        <div className='conatiner'>
            {estaCarregando ? (
                <h2>Carregando...</h2>
            ) : (
                <ul className={styles.list}>
                {repos.map((repositorio) => (
                    <li className={styles.listItem} key={repositorio.id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> {repositorio.name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Language:</b>{repositorio.language}
                        </div>
                        <a className={styles.itemLink} target='_bank' href={repositorio.html_url}>Visitar no GitHube
                        </a>
                    </li>
                ))}
            </ul>  
            )}
            </div>  
    )
}

export default ReposList