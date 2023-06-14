import { Header } from './Components/Header';
import { Post } from './Components/Post';
import { Sidebar } from './Components/Sidebar';
import styles from './App.module.css';

import './global.css';


export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        
        <Sidebar/>

        <main>
          <Post
            author="Rona Silva"
            content="Loren ipsum"
          />
          <Post
            author="Brisa Souza"
            content="Lorrn ipsum"
          />
        </main>

      </div>
    </div>
  )
}