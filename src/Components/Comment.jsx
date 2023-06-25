import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }){
  //Importante iniciar o estado com alguma informacao que seja do mesmo tipo que a informacao armazenada
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment()
  {
    onDeleteComment(content);
  }

  function handleLikeComment()
  {
    setLikeCount((state) => {
      return state + 1
    });
  }
  
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

            <button 
              onClick={handleDeleteComment}
              title='Delete comment'
              >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button 
            // Onclick OnSubmit esperam uma funcao como propriedade e nao a execucao da funcao
            // execucao de uma funcao => onClick={setLikeCount(likeCount + 1)}
            onClick={() => setLikeCount(likeCount + 1)}
          >
            <ThumbsUp />
              Aplaudir 
              <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}