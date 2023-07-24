import type { Metadata } from 'next';

import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Equal Reach | Posts',
  description:
    'Equal Reach aims to address social inequality and promote equal opportunities for all individuals, regardless of their background, gender, race, or socioeconomic status.',
};

const layout = async ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
