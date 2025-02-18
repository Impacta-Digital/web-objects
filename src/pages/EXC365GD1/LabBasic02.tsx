import imageData from './assets/imageData.ts';

function LabBasic02() {
  return (
    <>
      <h1>Basic 2 Page</h1>
      <img src={imageData.LabBasic02[0]} alt='lab02_1' />
      <img src={imageData.LabBasic02[1]} alt='lab02_2' />
      <img src={imageData.LabBasic02[2]} alt='lab02_3' />
      <img src={imageData.LabBasic02[3]} alt='lab02_4' />
      <img src={imageData.LabBasic02[4]} alt='lab02_5' />
      <p>Content for Basic 2 goes here.</p>
    </>
  );
}

export default LabBasic02;
