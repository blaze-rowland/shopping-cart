import { useState } from 'react';
import {
  ProductNav,
  ProductNavBody,
  ProductNavHeader,
  ProductNavSection,
  ProductNavTag,
  ProductNavTags,
} from './ProductNav.style';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProductNavigationProps {}

export const ProductNavigation: React.FC<ProductNavigationProps> = () => {
  const [showStrain, setShowStrain] = useState<boolean>(true);

  return (
    <ProductNav>
      <ProductNavSection>
        <ProductNavHeader onClick={() => setShowStrain(!showStrain)}>
          <h4>Strain Type</h4>
          <FontAwesomeIcon icon={showStrain ? faMinus : faPlus} />
        </ProductNavHeader>
        {showStrain && (
          <ProductNavBody>
            <ProductNavTags>
              <ProductNavTag>Sativa</ProductNavTag>
              <ProductNavTag>Hybrid</ProductNavTag>
              <ProductNavTag>Indica</ProductNavTag>
              <ProductNavTag>CBD</ProductNavTag>
            </ProductNavTags>
          </ProductNavBody>
        )}
      </ProductNavSection>
    </ProductNav>
  );
};
