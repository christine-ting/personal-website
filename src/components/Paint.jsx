import React from 'react';

const Paint = ({ clickToChangeFilter, color }) => {

  return (
    <div className="paint">
      <div id="paint-box">
        { color ? (
          <svg onClick={() => clickToChangeFilter()} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="lightGray" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"/></svg>
        ) : (
          <svg onClick={() => clickToChangeFilter()} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="lightGray" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6.373 16.199c3.809.315 2.446-3.73 5.97-3.769l1.526 1.274c.381 4.6-5.244 5.626-7.496 2.495zm8.293-3.396l-1.549-1.293c.457-2.18 1.854-4.188 3.267-5.51l3.362 2.804c-1.041 1.636-3.023 3.154-5.08 3.999z"/></svg>      
        ) }
      </div>
    </div>

  );
};

export default Paint;