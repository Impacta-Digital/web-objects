import styles from './GridBasic03.module.css';

export const GridBasic03 = () => {
  return (
    <div className={styles['grid-container']}>
      <p className='--bulleted'>
        <span className='--highlight'>
          Um formulário em planilha com aspecto profissional possui controles bem alinhados e distribuídos
          uniformemente.
        </span>{' '}
        Isso facilita a separação visual das informações;
      </p>
      <p className='--bulleted'>
        <span className='--highlight'>
          Você também pode vincular uma lista de itens à outra, por meio de caixas de combinação (listas suspensas) ou
          por validação de dados.
        </span>{' '}
        Dessa forma, quando a primeira lista muda de valor, a segunda é carregada com valores relevantes à primeira;
      </p>
      <p className='--bulleted'>
        <span className='--highlight'>
          É possível usar controles de formulário para ativar ou desativar formatações condicionais.
        </span>{' '}
        Isso é útil porque você poderá até controlar se deseja ver determinados destaques ou não no seu dashboard;
      </p>
      <p className='--bulleted'>
        <span className='--highlight'>
          A navegação por links em seu dashboard representa uma forma muito intuitiva, bastante semelhante à navegação
          em páginas da Web.
        </span>{' '}
        Ao digitar endereços de Internet, caminhos de servidor na rede ou endereços de e-mail, o Excel já cria esses
        links automaticamente. Você também pode aplicar links em qualquer célula com conteúdo, figuras, fotografias e
        outros elementos. Esses links podem apontar para endereços e documentos externos ou locais internos da mesma
        pasta de trabalho.
      </p>
    </div>
  );
};
