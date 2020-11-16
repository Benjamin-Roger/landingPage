import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope, faFile } from '@fortawesome/free-solid-svg-icons';

library.add({ faGithub, faLinkedin, faWhatsapp, faGlobeEurope, faFile });

import _ from '@/libs/i18n';


const IconContainer = ({socialLinks}) => (<ul className="social flex justify-around flex-wrap mt-3">
  {socialLinks.map((link, key) =>
    <li
      style={{
        background: link.color
      }}
      key={`link-${key}`}
      className="social__item block rounded mx-3 my-2 hover:animate-pulse flex-grow">

      <a href={link.url} title={link.name} alt={link.name} target="_blank" className="block w-full h-full p-5 text-center ">
        {link.icon ?
          <FontAwesomeIcon className="text-5xl text-white" icon={[link.source, link.icon]} />
          : ''}
        {link.source === 'img' ?
          <Image width="130" height="40" className="mt-4 mx-auto" alt="Malt" title="Malt" src={link.img} />
          : ''}
        <p className="text-white mt-2 mb-1">
          {link.name || _(link.translatableString)}
        </p>
      </a>

    </li>
  )}

</ul>);

export default IconContainer;