import '../assets/styles/_app.scss';


const Breadcrumb = ({ crumbs }) => {
  return (
    <div className="breadcrumb-container">
      {crumbs.map((crumb, index) => (
        <p key={index}>
          {crumb.label}
          {index < crumbs.length - 1 && <span> &gt; </span>}
        </p>
      ))}
    </div>
  );
}

export default Breadcrumb;