'use client';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Search from './Search';

const Widgets = () => {
  return (
    <section className="h-screen max-w-sm mt-2 px-4 hidden col-start-7 col-end-11 lg:block">
      <Search />

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="bhakchod_lalit"
        options={{ height: 1000 }}
      />
    </section>
  );
};
export default Widgets;
