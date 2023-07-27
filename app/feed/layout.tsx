import type { Metadata } from 'next';

import Widgets from '@/components/widgets/Widgets';

export const metadata: Metadata = {
  title: 'Equal Reach | Feeds',
  description:
    'Equal Reach aims to address social inequality and promote equal opportunities for all individuals, regardless of their background, gender, race, or socioeconomic status.',
};

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="col-span-10 grid gap-2 grid-cols-10">
      {children}
      <Widgets />
    </div>
  );
};

export default layout;
