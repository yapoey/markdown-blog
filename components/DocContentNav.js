'use client'

const DocContentNav = (props) => {
  return (
    <section className="pl-8 border-l border-base-500 my-9 sticky" style={{ minWidth: '240px', width: '240px', height: 'calc(100vh - 400px)', top: '40px' }}>
      {props.children}
    </section>
  );
};

export default DocContentNav;
