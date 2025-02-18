import { FullScreenLayout } from '../../layouts/FullScreenLayout';
import imageData from './assets/imageData.ts';

function LabAdvanced01() {
  return (
    <FullScreenLayout>
      <h1>Advanced 1 Page</h1>
      <img src={imageData.LabAdvanced01[0]} alt='lab01_1' />
      <img src={imageData.LabAdvanced01[1]} alt='lab01_2' />
      <img src={imageData.LabAdvanced01[2]} alt='lab01_3' />
      <img src={imageData.LabAdvanced01[3]} alt='lab01_4' />
      <img src={imageData.LabAdvanced01[4]} alt='lab01_5' />
      <img src={imageData.LabAdvanced01[5]} alt='lab01_6' />
      <p>Content for Advanced 1 goes here.</p>
    </FullScreenLayout>
  );
}

export default LabAdvanced01;
