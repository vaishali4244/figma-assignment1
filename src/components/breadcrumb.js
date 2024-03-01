


const Breadcrumb = ({ crumbs }) => {
    return (
      <div className="breadcrumb-container">
        {crumbs.map((crumb, index) => (
          <span key={index}>
            {crumb.label}
            {index < crumbs.length - 1 && <span> {`>`} </span>}
          </span>
        ))}
      </div>
    );
  }
  
  export default Breadcrumb;