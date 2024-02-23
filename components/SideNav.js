'use client';
import SideNavItem from '@/components/SideNavItem';


const SideNav = (props) => {
  return (
    <section className="pt-8 pl-8 pb-8 mr-6" style={{ width: "240px" }}>
      <nav id='side-nav' className="overflow-auto">
        {Object.keys(props.postMetaData).map((key, index) => (
          <SideNavItem key={`${key}-${index}`} title={key} posts={props.postMetaData[key]} />
        ))}
      </nav>
    </section>
  );
};

export default SideNav;
