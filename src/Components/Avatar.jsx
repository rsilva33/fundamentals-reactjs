import styles from './Avatar.module.css';

//Desestruturacao
// const user = { name: "Diego"}
// const { name } = user;

export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}