import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) 
{
  const [comments, setComments] = useState([
    'Post muito bacana, hein?'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", 
  {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, 
  {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment()
  {
    event.preventDefault();

    //const newCommentText = event.target.comment.value

    //Sprad Operator -> Le o valor e copia para dentro
    setComments([...comments, newCommentText]);

    //Programacao Imperativa
    //event.target.comment.value = '';

    setNewCommentText('');
  }

  function handleNewCommentChange()
  {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('This field is required.');
  }

  function deleteComment(commentToDelete)
  {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    //imutabilidade -> as variaveis nao sofrem mutacao, nos criamos um novo valor (novo espaco na memoria) 
    // console.log(`deleting comment ${comment}`)
    
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src={author.avatarUrl} />
          
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            
            if (line.type === 'paragraph') 
            {
              //Key e posta no primeiro elemento que aparecer do retorno de um map
              return <p key={line.content}>{line.content}</p>;
            } 
            else if (line.type === 'link') 
            {
              return <p key={line.content}>
                      <a href="#">{line.content}</a>
                    </p>
            }
          })
        }
      </div>
      
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>

        <textarea 
          name="comment"
          placeholder="Deixe um comentario"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required     
        />

        <footer>
          <button 
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />)
        })}
      </div>
    </article>
  )
}