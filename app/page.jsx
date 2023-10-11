import EventCard from "./EventCard";

export default function Home() {
  return (
    <>
      <HomeSection title="News">
        <div className="grid grid-rows-[165px_165px] grid-cols-4 gap-4">
          <DynamicNewsCard
            img="https://deathstrandingpc.505games.com/wp-content/themes/deathstranding-cyberpunk/img/topimage.jpg"
            title="Death Stranding – A Journey Truly Like No Other"
          />
          <NewsCard 
            img="https://pickywallpapers.com/img/2020/12/fifa-21-hd-wallpaper-background-2257-2294-hd-wallpapers.jpg"
            title="The Club Officially Join the Game FIFA 2020"
          />
          <NewsCard 
            img="https://i.redd.it/5p16231zzx651.png"
            title="Gear up for the New Season of Apex Legends"
          />
          <NewsCard 
            img="https://images4.alphacoders.com/928/thumb-1920-928114.jpg"
            title="Sequel to the acclaimed Ori and The Blind Forest"
          />
          <NewsCard 
            img="https://www.destructoid.com/wp-content/uploads/2022/10/DeadSpaceRemake_Lead_101422.jpg"
            title="Dead Space Remake now Available"
          />
      </div>
      </HomeSection>
      <HomeSection title="Tournaments" >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4">
          <EventCard name="COD:Warzone Platinum Tournament" img={'https://t2.tudocdn.net/647381?w=1200&h=1200'}/>
          <EventCard name="Realme PUBG Tournament" img={'https://1.bp.blogspot.com/-oZzzBiF2Ma8/XqKR07pc7oI/AAAAAAAATLs/HPcdN1KMgso2i2iQ7Lmfd15ktDf7u6hcQCLcBGAsYHQ/s1600/realme.jpg'}/>
          <EventCard name="Apex Legends Tournament" img={'https://pbs.twimg.com/media/DzOsgqLWoAMAW6w.jpg'} />
          <EventCard name="Fortnite Tournment" img={'https://uvmbored.com/wp-content/uploads/2022/11/FortnitePoster_Bored.jpg'} />
          <EventCard name="League Of Legends Worlds" img={'https://www.global-esports.news/wp-content/uploads/2022/01/League-of-Legends-2022.jpg'}/>
          <EventCard name="Valorant Ignition Series" img={'https://s.yimg.com/os/creatr-uploaded-images/2020-06/e3acbca0-afa3-11ea-abfe-ab3e810fb746'}/>
          <EventCard name="Overwatch League Regional" img={'https://pbs.twimg.com/media/Eellx6OUYAA42o9.png'}/>
          <EventCard name="CSGO Open Tournament" img={'https://images.start.gg/images/tournament/192648/image-f97c1ae551fcb79f8be9f0aee8cdbe32.png?ehk=ZATII%2Fey%2Bq64%2BYkJr5WMyI8KrYmNNt8qRa0M1OsTRmQ%3D&ehkOptimized=Jfdy7rS%2B5qxl0e5C3tj6i%2FjPVeHLAxesfctq99QcTGU%3D'}/>
        </div>
      </HomeSection>
    </>
  );
}

function HomeSection({ title, children }){
  return (
    <div className="mb-4">
      <h1 className="text-lg text-slate-200 pb-2 mb-4 border-b border-slate-700">
        {title}
      </h1>
      {children}
    </div>
    
  )
}

function DynamicNewsCard({img, title}){
  return (
    <article className="row-span-2 col-span-2 relative cursor-pointer group flex flex-col p-4 justify-end items-start z-0 bg-slate-800 text-slate-200 rounded-md overflow-hidden">
      <figure className="transition duration-500 absolute z-10 inset-0 after:content-[''] group-hover:scale-105 after:block after:absolute after:inset-0 after:z-30 after:bg-news-card-gradient ">
        <img className="z-10 w-full h-full object-cover object-center" src={img} alt="" />
      </figure>
      <h1 className="z-40 w-2/3 leading-none">{ title }</h1>
    </article>
  )
}

function NewsCard({ img, title = '' }){
  return (
    <article className="relative cursor-pointer group flex flex-col p-4 justify-end items-start z-0 bg-slate-800 text-slate-200 rounded-md overflow-hidden">
      <figure className="transition duration-500 absolute z-10 inset-0 after:content-[''] group-hover:scale-105 after:block after:absolute after:inset-0 after:z-30 after:bg-news-card-gradient ">
        <img className="z-10 w-full h-full object-cover object-center" src={img} alt="" />
      </figure>
      <h1 className="z-40 w-2/3 leading-none">{ title }</h1>
    </article>
  );
}
