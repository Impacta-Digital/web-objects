import imageData from './assets/imageData.ts';

function LabAdvanced02() {
  return (
    <>
      <h1>Advanced 2 Page</h1>
      <img src={imageData.LabAdvanced02[0]} alt='img02_1' />
      <img src={imageData.LabAdvanced02[1]} alt='img02_2' />
      <img src={imageData.LabAdvanced02[2]} alt='lab02_1' />
      <img src={imageData.LabAdvanced02[3]} alt='lab02_2' />
      <img src={imageData.LabAdvanced02[4]} alt='lab02_3' />
      <p>Content for Advanced 2 goes here.</p>
    </>
  );
}

export default LabAdvanced02;
