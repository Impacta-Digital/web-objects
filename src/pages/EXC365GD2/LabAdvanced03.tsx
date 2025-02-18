import { FullScreenLayout } from '../../layouts/FullScreenLayout';
import imageData from './assets/imageData.ts';

function LabAdvanced03() {
  return (
    <FullScreenLayout>
      <h1>Advanced 3 Page</h1>
      <img src={imageData.LabAdvanced03[0]} alt='lab03_1' />
      <img src={imageData.LabAdvanced03[1]} alt='lab03_2' />
      <img src={imageData.LabAdvanced03[2]} alt='lab03_3' />
      <img src={imageData.LabAdvanced03[3]} alt='lab03_4' />
      <img src={imageData.LabAdvanced03[4]} alt='lab03_5' />
      <img src={imageData.LabAdvanced03[5]} alt='lab03_6' />
      <p>Content for Advanced 3 goes here.</p>
    </FullScreenLayout>
  );
}

export default LabAdvanced03;
