import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(){
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/rsilva33.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
            <strong>Ronaldo Silva</strong>
            <time title="11 de Maio as 03:13h" dateTime="2023-06-07 09:30:00">Cerca de 1h atras</time>
            </div>

            <button title='Deletar comentario'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom meu chapa!!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
              Aplaudir 
            
              <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}