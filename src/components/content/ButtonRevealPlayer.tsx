import { ButtonRevealContent } from './ButtonRevealContent';
import { YouTubePlayer } from './YouTubePlayer';

export interface ButtonRevealPlayerProps {
  videoId: string;
  buttonText: string;
}

export const ButtonRevealPlayer = ({ videoId, buttonText }: ButtonRevealPlayerProps) => {
  return <ButtonRevealContent {...{ buttonText }} content={<YouTubePlayer {...{ videoId }} />} />;
};
