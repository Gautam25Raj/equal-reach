import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equal Reach | Feed',
  description:
    'Equal Reach aims to address social inequality and promote equal opportunities for all individuals, regardless of their background, gender, race, or socioeconomic status.',
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
