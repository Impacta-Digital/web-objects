import type { DownloadButtonProps } from '../components/types/DownloadButtonProps';

interface PageData {
  classTitle: string;
  course: string;
  images: string[];
  videos?: string[];
  download?: string;
  multipleDownloads?: DownloadButtonProps[];
}

export default PageData;
