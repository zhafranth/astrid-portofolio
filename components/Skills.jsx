// Components
import TitleSection from "./TitleSection";

const Skills = () => {
  return (
    <section className="bg-primary-light dark:bg-secondary-light dark:bg-opacity-40 py-6 px-8 pb-20 min-h-[500px] mt-20 transition-all">
      <TitleSection>My Set Skills</TitleSection>
      <div className="container flex justify-center gap-16 md:gap-24 flex-wrap">
        <div className="w-48 h-48 8 bg-white rounded-[72px] shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 p-8 flex justify-center items-center">
          <img
            src="/images/skill-pentaho.png"
            alt="pentaho skill"
            className="object-cover object-center"
          />
        </div>
        <div className="w-48 h-48 8 bg-white rounded-[72px] shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 p-8 flex justify-center items-center">
          <img
            src="/images/skill-mattilion.png"
            alt="matillion skill"
            className="object-cover object-center"
          />
        </div>
        <div className="w-48 h-48 8 bg-white rounded-[72px] shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 p-8 flex justify-center items-center">
          <img
            src="/images/skill-looker.png"
            alt="looker skill"
            className="object-cover object-center"
          />
        </div>
        <div className="w-48 h-48 8 bg-white rounded-[72px] shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 p-8 flex justify-center items-center">
          <img
            src="/images/skill-metabase.png"
            alt="metabase skill"
            className="object-cover object-center"
          />
        </div>
        <div className="w-48 h-48 8 bg-white rounded-[72px] shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 p-8 flex justify-center items-center">
          <img
            src="/images/skill-grafana.png"
            alt="grafana skill"
            className="object-cover object-center"
          />
        </div>
        <div className="w-48 h-48 8 bg-white rounded-[72px] shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 p-8 flex justify-center items-center">
          <img
            src="/images/skill-tableau.png"
            alt="tableau skill"
            className="object-cover object-center"
          />
        </div>
        <div className="w-48 h-48 8 bg-white rounded-[72px] shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 p-8 flex justify-center items-center">
          <img
            src="/images/skill-datastudio.png"
            alt="datastudio skill"
            className="object-cover object-center"
          />
        </div>
        <div className="w-48 h-48 8 bg-white rounded-[72px] shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 p-8 flex justify-center items-center">
          <img
            src="/images/skill-bigquery.png"
            alt="bigquery skill"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
