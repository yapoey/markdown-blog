const DocContentNav = (props) => {
  return (
    <section id='document-content-nav' className="pl-8 border-l border-base-500 my-9 sticky" style={{ minWidth: '240px', width: '240px', height: 'fit-content', top: '40px' }}>
      {props.children}
    </section>
  );
};

export default DocContentNav;
