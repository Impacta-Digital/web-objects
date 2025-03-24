import { darkTheme } from '../../../constants/colors';

export const LabConclusion = () => {
  return (
    <div className='wrapper'>
      <p style={{ textAlign: 'center', fontSize: '1.4rem', marginBottom: 0 }}>
        Parabéns! Você finalizou esta atividade.
      </p>
      <h1
        style={{
          color: darkTheme.accents.secondary,
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        Até a próxima!
      </h1>

      {/* - - - - - spacer */}
      <div className='verticalSpacer' />
    </div>
  );
};
