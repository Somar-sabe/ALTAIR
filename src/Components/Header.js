import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" aria-current="page" className="logo w-inline-block w--current">
          <div className="header__logo w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1806.22299 535.49023">
              <path fill="currentColor" d="M736.16106-706.0485h88.56788v518.968H736.16106V-441.85379H661.13934v254.77325H572.57147v-518.968h88.56787v178.62684h75.02172Zm778.50672,518.968h88.56787v-518.968h-88.56787Zm117.35327-433.29114h68.8363v433.29114h88.56788V-620.37168h68.8363v-85.56787H1632.02105Zm520.53207-85.56787v85.56787h68.83716v433.29114h88.56787V-620.37168h68.83631v-85.56787Zm-1003.16,254.17023c7.36474,1.65771,14.96338,3.59668,22.729,5.80518l24.21-85.124a472.95,472.95,0,0,0-50.92627-11.65527c-8.11816-78.46973-46.86816-171.51172-143.62021-171.51172-90.58838,0-125.557,72.23144-133.95352,123.90576l87.3545,14.19385c1.37793-8.481,8.97607-49.64356,44.66357-49.64356,42.6875,0,53.22461,65.24659,55.79,80.64356-99.93587,9.19238-203.35254,92.52571-203.35254,218.44238,0,87.75,58.5,147.94824,134.30566,147.94824C1091.2876-178.76493,1149.39307-302.46317,1149.39307-451.76932ZM985.70436-267.28446c-21.54176,0-44.82643-17.012-44.82643-57.84538,0-58.33333,37.57634-118.58333,120.08789-131.43684C1060.96582-361.92557,1033.19541-267.28446,985.70436-267.28446ZM2149.367-451.76932c7.36474,1.65771,14.96338,3.59668,22.729,5.80518l24.21-85.124a472.95,472.95,0,0,0-50.92627-11.65527c-8.11816-78.46973-46.86816-171.51172-143.62021-171.51172-90.58838,0-125.557,72.23144-133.95352,123.90576l87.35449,14.19385c1.37793-8.481,8.97608-49.64356,44.66358-49.64356,42.6875,0,53.22461,65.24659,55.79,80.64356-99.93587,9.19238-203.35254,92.52571-203.35254,218.44238,0,87.75,58.5,147.94824,134.30566,147.94824C2091.26153-178.76493,2149.367-302.46317,2149.367-451.76932ZM1985.67829-267.28446c-21.54176,0-44.82643-17.012-44.82643-57.84538,0-58.33333,37.57634-118.58333,120.08789-131.43684C2060.93975-361.92557,2033.16934-267.28446,1985.67829-267.28446Zm-776.24682,80.20392H1327.445c89.42657,0,153.93111-80.63017,153.93111-161.26166,0-49.11083-23.4562-98.95491-62.30544-130.47426a138.35648,138.35648,0,0,0,31.51935-87.96138c0-80.63017-71.83443-139.27066-137.80481-139.27066H1209.43147Zm103.35378-431.00788c27.85373,0,49.84408,18.32605,49.84408,51.31058,0,36.6508-22.72294,54.97554-49.84408,54.97554h-15.3937V-618.08842Zm-15.3937,343.0465v-148.799H1327.445c41.78159,0,65.97038,31.518,65.97038,75.49872,0,43.24744-24.18879,73.30028-65.97038,73.30028Z" transform="translate(-572.57147 714.25516)"></path>
            </svg>
          </div>
        </a>
        <a href="#" className="nav-trigger w-inline-block">
          <div className="html-embed-3 w-embed">
            <style type="text/css">
              .nav-trigger__squig {
                stroke-dasharray: 100;
                stroke-dashoffset: 100;
                transition: stroke-dashoffset 600ms ease-in-out;
              }
              .nav-trigger:hover .nav-trigger__squig {
                stroke-dashoffset: 0;
              }
              .nav-trigger__top {
                transition: transform 600ms ease-in-out;
              }
              .nav-trigger:hover .nav-trigger__top {
                transform: translateX(100px);
              }
            </style>
            <svg alt="navigation" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <line className="nav-trigger__top" x1="1.74846e-07" y1="8" x2="46" y2="8" stroke="currentColor" strokeWidth="3"></line>
                <line className="nav-trigger__bottom" x1="1.74846e-07" y1="38" x2="46" y2="38" stroke="currentColor" strokeWidth="3"></line>
                <line className="nav-trigger__mid" x1="1.74846e-07" y1="23" x2="46" y2="23" stroke="currentColor" strokeWidth="3"></line>
                <path className="nav-trigger__squig" d="M1.5 8.5C1.5 8.5 12 19 22.5 16.5C33 14 21.5 1 17 3C12.5 5 18 18.5 45 3" stroke="currentColor" strokeWidth="3"></path>
              </g>
            </svg>
          </div>
          <div className="hide">Navigation</div>
        </a>
      </div>
    </header>
  );
};

export default Header;
