import styles from './TableAdvanced04.module.css';

export const TableAdvanced04 = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>Propriedade</th>
          <th className={styles.th}>Caixa de combinação 1</th>
          <th className={styles.th}>Caixa de combinação 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.td}>Intervalo de entrada</td>
          <td className={styles.td}>Anos</td>
          <td className={styles.td}>Meses</td>
        </tr>
        <tr>
          <td className={styles.td}>Vínculo da célula</td>
          <td className={styles.td}>$AC$4</td>
          <td className={styles.td}>$AD$3</td>
        </tr>
        <tr>
          <td className={styles.td}>Linhas suspensas</td>
          <td className={styles.td}>8</td>
          <td className={styles.td}>12</td>
        </tr>
        <tr>
          <td className={styles.td}>Sombreamento 3D</td>
          <td className={styles.td}>Sim</td>
          <td className={styles.td}>Sim</td>
        </tr>
        <tr>
          <td className={styles.td}>Altura</td>
          <td className={styles.td}>0,6 cm</td>
          <td className={styles.td}>1,5 cm</td>
        </tr>
        <tr>
          <td className={styles.td}>Largura</td>
          <td className={styles.td}>0,6 cm</td>
          <td className={styles.td}>2,5 cm</td>
        </tr>
      </tbody>
    </table>
  );
};
